import { Share2, Globe, Mail, Phone } from "lucide-react";

export default function Footer() {
  const columns = [
    {
      title: "Conta",
      items: ["Meus pedidos", "Cadastrar"],
    },
    {
      title: "Departamentos",
      items: [
        "Periféricos",
        "Computadores",
        "Notebooks",
        "Hardware",
        "Consoles",
        "Monitores",
      ],
    },
    {
      title: "Redes Sociais",
      items: [
        { label: "Instagram", icon: Share2 },
        { label: "Facebook", icon: Globe },
      ],
    },
    {
      title: "SAC",
      items: [{ label: "(11) 99999-9999", icon: Phone }],
      hiddenMobile: true,
    },
    {
      title: "Fale Conosco",
      items: [{ label: "contato@gamecore.com.br", icon: Mail }],
      hiddenMobile: true,
    },
  ];

  return (
    <footer className="w-full bg-gc-primary border-t border-white/10 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-5 gap-8">
        {columns.map((col) => (
          <div
            key={col.title}
            className={`flex flex-col ${
              col.hiddenMobile ? "hidden md:flex" : ""
            }`}
          >
            <h4 className="text-white font-bold text-base mb-3 tracking-wide">
              {col.title}
            </h4>
            <ul className="space-y-2 text-sm">
              {col.items.map((item, idx) => {
                if (typeof item === "string") {
                  return (
                    <li key={idx}>
                      <a
                        href="#"
                        className="hover:text-gc-accent transition-colors"
                      >
                        {item}
                      </a>
                    </li>
                  );
                }
                const Icon = item.icon;
                return (
                  <li key={idx}>
                    <a
                      href="#"
                      className="flex items-center gap-2 hover:text-gc-accent transition-colors"
                    >
                      <Icon className="w-4 h-4 text-gc-accent" />
                      <span>{item.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-8 pt-6 border-t border-white/10 text-center text-xs text-gray-500">
        <p>&copy; 2026 GameCore. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}