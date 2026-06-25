import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Property } from "@/components/Property";
import { Destination } from "@/components/Destination";
import { Vision } from "@/components/Vision";
import { PartnerSection } from "@/components/PartnerSection";
import { Owners } from "@/components/Owners";
import { Gallery } from "@/components/Gallery";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { AmbientAudio } from "@/components/AmbientAudio";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Property />
        <Vision />
        <Gallery />
        <Destination />
        <PartnerSection />
        <Owners />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
      <AmbientAudio />
    </>
  );
}
