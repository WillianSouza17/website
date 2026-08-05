import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Grid } from "lucide-react";

const categorias = [
  {
    src: "img/consoles.png",
    title: "Consoles",
    desc: "PlayStation, Xbox e Nintendo Switch com os melhores jogos do mercado.",
    count: "42 produtos",
  },
  {
    src: "img/Notebooks.png",
    title: "Notebooks Gamer",
    desc: "Mobilidade e potência máxima com placas de vídeo dedicadas de alta performance.",
    count: "28 produtos",
  },
  {
    src: "img/Perifericos.png",
    title: "Periféricos",
    desc: "Teclados mecânicos, mouses de alta precisão e headsets imersivos.",
    count: "95 produtos",
  },
  {
    src: "img/Hardware.png",
    title: "Hardware",
    desc: "Placas de vídeo, processadores, memórias RAM e placas-mãe de última geração.",
    count: "150+ produtos",
  },
  {
    src: "img/cadeira.png",
    title: "Cadeiras Gamer",
    desc: "Ergonomia superior, apoio lombar e regulagem de altura para longas jogatinas.",
    count: "18 produtos",
  },
];

export default function Categorias() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12 space-y-10">
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-extrabold text-white flex items-center justify-center gap-3">
          <Grid className="w-8 h-8 text-gc-accent" />
          Nossas Categorias
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto">
          Explore nosso catálogo completo de games, hardware e periféricos de alta performance.
        </p>
        <div className="w-20 h-1 bg-gc-accent mx-auto mt-2 rounded-full" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categorias.map((c) => (
          <Card
            key={c.title}
            className="group hover:border-gc-accent/60 transition-all duration-300 flex flex-col justify-between"
          >
            <CardHeader className="p-4 pb-0 flex flex-row items-center justify-between">
              <Badge variant="neon">{c.count}</Badge>
            </CardHeader>

            <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
              <div className="w-full h-48 bg-black/20 rounded-xl p-4 flex items-center justify-center">
                <img
                  src={c.src}
                  alt={c.title}
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <CardTitle className="text-2xl font-bold text-white group-hover:text-gc-accent transition-colors">
                {c.title}
              </CardTitle>

              <p className="text-gray-400 text-sm leading-relaxed">
                {c.desc}
              </p>
            </CardContent>

            <CardFooter className="p-6 pt-0">
              <Button
                variant="outline"
                className="w-full gap-2 group-hover:bg-gc-accent group-hover:text-gc-dark group-hover:border-gc-accent"
              >
                Explorar {c.title}
                <ArrowRight className="w-4 h-4" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  );
}