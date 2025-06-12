import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Heart, Gift } from "lucide-react";

const WhyChooseMe = () => {
  const features = [
    {
      icon: <Sparkles className="h-12 w-12 text-[#d6336c]" />,
      title: "התאמה אישית",
      description: "כל סדנה נבנית יחד איתכם – לפי קהל, גיל, נושא ואירוע."
    },
    {
      icon: <Heart className="h-12 w-12 text-[#d6336c]" />,
      title: "חוויה עם ערך",
      description: "לא רק יצירה – אלא גם חיבור, רגש ותחושת מסוגלות."
    },
    {
      icon: <Gift className="h-12 w-12 text-[#d6336c]" />,
      title: "תוצרים מרהיבים",
      description: "כל משתתפת יוצאת עם מתנה בעיצוב אישי, שימושית וייחודית."
    }
  ];

  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#d6336c] mb-8">
            למה לבחור בסדנאות שלי?
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-10 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-white border border-button-color/20 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 rounded-2xl overflow-hidden group"
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center transform group-hover:scale-125 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-title-color mb-4">
                  {feature.title}
                </h3>
                <p className="text-body-text leading-relaxed text-base md:text-lg">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMe;