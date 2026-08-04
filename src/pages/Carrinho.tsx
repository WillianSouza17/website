import { useState } from "react";
import { Link } from "react-router-dom";

interface CartItem {
  id: number;
  nome: string;
  preco: number;
  img: string;
  qtd: number;
}

const initialItems: CartItem[] = [
  { id: 1, nome: "Console PlayStation 5 825GB", preco: 3899.0, img: "img/consoles.png", qtd: 1 },
  { id: 2, nome: "Headset Gamer Surround 7.1 RGB", preco: 349.9, img: "img/Perifericos.png", qtd: 1 },
  { id: 3, nome: "Teclado Mecânico RGB Switch Blue", preco: 279.9, img: "img/Perifericos.png", qtd: 1 },
  { id: 4, nome: "Cadeira Gamer Reclinável Ergoclass RGB", preco: 1199.0, img: "img/cadeira.png", qtd: 1 },
];

const formatPrice = (value: number) =>
  value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

export default function Carrinho() {
  const [items, setItems] = useState<CartItem[]>(initialItems);

  const remove = (id: number) => setItems((prev) => prev.filter((i) => i.id !== id));

  const changeQtd = (id: number, delta: number) =>
    setItems((prev) =>
      prev.map((i) =>
        i.id === id ? { ...i, qtd: Math.max(1, i.qtd + delta) } : i
      )
    );

  const subtotal = items.reduce((sum, i) => sum + i.preco * i.qtd, 0);

  return (
    <main className="max-w-6xl mx-auto px-4 my-5">
      <div className="text-center mb-5">
        <h1 className="text-5xl font-bold text-white">Meu Carrinho</h1>
        <p className="text-lg text-gc-muted">
          Confira os produtos selecionados e finalize sua compra com segurança.
        </p>
        <hr className="w-1/4 mx-auto border-gc-accent" />
      </div>

      {items.length === 0 ? (
        <div className="text-center py-16 gc-card max-w-xl mx-auto p-8">
          <p className="text-2xl mb-4">Seu carrinho está vazio.</p>
          <Link to="/" className="btn btn-primary">
            Continuar Comprando
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2">
            <div className="gc-card p-4 rounded shadow">
              {items.map((item) => (
                <div key={item.id} className="cart-item">
                  <div className="flex items-center">
                    <img src={item.img} alt={item.nome} className="w-[70px] h-[70px] object-contain me-3" />
                    <div>
                      <h5 className="mb-1 text-white">{item.nome}</h5>
                      <p className="mb-0 text-gc-accent font-bold">{formatPrice(item.preco)}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="badge flex items-center gap-2">
                      <button
                        className="bg-transparent border-none text-white cursor-pointer px-1"
                        onClick={() => changeQtd(item.id, -1)}
                        aria-label="Diminuir quantidade"
                      >
                        &minus;
                      </button>
                      {item.qtd}
                      <button
                        className="bg-transparent border-none text-white cursor-pointer px-1"
                        onClick={() => changeQtd(item.id, 1)}
                        aria-label="Aumentar quantidade"
                      >
                        +
                      </button>
                    </div>
                    <span className="text-gc-muted text-sm">
                      {formatPrice(item.preco * item.qtd)}
                    </span>
                    <button
                      className="btn btn-outline-danger"
                      onClick={() => remove(item.id)}
                      aria-label="Remover item"
                    >
                      &times;
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="gc-card p-4 rounded shadow">
              <h4 className="text-white mb-4 border-b border-gc-accent pb-2">
                Resumo da Compra
              </h4>

              <div className="flex justify-between mb-2">
                <span>Subtotal:</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Frete:</span>
                <span className="text-gc-neon">Grátis</span>
              </div>
              <hr className="border-gc-border" />
              <div className="flex justify-between mb-4 text-lg font-bold">
                <span>Total:</span>
                <span className="text-gc-accent">{formatPrice(subtotal)}</span>
              </div>

              <button
                className="btn btn-primary w-full py-2 font-bold uppercase mb-2"
                onClick={() => alert("Compra finalizada com sucesso!")}
              >
                Finalizar Compra
              </button>
              <Link to="/" className="btn btn-outline-light w-full py-2">
                Continuar Comprando
              </Link>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}