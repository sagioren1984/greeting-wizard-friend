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
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#d6336c] mb-6">
            הסדנאות שלי
          </h2>
          <p className="text-lg md:text-xl text-body-text max-w-3xl mx-auto">
            מגוון סדנאות יצירה שמותאמות במיוחד לצרכים שלכם
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {workshops.map((workshop, index) => (
            <Card 
              key={index} 
              className="bg-white border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105 rounded-xl"
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  {workshop.icon}
                </div>
                <h3 className="text-xl font-bold text-title-color mb-3">
                  {workshop.title}
                </h3>
                <p className="text-body-text leading-relaxed">
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