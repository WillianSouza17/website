import Slider from "../components/Slider";
import CategoryCard from "@/components/CategoryCard";
import ProductCard from "@/components/ProductCard";
import NewsletterForm from "@/components/NewsletterForm";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const categorias = [
  { src: "img/consoles.png", nome: "Consoles" },
  { src: "img/Notebooks.png", nome: "Notebooks" },
  { src: "img/Perifericos.png", nome: "Perifericos" },
  { src: "img/Hardware.png", nome: "Hardware" },
];

const produtosMaisComprados = [
  { id: 1, nome: "Headset Gamer Pro", preco: 349.9, src: "img/Produto.png", categoria: "Periféricos" },
  { id: 2, nome: "Teclado Mecânico RGB", preco: 299.9, src: "img/Produto.png", categoria: "Periféricos" },
  { id: 3, nome: "Mouse Gamer 16000 DPI", preco: 189.9, src: "img/Produto.png", categoria: "Periféricos" },
  { id: 4, nome: "Cadeira Gamer Ergocore", preco: 1299.9, src: "img/Produto.png", categoria: "Cadeiras" },
];

export default function Home() {
  return (
    <div className="space-y-12 pb-8">
      {/* Banner Principal */}
      <div className="overflow-hidden rounded-b-3xl border-b border-white/10 shadow-2xl">
        <img
          className="w-full h-auto"
          src="img/banner1.png"
          alt="Banner principal"
        />
      </div>

      {/* Slider de Destaques */}
      <div className="max-w-7xl mx-auto px-4">
        <Slider />
      </div>

      {/* Seção Categorias */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            Categorias em Destaque
          </h2>
          <div className="w-24 h-1 bg-gc-accent mx-auto mt-2 rounded-full" />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {categorias.map((c) => (
            <CategoryCard key={c.nome} nome={c.nome} src={c.src} />
          ))}
        </div>
      </section>

      {/* Quem Somos */}
      <section className="bg-gc-primary/80 border-y border-white/10 py-12 px-4 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8">
          <div className="hidden lg:flex flex-1 justify-center">
            <img className="w-64 drop-shadow-xl" src="img/logo1-.png" alt="GameCore" />
          </div>
          <div className="flex-1 text-center lg:text-left space-y-4">
            <h2 className="text-3xl font-extrabold text-white">Quem Somos</h2>
            <p className="text-gray-300 text-base leading-relaxed">
              Somos uma empresa de vendas completamente dedicada e inserida no universo dos games e da tecnologia.
              Buscamos trazer os melhores equipamentos, alta performance e os últimos lançamentos diretamente para o seu setup!
            </p>
            <Button variant="outline" className="gap-2">
              Saiba mais <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Mais Comprados */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            Mais Comprados
          </h2>
          <div className="w-24 h-1 bg-gc-accent mx-auto mt-2 rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {produtosMaisComprados.map((prod) => (
            <ProductCard
              key={prod.id}
              nome={prod.nome}
              preco={prod.preco}
              src={prod.src}
              categoria={prod.categoria}
            />
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <NewsletterForm />
    </div>
  );
}