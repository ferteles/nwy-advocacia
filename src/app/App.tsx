import { Toaster } from "sonner";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { PracticeAreas } from "./components/sections/PracticeAreas";
import { Methodology } from "./components/sections/Methodology";
import { Lawyers } from "./components/sections/Lawyers";
import { Quote } from "./components/sections/Quote";
import { Contact } from "./components/sections/Contact";

export default function App() {
  return (
    <div className="w-full min-h-screen font-['Inter',sans-serif]">
      <Navbar />
      <Hero />
      <About />
      <PracticeAreas />
      <Methodology />
      <Lawyers />
      <Quote />
      <Contact />
      <Footer />
      <Toaster position="bottom-right" richColors />
    </div>
  );
}