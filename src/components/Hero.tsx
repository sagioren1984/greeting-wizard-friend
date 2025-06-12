import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/972545462773", "_blank");
  };

  return (
    <section className="relative bg-gradient-to-br from-section-pink to-section-beige py-24 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-right">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-title-color mb-8 leading-tight">
              יערה אורן – סדנאות ומוצרים שמדברים אותך
            </h1>
            <p className="text-xl md:text-2xl text-body-text leading-relaxed mb-8">
              יוצרת חוויות מרגשות, צבעוניות ומותאמות אישית – לקבוצות, לארגונים ולנשים שאוהבות משמעות.
              <br />
              <span className="text-[#d6336c] font-semibold">כל סדנה היא הזדמנות לביטוי עצמי, חיבור, הנאה ומתנה מקורית.</span>
            </p>
            <Button 
              onClick={handleWhatsAppClick}
              className="bg-button-color hover:bg-button-color/90 text-white px-8 py-6 text-xl rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 flex items-center gap-3 mx-auto lg:mx-0"
              size="lg"
            >
              <MessageCircle className="h-6 w-6" />
              דברו איתי בווטסאפ
            </Button>
          </div>
          <div className="flex justify-center lg:justify-start">
            <img 
              src="https://images.unsplash.com/photo-1612198246844-c87c67b1fbbf"
              alt="יערה אורן - סדנאות יצירה"
              className="rounded-3xl shadow-2xl max-w-md w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;