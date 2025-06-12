import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkshopsShowcase from "@/components/WorkshopsShowcase";
import WhyChooseMe from "@/components/WhyChooseMe";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen bg-page-background">
      <Header />
      <Hero />
      <About />
      <WorkshopsShowcase />
      <WhyChooseMe />
      <Gallery />
      <Testimonials />
      <WhatsAppCTA />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
