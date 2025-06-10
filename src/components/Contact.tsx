import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone } from "lucide-react";

const Contact = () => {
  const handlePhoneCall = () => {
    window.location.href = "tel:054-5462773";
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-brand-pink-light to-brand-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            בואו ניצור יחד
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            מעוניינים בסדנה או במוצר מותאם אישית? צרו איתי קשר ונתכנן יחד את החוויה המושלמת
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="border-brand-beige bg-background/80 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                לפרטים והזמנות: יערה
              </h3>
              
              <div className="mb-8">
                <Button 
                  size="lg" 
                  onClick={handlePhoneCall}
                  className="bg-brand-pink hover:bg-brand-pink/90 text-white px-8 py-6 text-xl flex items-center gap-3 mx-auto"
                >
                  <Phone className="h-6 w-6" />
                  054-5462773
                </Button>
              </div>

              <div className="text-muted-foreground space-y-2">
                <p>זמינה לשיחות בין השעות 09:00-21:00</p>
                <p>מגיעה לסדנאות בכל רחבי הארץ</p>
                <p className="text-brand-pink font-medium">
                  "בואו ניצור יחד משהו מיוחד שיישאר איתכם לתמיד"
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