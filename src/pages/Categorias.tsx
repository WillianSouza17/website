const categorias = [
  {
    src: "img/consoles.png",
    title: "Consoles",
    desc: "PlayStation, Xbox e Nintendo Switch com os melhores jogos do mercado.",
  },
  {
    src: "img/Notebooks.png",
    title: "Notebooks Gamer",
    desc: "Mobilidade e potência máxima com placas de vídeo dedicadas.",
  },
  {
    src: "img/Perifericos.png",
    title: "Periféricos",
    desc: "Teclados mecânicos, mouses de alta precisão e headsets imersivos.",
  },
  {
    src: "img/Hardware.png",
    title: "Hardware",
    desc: "Placas de vídeo, processadores, memórias RAM e placas-mãe.",
  },
  {
    src: "img/cadeira.png",
    title: "Cadeiras Gamer",
    desc: "Ergonomia superior, apoio lombar e regulagem de altura para longas jogatinas.",
  },
];

function slugify(text: string) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function Categorias() {
  return (
    <main className="max-w-6xl mx-auto px-4 my-5">
      <div className="text-center mb-5">
        <h1 className="text-5xl font-bold text-white">Nossas Categorias</h1>
        <p className="text-lg text-gc-muted">
          Explore nosso catálogo completo de games, hardware e periféricos de
          alta performance.
        </p>
        <hr className="w-1/4 mx-auto border-gc-accent" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {categorias.map((c) => (
          <div
            key={c.title}
            className="gc-card gc-card-hover h-full bg-gc-card text-white flex flex-col"
          >
            <img src={c.src} className="p-3 max-h-[180px] object-contain" alt={c.title} />
            <div className="p-4 flex flex-col flex-1 justify-between text-center">
              <h5 className="text-xl text-gc-accent mb-2">{c.title}</h5>
              <p className="text-base flex-1">{c.desc}</p>
              <a
                href={`#${slugify(c.title)}`}
                className="btn btn-outline-light mt-3"
              >
                Explorar {c.title}
              </a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}