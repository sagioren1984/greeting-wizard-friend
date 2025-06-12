const WhoIsItFor = () => {
  return (
    <section className="py-20 md:py-24 bg-section-beige">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 lg:space-y-8">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#d6336c] mb-8">
                למי זה מתאים?
              </h2>
              <div className="space-y-4 text-lg md:text-xl text-body-text leading-relaxed">
                <p className="flex items-start gap-3">
                  <span className="text-[#d6336c] text-xl mt-1">✦</span>
                  מנהלות רווחה בארגונים שמחפשות פעילות גיבוש משמעותית
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-[#d6336c] text-xl mt-1">✦</span>
                  רכזות קהילה או תרבות שמחפשות תוכן מרענן
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-[#d6336c] text-xl mt-1">✦</span>
                  נשים שאוהבות יצירה ורוצות לחגוג עם חברות
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-[#d6336c] text-xl mt-1">✦</span>
                  גננות ובתי ספר שרוצים חוויה שונה לילדים ולהורים
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <img 
                src="https://images.unsplash.com/photo-1618354691326-b61a0f32405e"
                alt="למי זה מתאים?"
                className="rounded-3xl shadow-2xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoIsItFor;