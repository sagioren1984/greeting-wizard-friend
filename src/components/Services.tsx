import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      title: "סדנת עיצוב ספל תרמי / בקבוק אישי",
      description: "סדנה קבוצתית מהנה שבה כל משתתף יוצר ספל או בקבוק תרמי מותאם אישית",
      features: [
        "מתאים לגילאי 6 ועד 120",
        "משך הסדנה: כשעה וחצי",
        "עד 25 משתתפים בסדנה"
      ]
    },
    {
      title: "עיצוב מוצרים אישיים",
      description: "יצירת מוצרים מותאמים אישית לפי בחירתכם",
      features: [
        "בקבוקים תרמיים מעוצבים",
        "כוסות טמבלר אישיות",
        "מחברות מעוצבות"
      ]
    },
    {
      title: "סדנאות ליצירת מחברות",
      description: "סדנה יצירתית ליצירת מחברות אישיות עם ערך רגשי",
      features: [
        "חיבור לזהות אישית",
        "תהליך יצירתי מעשיר",
        "מתנה משמעותית לעצמכם או לאחרים"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-brand-cream/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            השירותים שלנו
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            מחפשים סדנה שתהיה גם יצירתית, גם מחברת, וגם עם ערך אמיתי?
            הסדנה הזאת בדיוק בשבילכם.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="border-brand-beige hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-foreground text-center">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 text-center">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-muted-foreground flex items-start">
                      <span className="text-brand-pink ml-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-brand-pink font-medium">
            סדנאות כיפיות שמשפחות זמן של יצירה ויחד,
            <br />
            מתאים גם לכאלו שמרגישים פחות יצירתיים :)
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;