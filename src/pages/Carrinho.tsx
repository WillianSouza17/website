import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from "lucide-react";

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
    <main className="max-w-6xl mx-auto px-4 py-12 space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-extrabold text-white flex items-center justify-center gap-3">
          <ShoppingBag className="w-8 h-8 text-gc-accent" />
          Meu Carrinho
        </h1>
        <p className="text-gray-400">
          Confira os produtos selecionados e finalize sua compra com segurança.
        </p>
        <div className="w-20 h-1 bg-gc-accent mx-auto mt-2 rounded-full" />
      </div>

      {items.length === 0 ? (
        <Card className="text-center py-16 max-w-md mx-auto p-8 space-y-6">
          <p className="text-2xl text-gray-300">Seu carrinho está vazio.</p>
          <Button asChild variant="neon">
            <Link to="/">Continuar Comprando</Link>
          </Button>
        </Card>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Lista de Produtos */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <Card
                key={item.id}
                className="p-4 flex flex-col sm:flex-row items-center justify-between gap-4"
              >
                <div className="flex items-center gap-4 w-full sm:w-auto">
                  <div className="w-20 h-20 bg-black/20 rounded-xl p-2 flex items-center justify-center shrink-0">
                    <img
                      src={item.img}
                      alt={item.nome}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-base">
                      {item.nome}
                    </h4>
                    <p className="text-gc-accent font-bold text-lg">
                      {formatPrice(item.preco)}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
                  {/* Seletor de Quantidade */}
                  <div className="flex items-center gap-2 border border-white/15 rounded-lg px-2 py-1 bg-white/5">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-7 w-7 text-white"
                      onClick={() => changeQtd(item.id, -1)}
                    >
                      <Minus className="w-3 h-3" />
                    </Button>
                    <span className="w-6 text-center font-bold text-white text-sm">
                      {item.qtd}
                    </span>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-7 w-7 text-white"
                      onClick={() => changeQtd(item.id, 1)}
                    >
                      <Plus className="w-3 h-3" />
                    </Button>
                  </div>

                  <span className="font-semibold text-white text-sm min-w-[90px] text-right">
                    {formatPrice(item.preco * item.qtd)}
                  </span>

                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-red-400 hover:text-red-300 hover:bg-red-500/10"
                    onClick={() => remove(item.id)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* Resumo da Compra */}
          <div>
            <Card className="border border-white/10 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white border-b border-white/10 pb-3">
                  Resumo da Compra
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between text-gray-300 text-sm">
                  <span>Subtotal</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between text-gray-300 text-sm items-center">
                  <span>Frete</span>
                  <Badge variant="neon">Grátis</Badge>
                </div>
                <div className="border-t border-white/10 pt-4 flex justify-between text-lg font-bold text-white">
                  <span>Total</span>
                  <span className="text-gc-accent">{formatPrice(subtotal)}</span>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col gap-3">
                <Button
                  variant="neon"
                  className="w-full py-3 text-base font-bold gap-2"
                  onClick={() => alert("Compra finalizada com sucesso!")}
                >
                  Finalizar Compra
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/">Continuar Comprando</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      )}
    </main>
  );
}