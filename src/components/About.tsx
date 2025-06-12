const About = () => {
  return (
    <section className="py-20 md:py-24 bg-section-beige">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1598257006258-68b9f953f70c"
                alt="חוויה יצירתית עם נגיעה אישית"
                className="rounded-3xl shadow-2xl w-full object-cover"
              />
            </div>
            <div className="space-y-6 lg:space-y-8 order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#d6336c] mb-8">
                חוויה יצירתית עם נגיעה אישית
              </h2>
              <p className="text-lg md:text-xl text-body-text leading-relaxed">
                סדנאות יצירה בקונספט ייחודי שמשלבות התבוננות, עשייה ומשמעות.
              </p>
              <p className="text-lg md:text-xl text-body-text leading-relaxed">
                אני מביאה איתי רגישות, הקשבה וניסיון בעבודה עם קבוצות מגוונות – מבני נוער ועד צוותים בכירים.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;