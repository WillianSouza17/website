import { FormEvent, useState } from "react";
import Slider from "../components/Slider";

const categorias = [
  { src: "img/consoles.png", nome: "Consoles" },
  { src: "img/Notebooks.png", nome: "Notebooks" },
  { src: "img/Perifericos.png", nome: "Perifericos" },
  { src: "img/Hardware.png", nome: "Hardware" },
];

export default function Home() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (nome.length < 3) {
      alert("Por favor, digite seu nome completo.");
      return;
    }
    if (!email.includes("@") || !email.includes(".")) {
      alert("Por favor, informe um e-mail válido!");
      return;
    }
    alert("E-mail cadastrado com sucesso!");
  };

  return (
    <>
      <div className="mb-4">
        <img
          className="w-full block"
          src="img/banner1.png"
          alt="Banner principal"
        />
      </div>

      <Slider />

      <div className="text-center pt-5">
        <p className="text-4xl font-bold">Categorias</p>
        <hr className="w-1/4 mx-auto" />
      </div>

      <section className="max-w-7xl mx-auto px-4 py-5">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {categorias.map((c) => (
            <div key={c.nome} className="flex flex-col items-center">
              <img
                className="w-full h-[260px] object-contain"
                src={c.src}
                alt={c.nome}
              />
              <div className="pt-7 pb-4">
                <p className="border border-gc-accent rounded-xl cursor-pointer text-lg p-3 hover:bg-gc-neon/10 transition-colors">
                  {c.nome}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="bg-gc-primary px-5 py-10 flex items-center justify-center">
          <div className="max-w-7xl mx-auto flex items-center w-full">
            <div className="hidden lg:flex flex-1 justify-center">
              <img className="w-64" src="img/logo1-.png" alt="GameCore" />
            </div>
            <div className="flex-1 text-center lg:text-left">
              <p className="text-4xl font-bold">Quem somos</p>
              <p className="text-lg text-justify">
                Somos uma empresa de vendas completamente dedicadas e inserida
                no mundo dos games e da tecnologia, venha nos conhecer melhor!
              </p>
              <a href="#" className="text-gc-accent hover:text-white">
                Saiba mais &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center pt-5">
        <p className="text-4xl font-bold">Mais Comprados</p>
        <hr className="w-1/4 mx-auto" />
      </div>

      <section className="max-w-7xl mx-auto px-4 py-5">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex flex-col items-center">
              <img className="w-full h-[260px] object-contain" src="img/Produto.png" alt="NomeProduto" />
              <div className="pt-7 pb-4">
                <p className="border border-gc-accent rounded-xl cursor-pointer text-lg p-3 hover:bg-gc-neon/10 transition-colors">
                  NomeProduto
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <form
        onSubmit={handleSubmit}
        className="bg-gc-primary-dark py-5"
      >
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center gap-3">
          <div className="flex-1 min-w-[280px]">
            <p className="text-lg text-center lg:text-left">
              Informe seu email para receber ofertas exclusivas
            </p>
          </div>
          <div className="flex-[2] min-w-[300px] grid grid-cols-1 md:grid-cols-5 gap-2">
            <input
              type="text"
              className="form-control md:col-span-2"
              placeholder="Insira seu nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
            <input
              type="email"
              className="form-control md:col-span-2"
              placeholder="Insira seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" className="btn btn-outline-light w-full">
              Enviar
            </button>
          </div>
        </div>
      </form>
    </>
  );
}