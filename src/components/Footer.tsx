import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-secondary border-t border-border">
    <div className="container mx-auto px-4 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <h3 className="font-display text-2xl font-bold mb-3">MRKTO</h3>
          <p className="text-muted-foreground max-w-md">
            Премиальное агентство SMM и перформанс‑маркетинга, которое дает измеримый рост бизнесам в разных нишах.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Страницы</h4>
          <div className="flex flex-col gap-2">
            <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Главная</Link>
            <Link to="/cases" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Кейсы</Link>
            <Link to="/packages" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Подбор пакета</Link>
            <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors text-sm">О нас</Link>
            <Link to="/contacts" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Контакты</Link>
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Мы в сети</h4>
          <div className="flex flex-col gap-2">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Instagram</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">LinkedIn</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Telegram</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">WhatsApp</a>
          </div>
        </div>
      </div>
      <div className="border-t border-border mt-12 pt-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} MRKTO Agency. Все права защищены.
      </div>
    </div>
  </footer>
);

export default Footer;
