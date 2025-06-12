import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const WhatsAppCTA = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/972545462773", "_blank");
  };

  return (
    <section className="py-24 md:py-28 bg-gradient-to-br from-section-pink via-section-beige to-section-blue relative overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#d6336c] mb-10 leading-tight">
            בואי נדבר – נתפור לך סדנה מושלמת
          </h2>
          
          <p className="text-xl md:text-3xl text-body-text mb-12 leading-relaxed font-medium">
            מלאי את הפרטים או כתבי לי ישירות בווטסאפ.
          </p>

          <Button 
            onClick={handleWhatsAppClick}
            className="bg-whatsapp-green hover:bg-whatsapp-green/90 text-white px-12 py-8 text-xl md:text-2xl rounded-3xl shadow-2xl transform transition-all duration-500 hover:scale-110 hover:shadow-3xl flex items-center gap-4 mx-auto group relative overflow-hidden"
            size="lg"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            <MessageCircle className="h-8 w-8 animate-pulse" />
            שלחי הודעה לוואטסאפ
          </Button>

          <div className="mt-8 bg-white/40 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto">
            <p className="text-lg md:text-xl text-body-text font-bold">
              📱 054-5462773 | תגובה מהירה ואישית
            </p>
          </div>
        </div>
      </div>
      
      {/* Image on the side */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 hidden lg:block">
        <img 
          src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
          alt="צור קשר"
          className="rounded-l-3xl shadow-2xl max-w-sm object-cover opacity-30"
        />
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-20 h-20 bg-white/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-16 h-16 bg-[#d6336c]/20 rounded-full animate-pulse delay-1000"></div>
    </section>
  );
};

export default WhatsAppCTA;