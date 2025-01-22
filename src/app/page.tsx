import Hero from "@/components/Hero";
import About from "@/components/About";
import Navbar from "@/components/Navbar";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Portfolio from "@/components/Portfolio";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Portfolio />
      <Footer />
    </div>
  );
}
