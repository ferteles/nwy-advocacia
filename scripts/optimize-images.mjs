import sharp from "sharp";
import { readdir, stat } from "fs/promises";
import { join, extname } from "path";

const IMAGES_DIR = new URL("../src/assets/images", import.meta.url).pathname.replace(/^\/([A-Z]:)/, "$1");

const tasks = [
  // areas-office.jpg — retrato 2592×3888, usado como bg, max 1440px qualquer dim
  {
    file: "areas-office.jpg",
    options: { width: 1440, height: 1440, fit: "inside", withoutEnlargement: true },
    format: "jpeg", formatOptions: { quality: 82, progressive: true },
  },
  // map-content.png — 2118×1690, converter para jpg 80%
  {
    file: "map-content.png",
    out: "map-content.jpg",
    options: { width: 1600, height: 1600, fit: "inside", withoutEnlargement: true },
    format: "jpeg", formatOptions: { quality: 80, progressive: true },
  },
  // footer-bg.png — 1919×2879, redimensionar e comprimir
  {
    file: "footer-bg.png",
    options: { width: 1920, height: 1920, fit: "inside", withoutEnlargement: true },
    format: "png", formatOptions: { compressionLevel: 9, quality: 80 },
  },
  // Fotos dos advogados — PNG 1024×1024 → JPEG
  {
    file: "atalita-yamamoto.png",
    out: "atalita-yamamoto.jpg",
    options: { width: 800, height: 800, fit: "inside", withoutEnlargement: true },
    format: "jpeg", formatOptions: { quality: 85 },
  },
  {
    file: "gabriela-nepomuceno.png",
    out: "gabriela-nepomuceno.jpg",
    options: { width: 800, height: 800, fit: "inside", withoutEnlargement: true },
    format: "jpeg", formatOptions: { quality: 85 },
  },
  // office-interior.png — 599×705 mas 606KB — comprimir
  {
    file: "office-interior.png",
    out: "office-interior-opt.jpg",
    options: { width: 600, withoutEnlargement: true },
    format: "jpeg", formatOptions: { quality: 85 },
  },
];

function kb(bytes) { return (bytes / 1024).toFixed(0) + " KB"; }

for (const task of tasks) {
  const inPath = join(IMAGES_DIR, task.file);
  const outFile = task.out || task.file;
  const outPath = join(IMAGES_DIR, outFile);

  const before = (await stat(inPath)).size;
  await sharp(inPath)
    .resize(task.options)
    .toFormat(task.format, task.formatOptions)
    .toFile(outPath === inPath ? outPath + ".tmp" : outPath);

  if (outPath === inPath) {
    const { rename } = await import("fs/promises");
    await rename(outPath + ".tmp", outPath);
  }

  const after = (await stat(outPath)).size;
  const pct = (((before - after) / before) * 100).toFixed(0);
  console.log(`${task.file} → ${outFile}  ${kb(before)} → ${kb(after)}  (-${pct}%)`);
}

console.log("\nPronto! Atualize os imports se necessário.");
