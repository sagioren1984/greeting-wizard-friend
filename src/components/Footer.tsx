const Footer = () => {
  return (
    <footer className="bg-brand-beige border-t border-brand-pink/20 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="mb-4">
            <h3 className="text-2xl font-bold text-brand-pink mb-2">
              יערה אורן
            </h3>
            <p className="text-muted-foreground">
              סדנאות ומתנות מעוצבות • מוצרים שמדברים אותך
            </p>
          </div>
          
          <div className="border-t border-brand-pink/20 pt-4">
            <p className="text-sm text-muted-foreground">
              © 2024 יערה אורן. כל הזכויות שמורות.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;