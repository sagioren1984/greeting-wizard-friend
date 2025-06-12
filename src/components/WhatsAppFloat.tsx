import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppFloat = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/972545462773?text=היי יערה, אני מעוניינת לשמוע על הסדנאות שלך", "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={handleWhatsAppClick}
        className="bg-whatsapp-green hover:bg-whatsapp-green/90 text-white p-4 rounded-full shadow-2xl animate-pulse hover:animate-none transition-all duration-300 hover:scale-110"
        size="lg"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="sr-only">פנו אלינו בוואטסאפ</span>
      </Button>
    </div>
  );
};

export default WhatsAppFloat;