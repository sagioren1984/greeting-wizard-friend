import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "לקוחה מרוצה",
      role: "משתתפת בסדנה",
      text: "הסדנא הייתה חוויה משדרגת – יצירתיות, הנאה וחיבור אמיתי!",
      rating: 5
    },
    {
      name: "משתתף בסדנא",
      role: "צוות עובדים",
      text: "רקמה, הדפסה וחיוכים – פשוט קסם!",
      rating: 5
    },
    {
      name: "מנהלת רווחה",
      role: "ארגון גדול",
      text: "יערה הביאה לנו בדיוק מה שחיפשנו - פעילות שמחברת ומשאירה חיוך על הפנים של כולם."
    }
  ];

  return (
    <section className="py-20 bg-brand-cream/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            לקוחות מספרים...
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            הקשיבו למה שיש למשתתפים הקודמים לספר על החוויה
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-brand-beige bg-background/80 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star 
                      key={star} 
                      className={`h-4 w-4 ${testimonial.rating >= star ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t border-brand-beige pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-brand-pink font-medium italic">
            "החוויה הכי משמעותית זה לראות איך אנשים מגלים את היכולת היצירתית שלהם 
            ויוצאים עם חיוך ומוצר שהם גאים בו"
          </p>
          <p className="text-muted-foreground mt-2">- יערה אורן</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;