import { Card, CardContent } from "@/components/ui/card";
import { Palette, Users, Heart, Star, Sparkles, Coffee } from "lucide-react";

const WorkshopsShowcase = () => {
  const workshops = [
    {
      icon: <Palette className="h-8 w-8 text-[#d6336c]" />,
      title: "סדנאות רקמה והדפסה",
      description: "יצירת מוצרים אישיים עם טכניקות רקמה מודרניות והדפסה יצירתית על בדים וחומרים שונים."
    },
    {
      icon: <Coffee className="h-8 w-8 text-[#d6336c]" />,
      title: "עיצוב כוסות ובקבוקים",
      description: "סדנאות ליצירת כוסות ובקבוקים מעוצבים עם מסרים אישיים וציורים יפים."
    },
    {
      icon: <Heart className="h-8 w-8 text-[#d6336c]" />,
      title: "מוצרים עם מסר אישי",
      description: "יצירת מתנות ומוצרים עם מסרים מעצבים שמדברים ישירות ללב."
    },
    {
      icon: <Users className="h-8 w-8 text-[#d6336c]" />,
      title: "סדנאות קבוצתיות",
      description: "חוויה קבוצתית מגבשת לצוותי עבודה, קהילות ואירועים משפחתיים."
    },
    {
      icon: <Star className="h-8 w-8 text-[#d6336c]" />,
      title: "סדנאות לאירועים מיוחדים",
      description: "סדנאות מותאמות לבת מצווה, ימי הולדת ואירועי יום העצמאות."
    },
    {
      icon: <Sparkles className="h-8 w-8 text-[#d6336c]" />,
      title: "יצירה חווייתית",
      description: "סדנאות שמשלבות טכניקות יצירה מגוונות עם חוויה רגשית ומשמעותית."
    }
  ];

  return (
    <section className="py-20 md:py-24 bg-gradient-to-br from-section-blue to-section-beige">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#d6336c] mb-8">
            הסדנאות שלי
          </h2>
          <p className="text-xl md:text-2xl text-body-text max-w-4xl mx-auto font-medium">
            מגוון סדנאות יצירה שמותאמות במיוחד לצרכים שלכם
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 max-w-7xl mx-auto">
          {workshops.map((workshop, index) => (
            <Card 
              key={index} 
              className="bg-white/90 backdrop-blur-sm border-0 hover:shadow-2xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 rounded-2xl overflow-hidden group"
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center transform group-hover:scale-125 transition-transform duration-300">
                  {workshop.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-title-color mb-4">
                  {workshop.title}
                </h3>
                <p className="text-body-text leading-relaxed text-base md:text-lg">
                  {workshop.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkshopsShowcase;