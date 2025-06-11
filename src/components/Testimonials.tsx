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
    <section className="py-16 md:py-20 bg-page-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-title-color mb-4">
            לקוחות מספרים...
          </h2>
          <p className="text-lg md:text-xl text-body-text max-w-2xl mx-auto">
            הקשיבו למה שיש למשתתפים הקודמים לספר על החוויה
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-button-color/20 bg-white/80 hover:shadow-lg transition-shadow">
              <CardContent className="p-4 md:p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star 
                      key={star} 
                      className={`h-4 w-4 ${testimonial.rating >= star ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                
                <p className="text-body-text mb-6 leading-relaxed italic text-sm md:text-base">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t border-button-color/20 pt-4">
                  <p className="font-semibold text-title-color text-sm md:text-base">{testimonial.name}</p>
                  <p className="text-xs md:text-sm text-body-text">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8 md:mt-12 px-4">
          <p className="text-base md:text-lg text-button-color font-medium italic">
            "החוויה הכי משמעותית זה לראות איך אנשים מגלים את היכולת היצירתית שלהם 
            ויוצאים עם חיוך ומוצר שהם גאים בו"
          </p>
          <p className="text-body-text mt-2 text-sm md:text-base">- יערה אורן</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;