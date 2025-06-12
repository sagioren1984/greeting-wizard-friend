import { Button } from "@/components/ui/button";
import { MessageCircle, Calendar } from "lucide-react";

const FinalCTA = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/972545462773?text=היי יערה, אני מעוניינת לשמוע על הסדנאות שלך", "_blank");
  };

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-brand-cream via-brand-pink-light to-brand-beige">
      <div className="container mx-auto px-4 text-center max-w-4xl">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-title-color mb-6">
          הסדנה מחכה לך
        </h2>
        
        <div className="text-lg md:text-xl text-body-text mb-8 leading-relaxed">
          <p className="mb-4">🎨 ראית. התחברת. דמיינת כבר איך זה ייראה.</p>
          
          <p className="mb-6">
            אז נשאר רק דבר אחד:<br />
            לשלוח ליערה הודעה קצרה –<br />
            ולסגור תאריך שמתאים לך <Calendar className="inline h-5 w-5" />
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 md:p-8 mb-8 border border-button-color/20 shadow-lg">
          <p className="text-lg font-medium text-title-color mb-4">
            💬 <strong>יערה אורן - סדנאות ומוצרים שמדברים אותך</strong>
          </p>
          
          <Button 
            size="lg" 
            onClick={handleWhatsAppClick}
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-6 text-lg md:text-xl flex items-center gap-3 mx-auto shadow-lg"
          >
            <MessageCircle className="h-6 w-6" />
            דברו איתי בוואטסאפ עכשיו
          </Button>
        </div>

        <p className="text-lg text-button-color font-medium">
          ⚡ תוך כמה דקות נדבר – ונתאים את הסדנה המושלמת בדיוק בשבילך.
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;