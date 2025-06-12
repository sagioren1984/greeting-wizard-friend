import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/972545462773?text=היי יערה, אני מעוניינת לשמוע על הסדנאות שלך", "_blank");
  };

  return (
    <section className="relative bg-white py-20 px-4">
      <div className="container mx-auto text-center max-w-4xl">
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-title-color mb-6 leading-tight">
            יערה אורן
            <br />
            <span className="text-button-color">סדנאות ומוצרים שמדברים אותך</span>
          </h1>
          <p className="text-xl text-body-text max-w-3xl mx-auto leading-relaxed mb-6">
            חוויה יצירתית אישית – סדנאות לעיצוב מוצרים שמדברים אליך, עם ערך רגשי עמוק והנאה קבוצתית.
            <br />
            <span className="text-button-color font-medium">גם מי שלא חשב על כישרון יצירתי יגלה את הכיף שביצירה</span>
          </p>
        </div>

        <div className="text-center">
          <p className="text-lg text-body-text font-medium">
            לפרטים והזמנות – יערה: 054-5462773
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;