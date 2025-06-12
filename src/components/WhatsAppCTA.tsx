import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const WhatsAppCTA = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/972545462773?text=היי יערה, אני מעוניינת לשמוע על הסדנאות שלך", "_blank");
  };

  return (
    <section className="py-24 md:py-28 bg-gradient-to-br from-section-pink via-section-beige to-section-blue relative overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#d6336c] mb-10 leading-tight">
            רוצה לתאם סדנה?
          </h2>
          
          <p className="text-xl md:text-3xl text-body-text mb-12 leading-relaxed font-medium">
            בואי נדבר ונתאים את הסדנה המושלמת בדיוק בשבילך ולקבוצה שלך
          </p>

          <Button 
            onClick={handleWhatsAppClick}
            className="bg-whatsapp-green hover:bg-whatsapp-green/90 text-white px-12 py-8 text-xl md:text-2xl rounded-3xl shadow-2xl transform transition-all duration-500 hover:scale-110 hover:shadow-3xl flex items-center gap-4 mx-auto group relative overflow-hidden"
            size="lg"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            <MessageCircle className="h-8 w-8 animate-pulse" />
            רוצה לתאם סדנה? לחצי כאן לוואטסאפ!
          </Button>

          <div className="mt-8 bg-white/40 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto">
            <p className="text-lg md:text-xl text-body-text font-bold">
              📱 054-5462773 | תגובה מהירה ואישית
            </p>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-20 h-20 bg-white/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-16 h-16 bg-[#d6336c]/20 rounded-full animate-pulse delay-1000"></div>
    </section>
  );
};

export default WhatsAppCTA;