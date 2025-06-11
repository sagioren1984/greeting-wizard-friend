import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            איך הסדנה מתנהלת?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            אני מגיעה אליכם עם מגוון עיצובים מושלמים ומדבקות שיעלו לכם חיוך. 
            המשתתפים בוחרים את העיצוב שמדבר אליהם ויוצרים בעצמם מוצר אישי ומיוחד.
            כולם יוצאים עם מתנה אישית שתישאר איתם לתמיד!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="border-brand-beige bg-brand-cream/50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                🎯 למי זה מתאים?
              </h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-center gap-3">
                  <span className="text-brand-pink">👨‍👩‍👧‍👦</span>
                  <span>משפחות שרוצות לבלות יחד</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-brand-pink">🏢</span>
                  <span>צוותי עובדים וחברות</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-brand-pink">🎉</span>
                  <span>אירועי בת/בר מצווה</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-brand-pink">🤲</span>
                  <span>קהילות ומפגשים חברתיים</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-brand-pink">✨</span>
                  <span>אנשים שמרגישים פחות יצירתיים</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-brand-beige bg-brand-pink-light/50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                💝 מה מיוחד בסדנה?
              </h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-brand-pink mt-1">⏰</span>
                  <span>זמן איכות של שעה וחצי מהנה</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-pink mt-1">🎨</span>
                  <span>חוויה יצירתית נגישה לכולם</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-pink mt-1">🎁</span>
                  <span>כל משתתף יוצא עם מוצר אישי</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-pink mt-1">👥</span>
                  <span>מתאים לקבוצות עד 120 משתתפים</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-pink mt-1">😊</span>
                  <span>אווירה חמה ותומכת</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;