import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Главная", path: "/" },
  { label: "Кейсы", path: "/cases" },
  { label: "Подбор пакета", path: "/packages" },
  { label: "О нас", path: "/about" },
  { label: "Контакты", path: "/contacts" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/30 rounded-none">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 lg:px-8">
        <Link to="/" className="font-display text-2xl font-bold tracking-tight text-foreground">
          MRKTO
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                location.pathname === item.path
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/packages"
          className="hidden md:inline-flex items-center px-5 py-2 rounded-full bg-primary text-primary-foreground text-sm font-semibold transition-all hover:opacity-90"
        >
          Получить предложение
        </Link>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-secondary"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Открыть меню"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-card rounded-none border-t border-border/30 overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    location.pathname === item.path
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/packages"
                onClick={() => setMobileOpen(false)}
                className="mt-2 text-center px-5 py-3 rounded-full bg-primary text-primary-foreground text-sm font-semibold"
              >
                Получить предложение
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
