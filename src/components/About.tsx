import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            מה זה סדנאות יצירה?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            בואו לחוות סדנה קבוצתית של שעה וחצי עד שעתיים, בה כל משתתף יוצא עם מוצר עיצובי אישי – ממוצר שכולו יצירתיות, השראה וחיבור רגשי. 
            אני, יערה אורן, אעביר לכם סדנה שבה גם מי שלא חשב על כישרון יצירתי יגלה את הכיף שביצירה, והחוויה העמוקה שלא רק יוצרת מתנה, אלא מייצרת רגע של חיבור בין אנשים.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          <Card className="border-brand-beige bg-brand-cream/50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                💝 למה לבחור בסדנאות שלי?
              </h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-brand-pink mt-1">🤝</span>
                  <span><strong>חוויה חברתית</strong> – פעילות קבוצתית שמחברת ומגבשת קהילות, צוותים, וקבוצות משפחתיות</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-pink mt-1">🎨</span>
                  <span><strong>יצירה נגישה</strong> – לא צריך להיות אומן; אני מספקת את כל ההשראה והכלים כדי שכל אחד יצליח</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-pink mt-1">✨</span>
                  <span><strong>סיפוק מיידי</strong> – יוצאים עם מוצר מעוצב אישית שאתם יכולים להתגאות בו מיד עם סיום הסדנה</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-pink mt-1">💖</span>
                  <span><strong>חוויה אישית</strong> – כל סדנא מותאמת לקהל, מתבצעת במקום נוח ונגישה, עם דגש על איכות ושמחה</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-brand-beige bg-brand-pink-light/50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                🎯 למי הסדנאות מתאימות?
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                הסדנאות מתאימות לנשים בגילאי 30+, מנהלי רווחה, קבוצות קהילתיות, צוותי עבודה, אירועים חברתיים, בת מצוות ועוד.
              </p>
              <p className="text-brand-pink font-medium text-lg">
                אם אתם מחפשים פעילות יצירתית עם ערך מוסף – זו הסדנא בשבילכם.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;