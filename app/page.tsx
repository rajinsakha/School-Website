import About from "@/components/About";
import FeatureSection from "@/components/FeatureSection";
import GallerySection from "@/components/GallerySection";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <About />
      <FeatureSection />
      <GallerySection />

    </main>
    </>
    
  );
}
