import svgPaths from "../../../imports/svg-ttosx3q9hh";
import { COLORS } from "../../constants/colors";

export function NWWatermark({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none select-none overflow-hidden absolute inset-0 opacity-[0.08] ${className}`}>
      <svg viewBox="0 0 200 120" fill="none" className="w-full h-auto min-w-[1400px] absolute top-1/2 left-[-10%] -translate-y-1/2 scale-[1.8] md:scale-[2.4]">
        <path d={svgPaths.p20d3ee80} fill="currentColor" />
        <path d={svgPaths.p1f763f00} fill="currentColor" />
        <path d={svgPaths.p1bfcac00} fill="currentColor" />
        <path d={svgPaths.pe80f900} fill="currentColor" />
        <path d={svgPaths.p23583a00} fill="currentColor" />
        <path d={svgPaths.p2df23480} fill="currentColor" />
        <path d={svgPaths.p32dc8b00} fill="currentColor" />
      </svg>
    </div>
  );
}

export function WatermarkHero() {
  return (
    <div className="absolute top-0 left-[-5%] w-[110%] h-[120%] overflow-hidden pointer-events-none z-0 opacity-10 flex items-start justify-center pt-10">
      <svg className="w-full min-w-[1200px] h-auto" fill="none" viewBox="0 0 1648 708">
        <path d={svgPaths.p10a4400} fill={COLORS.dark} />
        <path d={svgPaths.p160b7800} fill={COLORS.dark} />
        <path d={svgPaths.p14415570} fill={COLORS.dark} />
        <path d={svgPaths.p2db37200} fill={COLORS.dark} />
        <path d={svgPaths.p2d8b55c0} fill={COLORS.dark} />
        <path d={svgPaths.p1052f500} fill={COLORS.dark} />
        <path d={svgPaths.p36f495b8} fill={COLORS.dark} />
        <path d={svgPaths.p9a69900} fill={COLORS.dark} />
      </svg>
    </div>
  );
}

export function WatermarkFooter() {
  return (
    <div className="absolute bottom-0 right-[-10%] w-[120%] h-[150%] overflow-hidden pointer-events-none z-0 opacity-[0.03] flex items-end justify-center pb-0">
      <svg className="w-full min-w-[1500px] h-auto grayscale" fill="none" viewBox="0 0 1648 708">
        <path d={svgPaths.p10a4400} fill={COLORS.dark} />
        <path d={svgPaths.p160b7800} fill={COLORS.dark} />
        <path d={svgPaths.p14415570} fill={COLORS.dark} />
        <path d={svgPaths.p2db37200} fill={COLORS.dark} />
        <path d={svgPaths.p2d8b55c0} fill={COLORS.dark} />
        <path d={svgPaths.p1052f500} fill={COLORS.dark} />
        <path d={svgPaths.p36f495b8} fill={COLORS.dark} />
        <path d={svgPaths.p9a69900} fill={COLORS.dark} />
      </svg>
    </div>
  );
}
