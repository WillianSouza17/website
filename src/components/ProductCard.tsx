import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  id?: string | number;
  nome: string;
  preco?: string | number;
  src?: string;
  categoria?: string;
  onAddToCart?: () => void;
}

export default function ProductCard({
  nome,
  preco = "R$ 299,90",
  src = "img/Produto.png",
  categoria,
  onAddToCart,
}: ProductCardProps) {
  return (
    <Card className="group overflow-hidden flex flex-col justify-between hover:border-gc-accent/50 transition-all duration-300">
      <CardContent className="p-4 flex flex-col items-center">
        <div className="relative w-full h-[220px] overflow-hidden rounded-xl bg-black/20 flex items-center justify-center p-2 mb-4">
          <img
            src={src}
            alt={nome}
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
          />
          {categoria && (
            <Badge variant="neon" className="absolute top-2 left-2">
              {categoria}
            </Badge>
          )}
        </div>
        <h3 className="font-semibold text-lg text-white text-center line-clamp-1 mb-1">
          {nome}
        </h3>
        <p className="text-gc-accent font-bold text-xl">
          {typeof preco === "number" ? `R$ ${preco.toFixed(2)}` : preco}
        </p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button
          variant="outline"
          className="w-full gap-2 group-hover:bg-gc-accent group-hover:text-gc-dark group-hover:border-gc-accent"
          onClick={onAddToCart}
        >
          <ShoppingCart className="w-4 h-4" />
          Comprar
        </Button>
      </CardFooter>
    </Card>
  );
}
