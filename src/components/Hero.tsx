import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/972545462773?text=היי יערה, אני מעוניינת לשמוע על הסדנאות שלך", "_blank");
  };

  return (
    <section className="relative bg-gradient-to-br from-section-pink to-section-beige py-24 px-4">
      <div className="container mx-auto text-center max-w-5xl">
        <div className="mb-12">
          <h1 className="text-5xl md:text-7xl font-bold text-title-color mb-8 leading-tight">
            יערה אורן
            <br />
            <span className="text-[#d6336c] text-4xl md:text-6xl">סדנאות ומוצרים שמדברים אותך</span>
          </h1>
          <p className="text-xl md:text-2xl text-body-text max-w-4xl mx-auto leading-relaxed mb-8">
            חוויה יצירתית אישית – סדנאות לעיצוב מוצרים שמדברים אליך, עם ערך רגשי עמוק והנאה קבוצתית.
            <br />
            <span className="text-[#d6336c] font-semibold text-lg md:text-xl">גם מי שלא חשב על כישרון יצירתי יגלה את הכיף שביצירה</span>
          </p>
        </div>

        <div className="text-center bg-white/30 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto">
          <p className="text-xl text-body-text font-bold">
            לפרטים והזמנות – יערה: 054-5462773
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;