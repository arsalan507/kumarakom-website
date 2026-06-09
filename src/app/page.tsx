import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Property } from "@/components/Property";
import { Destination } from "@/components/Destination";
import { Vision } from "@/components/Vision";
import { Investment } from "@/components/Investment";
import { Operators } from "@/components/Operators";
import { Gallery } from "@/components/Gallery";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Property />
        <Destination />
        <Vision />
        <Investment />
        <Operators />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
