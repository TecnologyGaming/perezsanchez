import "@/App.css";
import { useLenis } from "@/components/landing/useLenis";
import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { Marquee } from "@/components/landing/Marquee";
import { Areas } from "@/components/landing/Areas";
import { Method } from "@/components/landing/Method";
import { Firm } from "@/components/landing/Firm";
import { Faq } from "@/components/landing/Faq";
import { Contact } from "@/components/landing/Contact";
import { Footer, FloatingWA } from "@/components/landing/Footer";

function App() {
  useLenis();
  return (
    <div className="site grain">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Areas />
        <Method />
        <Firm />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <FloatingWA />
    </div>
  );
}

export default App;
