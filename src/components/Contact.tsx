import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Phone } from "lucide-react";

const Contact = () => {
  const handlePhoneCall = () => {
    window.location.href = "tel:054-5462773";
  };

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/972545462773?text=היי יערה, אני מעוניינת לשמוע על הסדנאות שלך", "_blank");
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-brand-pink-light to-brand-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            מוכנים לסגור סדנה?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            בואו נתכנן יחד את הסדנה המושלמת עבור הקבוצה שלכם
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="border-brand-beige bg-background/80 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                יערה אורן - מנחת סדנאות ומעצבת
              </h3>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button 
                  size="lg" 
                  onClick={handleWhatsAppClick}
                  className="bg-green-500 hover:bg-green-600 text-white px-8 py-6 text-lg flex items-center gap-3"
                >
                  <MessageCircle className="h-5 w-5" />
                  שלחי הודעה בוואטסאפ
                </Button>
                
                <Button 
                  size="lg" 
                  onClick={handlePhoneCall}
                  className="bg-brand-pink hover:bg-brand-pink/90 text-white px-8 py-6 text-lg flex items-center gap-3"
                >
                  <Phone className="h-5 w-5" />
                  התקשרי עכשיו
                </Button>
              </div>

              <div className="text-muted-foreground space-y-3">
                <p className="text-lg font-medium text-foreground">054-5462773</p>
                <p>זמינה לשיחות בין השעות 09:00-21:00</p>
                <p>מגיעה לסדנאות בכל רחבי הארץ</p>
                <p className="text-brand-pink font-medium text-lg mt-4">
                  "בואו ניצור יחד משהו מיוחד שיישאר איתכם לתמיד" ✨
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;