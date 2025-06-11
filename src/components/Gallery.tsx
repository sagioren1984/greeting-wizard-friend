import { Card, CardContent } from "@/components/ui/card";

const Gallery = () => {
  const galleryItems = [
    {
      image: "/lovable-uploads/fd9747a2-f6c1-48e1-996c-d8e7aa01e6f9.png",
      title: "בקבוקים תרמיים מעוצבים",
      description: "בקבוקים תרמיים עם עיצובים אישיים ומתוקים"
    },
    {
      image: "/lovable-uploads/806ce4e6-e2c2-4e9e-82af-4cf376564a00.png", 
      title: "סדנאות יצירה",
      description: "סדנאות מהנות ליצירת מוצרים אישיים"
    },
    {
      image: "/lovable-uploads/ebf687e7-578c-4b7a-ac52-c76a9e2132ed.png",
      title: "מגוון בקבוקים אישיים",
      description: "בקבוקים תרמיים וכוסות עם עיצובים מותאמים אישית"
    },
    {
      image: "/lovable-uploads/afffddc4-a9d3-431c-9aa4-9b7d096205de.png",
      title: "מחברות מעוצבות",
      description: "מחברות אישיות עם הודעות מעצבות ועיצובים יפים"
    },
    {
      image: "/lovable-uploads/bbdd678c-f9c6-43e4-9b8a-feb6a1c35c7e.png",
      title: "ילדים בסדנה",
      description: "ילדים נהנים ויוצרים בסדנאות המהנות שלנו"
    },
    {
      image: "/lovable-uploads/7a0a378e-cd51-46ab-bd9c-bdfae502c819.png",
      title: "כוסות עם הודעות",
      description: "כוסות אישיות עם מסרים מעצבים וחיוביים"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            גלריית עבודות
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            הציצו על חלק מהיצירות המקסימות שנוצרו בסדנאות שלנו
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {galleryItems.map((item, index) => (
            <Card key={index} className="border-brand-beige overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6 bg-brand-cream/50">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground italic">
            "אם אתם רוצים לחשוב יחד מה יכול להתאים בדיוק לקהילה או לקבוצה שלכם, מוזמנים לפנות אלי, ואשמח לבנות את זה איתכם יחד."
          </p>
          <p className="text-brand-pink font-medium mt-2">- יערה</p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;