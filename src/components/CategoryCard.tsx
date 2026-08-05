import { Card, CardContent } from "@/components/ui/card";

interface CategoryCardProps {
  nome: string;
  src: string;
  onClick?: () => void;
}

export default function CategoryCard({ nome, src, onClick }: CategoryCardProps) {
  return (
    <Card
      onClick={onClick}
      className="group cursor-pointer overflow-hidden text-center hover:border-gc-accent transition-all duration-300 transform hover:-translate-y-1"
    >
      <CardContent className="p-4 flex flex-col items-center">
        <div className="w-full h-[220px] flex items-center justify-center p-2 mb-3">
          <img
            src={src}
            alt={nome}
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <span className="w-full py-2 px-4 rounded-xl border border-gc-accent/40 text-white font-medium text-lg group-hover:bg-gc-accent group-hover:text-gc-dark transition-colors">
          {nome}
        </span>
      </CardContent>
    </Card>
  );
}
