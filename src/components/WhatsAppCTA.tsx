import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const WhatsAppCTA = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/972545462773?text=היי יערה, אני מעוניינת לשמוע על הסדנאות שלך", "_blank");
  };

  return (
    <section className="py-20 bg-[#ffe6f0]">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#d6336c] mb-8">
            רוצה לתאם סדנה?
          </h2>
          
          <p className="text-xl md:text-2xl text-body-text mb-10 leading-relaxed">
            בואי נדבר ונתאים את הסדנה המושלמת בדיוק בשבילך ולקבוצה שלך
          </p>

          <Button 
            onClick={handleWhatsAppClick}
            className="bg-[#25D366] hover:bg-[#128C7E] text-white px-10 py-6 text-xl md:text-2xl rounded-full shadow-2xl transform transition-all duration-300 hover:scale-110 animate-pulse hover:animate-none flex items-center gap-4 mx-auto"
            size="lg"
          >
            <MessageCircle className="h-8 w-8" />
            רוצה לתאם סדנה? לחצי כאן לוואטסאפ!
          </Button>

          <p className="text-lg text-body-text mt-6">
            📱 054-5462773 | תגובה מהירה ואישית
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppCTA;