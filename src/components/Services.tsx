import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      title: "סדנאות יצירה לעיצוב מוצרים",
      description: "סדנה קבוצתית של שעה וחצי עד שעתיים בה כל משתתף יוצא עם מוצר עיצובי אישי",
      features: [
        "בקבוק תרמי • ספל תרמי • ספלי קרמיקה",
        "תיק בד • מחברת • שלט לבית • בקבוק גן",
        "מינימום 40 משתתפים"
      ]
    },
    {
      title: "חנות פופ-אפ למוצרים",
      description: "מוצרים מעוצבים שנולדים מההשראה - מארזי תודה, מתנות לחג ועיצובים אישיים",
      features: [
        "מארזי קיץ: תיק בד + מגבת + בקבוק",
        "מארזי שבת: ראנר + כיסוי חלות + נרות",
        "מוצרים אישיים עם אפשרות התאמת כיתוב"
      ]
    },
    {
      title: "סדנאות DIY (בהמשך)",
      description: "סדנאות נוספות להכנת מוצרי בטון וטכניקות יצירה מגוונות",
      features: [
        "סדנאות בטון פולימרי",
        "טכניקות רקמה והדפסה",
        "מגוון כלי אומנות וביטוי אישי"
      ]
    }
  ];

  return (
    <section id="services" className="py-16 md:py-20 bg-white/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-title-color mb-4">
            מה אני מציעה?
          </h2>
          <p className="text-lg md:text-xl text-body-text max-w-2xl mx-auto">
            חוויה יצירתית שמשלבת השראה, יצירה אישית וחיבור בין אנשים - 
            בה כל אחד יוצא עם מוצר שהוא יצר בעצמו ויכול להתגאות בו
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="border-button-color/20 hover:shadow-lg transition-shadow bg-white">
              <CardHeader>
                <CardTitle className="text-lg md:text-xl font-semibold text-title-color text-center">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-body-text mb-6 text-center text-sm md:text-base">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-xs md:text-sm text-body-text flex items-start">
                      <span className="text-button-color ml-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8 md:mt-12">
          <p className="text-base md:text-lg text-button-color font-medium italic px-4">
            "זה לא מרגיש כמו עוד פעילות, אלא כמו רגע. רגע לעצור, ליהנות, ולשחרר את כל מה שמעמיס."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;