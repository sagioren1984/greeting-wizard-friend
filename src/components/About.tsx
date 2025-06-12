import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-16 md:py-20 bg-[#f9f9f9]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#d6336c] mb-6">
            מה זה סדנאות יצירה?
          </h2>
          <p className="text-lg md:text-xl text-body-text max-w-4xl mx-auto leading-relaxed">
            בואו לחוות סדנה קבוצתית של שעה וחצי עד שעתיים, בה כל משתתף יוצא עם מוצר עיצובי אישי – 
            ממוצר שכולו יצירתיות, השראה וחיבור רגשי. אני, יערה אורן, אעביר לכם סדנה שבה גם מי שלא חשב 
            על כישרון יצירתי יגלה את הכיף שביצירה, והחוויה העמוקה שלא רק יוצרת מתנה, אלא מייצרת רגע 
            של חיבור בין אנשים.
          </p>
        </div>

        <div className="text-center">
          <p className="text-base md:text-lg text-body-text italic max-w-3xl mx-auto">
            "המטרה שלי היא ליצור חוויה משמעותית שתישאר איתכם הרבה אחרי סיום הסדנה – 
            חוויה שמחברת, משמחת ומעצימה את כל אחד ואחת."
          </p>
          <p className="text-button-color font-medium mt-2 text-sm md:text-base">- יערה אורן</p>
        </div>
      </div>
    </section>
  );
};

export default About;