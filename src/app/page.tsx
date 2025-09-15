import Hero from "@/components/Hero";
import About from "@/components/About";
import Navbar from "@/components/Navbar";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Portfolio from "@/components/Portfolio";
import Head from "next/head";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>
          Ayodele Olayinka (theactualdev) — Frontend Engineer Portfolio
        </title>
        <meta
          name="description"
          content="Crafted with wit by theactualdev — I’m Ayodele Olayinka, a frontend engineer building fast, elegant apps with React, Next.js & TypeScript. Featured projects include a CRM Dashboard, FaceBlur AI, and a GPA tool."
        />
        <meta
          property="og:title"
          content="Ayodele Olayinka — Frontend Engineer"
        />
        <meta
          property="og:description"
          content="Frontend engineer building React & Next.js apps. Projects: CRM Dashboard, FaceBlur AI, GPA tool."
        />
        <meta property="og:url" content="https://olayinka.codes" />
        <meta
          property="og:image"
          content="https://olayinka.codes/og-image.png"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Ayodele Olayinka",
              url: "https://olayinka.codes",
              jobTitle: "Frontend Engineer",
              sameAs: [
                "https://github.com/theactualdev",
                "https://linkedin.com/in/theactualdev",
              ],
              knowsAbout: [
                "React",
                "Next.js",
                "TypeScript",
                "Frontend Development",
              ],
            }),
          }}
        />
      </Head>

      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Portfolio />
      <Footer />
    </div>
  );
}
