import { AnnouncementBar } from "@/components/vtech/AnnouncementBar";
import { Navigation } from "@/components/vtech/Navigation";
import { Hero } from "@/components/vtech/Hero";
import { ValueProps } from "@/components/vtech/ValueProps";
import { AtmosphericBanner } from "@/components/vtech/AtmosphericBanner";
import { About } from "@/components/vtech/About";
import { ProductSelector } from "@/components/vtech/ProductSelector";
import { Delivery} from "@/components/vtech/Delivery";
import { Industries } from "@/components/vtech/Industries";
import { Contact } from "@/components/vtech/Contact";
import { Footer } from "@/components/vtech/Footer";

const Index = () => (
  <main className="min-h-screen bg-background">
    <AnnouncementBar />
    <Navigation />
    <h1 className="sr-only">V Tech Industries — Custom Conveyor Systems Manufacturer Chennai</h1>
    <Hero />
    <ValueProps />
    <AtmosphericBanner />
    <About />
    <ProductSelector />
    <Delivery />
    <Industries />
    <Contact />
    <Footer />
  </main>
);

export default Index;
