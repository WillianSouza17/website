import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header-fixed">
      <div className="max-w-7xl mx-auto px-4 py-0 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/">
            <img src="img/logo1-.png" alt="Logo da loja" className="w-[45px] h-auto" />
          </Link>
          <div className="ml-1 leading-none">
            <span className="block text-[13px] font-bold tracking-[2px]">Game</span>
            <span className="block text-[11px] font-bold tracking-[3px] text-gc-accent">
              Core
            </span>
          </div>
        </div>

        <nav className="flex">
          <ul className="flex list-none m-0 p-0">
            {[
              { to: "/login", label: "Login" },
              { to: "/carrinho", label: "Carrinho" },
              { to: "/categorias", label: "Categorias" },
              { to: "/contato", label: "Contato" },
            ].map((item) => (
              <li key={item.to} className="px-1 lg:px-2">
                <Link to={item.to} className="nav-link">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}