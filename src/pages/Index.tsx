import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkshopsShowcase from "@/components/WorkshopsShowcase";
import WhyChooseMe from "@/components/WhyChooseMe";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import WaveDivider from "@/components/WaveDivider";

const Index = () => {
  return (
    <div className="min-h-screen bg-page-background">
      <Header />
      <Hero />
      <WaveDivider color="#ffffff" />
      <About />
      <WaveDivider color="hsl(199, 100%, 94%)" flip />
      <WorkshopsShowcase />
      <WaveDivider color="#ffffff" />
      <WhyChooseMe />
      <WaveDivider color="hsl(324, 100%, 96%)" flip />
      <WhatsAppCTA />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
