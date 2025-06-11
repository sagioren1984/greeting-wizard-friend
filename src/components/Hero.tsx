import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/972545462773?text=היי יערה, אני מעוניינת לשמוע על הסדנאות שלך", "_blank");
  };

  return (
    <section className="relative bg-gradient-to-br from-brand-cream via-brand-pink-light to-brand-beige py-20 px-4">
      <div className="container mx-auto text-center max-w-4xl">
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            סדנאות שמחברות
            <br />
            <span className="text-brand-pink">ומעצבות רגעים</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-6">
            חוויה יצירתית אישית – סדנאות לעיצוב מוצרים שמדברים אליך, עם ערך רגשי עמוק והנאה קבוצתית.
            <br />
            <span className="text-brand-pink font-medium">גם מי שלא חשב על כישרון יצירתי יגלה את הכיף שביצירה</span>
          </p>
          <p className="text-lg text-foreground font-medium">
            יערה אורן - סדנאות ומוצרים שמדברים אותך
          </p>
        </div>

        <div className="mb-8">
          <Button 
            size="lg" 
            onClick={handleWhatsAppClick}
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-6 text-xl flex items-center gap-3 mx-auto shadow-lg"
          >
            <MessageCircle className="h-6 w-6" />
            דברי איתי עכשיו בוואטסאפ
          </Button>
        </div>

        <div className="text-center">
          <p className="text-lg text-brand-pink font-medium">
            לפרטים והזמנות – יערה: 054-5462773
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;