import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyChooseMe from "@/components/WhyChooseMe";
import WhoIsItFor from "@/components/WhoIsItFor";
import Testimonials from "@/components/Testimonials";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import WaveDivider from "@/components/WaveDivider";

const Index = () => {
  return (
    <div className="min-h-screen bg-page-background">
      <Header />
      <Hero />
      <WaveDivider color="hsl(35, 100%, 96%)" />
      <About />
      <WaveDivider color="#ffffff" flip />
      <WhyChooseMe />
      <WaveDivider color="hsl(35, 100%, 96%)" />
      <WhoIsItFor />
      <WaveDivider color="#ffffff" flip />
      <Testimonials />
      <WaveDivider color="hsl(324, 100%, 96%)" />
      <WhatsAppCTA />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
