import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            איך זה עובד?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            אני מגיעה אליכם עם מגוון גדול של איורים מושלמים ומטפים שייעלו לכם חיוך שאיתם תוכלו לעצב את המוצר
            שבחרתם לעצבו בבדיקה שבילכם.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="border-brand-beige bg-brand-cream/50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                למי זה מתאים?
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>• אנשים שרוצים שעה וחצי של חווית כיף</li>
                <li>• מטיילאי שש ועד 120</li>
                <li>• מתאים למשפחות / בת מצווה / ועדי עובדים / מפגשי קהילה</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-brand-beige bg-brand-pink-light/50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                מה שמחבר גם מחברת, וגם עם ערך אמיתי?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                זו סדנת יצירה עם חיבור לזהות - זמן לעצור, רגע, לחשוב, 
                לבחור מילה או משפט שנועתים בכם - לבחור מילים לחיות מכם ציור,
                ללהכנס לתהליך היצירה בקבוצה וגם יחד עם זה - עם יצירה שהיא גם יפה וגם אישית.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground">
            זה דרך עדינה, נעימה ומרגשת לעשות זאת זה - עם יצירה שהיא גם יפה וגם אישית.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;