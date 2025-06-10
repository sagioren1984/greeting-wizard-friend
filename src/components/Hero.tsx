import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-brand-cream via-brand-pink-light to-brand-beige py-20 px-4">
      <div className="container mx-auto text-center max-w-4xl">
        <div className="mb-6">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4 leading-tight">
            סדנאות ומוצרים
            <br />
            <span className="text-brand-pink">שמדברים אותך</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            צרו עמי מוצרים מותאמים אישית - בקבוקים תרמיים, כוסות, מחברות וסדנאות יצירה
            שיביאו את האישיות שלכם לכל רגע ביום
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            size="lg" 
            className="bg-brand-pink hover:bg-brand-pink/90 text-white px-8 py-6 text-lg"
          >
            הזמינו סדנה עכשיו
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-brand-pink text-brand-pink hover:bg-brand-pink hover:text-white px-8 py-6 text-lg"
          >
            צפו בגלריה
          </Button>
        </div>

        <div className="flex items-center justify-center gap-2 text-brand-pink">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="h-5 w-5 fill-current" />
            ))}
          </div>
          <span className="text-muted-foreground">מלקוחות מרוצות ברחבי הארץ</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;