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
      items: ["Instagram", "Facebook"],
    },
    {
      title: "SAC",
      items: ["(XX) XXXXX-XXXX"],
      hiddenMobile: true,
    },
    {
      title: "Fale Conosco",
      items: ["seuemail@mail.com.br"],
      hiddenMobile: true,
    },
  ];

  return (
    <footer className="w-full py-4 bg-gc-primary text-center">
      <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center items-start gap-4">
        {columns.map((col) => (
          <div
            key={col.title}
            className={`w-1/2 md:w-auto flex-1 min-w-[140px] flex flex-col items-center mb-3 ${
              col.hiddenMobile ? "hidden lg:flex" : ""
            }`}
          >
            <p className="text-base font-bold mb-2">{col.title}</p>
            {col.items.map((item) => (
              <p key={item} className="mb-1 text-sm">
                {item}
              </p>
            ))}
          </div>
        ))}
      </div>
      <div className="text-center mt-3 pt-3 border-t border-gc-border">
        <p className="mb-0 text-sm">&copy; 2026 GameCore. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}