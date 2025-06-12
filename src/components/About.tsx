import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 md:py-24 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#d6336c] mb-8">
            מה זה סדנאות יצירה?
          </h2>
          <p className="text-xl md:text-2xl text-body-text max-w-5xl mx-auto leading-relaxed">
            בואו לחוות סדנה קבוצתית של שעה וחצי עד שעתיים, בה כל משתתף יוצא עם מוצר עיצובי אישי – 
            ממוצר שכולו יצירתיות, השראה וחיבור רגשי. אני, יערה אורן, אעביר לכם סדנה שבה גם מי שלא חשב 
            על כישרון יצירתי יגלה את הכיף שביצירה, והחוויה העמוקה שלא רק יוצרת מתנה, אלא מייצרת רגע 
            של חיבור בין אנשים.
          </p>
        </div>

        <div className="text-center bg-gradient-to-r from-section-pink to-section-beige p-8 rounded-3xl max-w-4xl mx-auto">
          <p className="text-lg md:text-xl text-body-text italic leading-relaxed">
            "המטרה שלי היא ליצור חוויה משמעותית שתישאר איתכם הרבה אחרי סיום הסדנה – 
            חוויה שמחברת, משמחת ומעצימה את כל אחד ואחת."
          </p>
          <p className="text-[#d6336c] font-bold mt-4 text-lg md:text-xl">- יערה אורן</p>
        </div>
      </div>
    </section>
  );
};

export default About;