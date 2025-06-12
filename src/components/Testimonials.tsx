import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "שירלי, מנהלת משאבי אנוש",
      role: "",
      text: "הסדנה הייתה מרגשת, מקצועית ועם תוצרים מושלמים! הצוות לא מפסיק לדבר עליה.",
      rating: 5
    },
    {
      name: "הילה, משתתפת בסדנת יום הולדת",
      role: "",
      text: "יערה ראתה כל אחת מאיתנו, ויצרנו משהו שניקח איתנו שנים קדימה.",
      rating: 5
    },
    {
      name: "רחלי, רכזת קהילה",
      role: "",
      text: "פעילות שמרימה, מחברת ונותנת השראה. ממליצה בחום!",
      rating: 5
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-[#f9f9f9]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#d6336c] mb-4">
            לקוחות מספרות
          </h2>
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