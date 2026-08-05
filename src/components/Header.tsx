import { Link, useLocation } from "react-router-dom";
import { User, ShoppingCart, Grid, Mail, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const location = useLocation();

  const navItems = [
    { to: "/", label: "Home", icon: Home },
    { to: "/login", label: "Login", icon: User },
    { to: "/carrinho", label: "Carrinho", icon: ShoppingCart },
    { to: "/categorias", label: "Categorias", icon: Grid },
    { to: "/contato", label: "Contato", icon: Mail },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-gc-primary/95 shadow-lg backdrop-blur-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <img
            src="img/logo1-.png"
            alt="GameCore"
            className="w-10 h-auto group-hover:scale-105 transition-transform"
          />
          <div className="leading-none">
            <span className="block text-sm font-bold tracking-widest text-white">
              GAME
            </span>
            <span className="block text-xs font-bold tracking-widest text-gc-accent">
              CORE
            </span>
          </div>
        </Link>

        <nav className="flex items-center gap-1 sm:gap-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.to;
            return (
              <Button
                key={item.to}
                asChild
                variant={isActive ? "neon" : "ghost"}
                size="sm"
                className="gap-2"
              >
                <Link to={item.to}>
                  <Icon className="w-4 h-4" />
                  <span className="hidden md:inline">{item.label}</span>
                </Link>
              </Button>
            );
          })}
        </nav>
      </div>
    </header>
  );
}