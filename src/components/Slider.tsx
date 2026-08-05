import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  { src: "img/slide1.jpg", alt: "Ofertas em Periféricos" },
  { src: "img/slide2.jpg", alt: "Lançamentos Consoles e Games" },
];

export default function Slider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const goTo = (i: number) => setIndex(((i % slides.length) + slides.length) % slides.length);

  return (
    <div className="relative mx-auto max-w-7xl py-4">
      <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl group">
        {slides.map((slide, i) => (
          <img
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            className={`w-full h-[360px] object-cover transition-opacity duration-700 ${
              i === index ? "opacity-100 block" : "opacity-0 hidden"
            }`}
          />
        ))}

        <Button
          variant="secondary"
          size="icon"
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 border-white/20 hover:bg-gc-accent hover:text-gc-dark backdrop-blur-md opacity-80 group-hover:opacity-100 transition-all"
          onClick={() => goTo(index - 1)}
          aria-label="Anterior"
        >
          <ChevronLeft className="w-6 h-6" />
        </Button>

        <Button
          variant="secondary"
          size="icon"
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 border-white/20 hover:bg-gc-accent hover:text-gc-dark backdrop-blur-md opacity-80 group-hover:opacity-100 transition-all"
          onClick={() => goTo(index + 1)}
          aria-label="Próximo"
        >
          <ChevronRight className="w-6 h-6" />
        </Button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10 bg-black/40 px-3 py-1.5 rounded-full backdrop-blur-md border border-white/10">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Ir para slide ${i + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === index ? "w-7 bg-gc-accent" : "w-2.5 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}