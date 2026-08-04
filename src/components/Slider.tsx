import { useEffect, useState } from "react";

const slides = [
  { src: "img/slide1.jpg", alt: "Slide 1" },
  { src: "img/slide2.jpg", alt: "Slide 2" },
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
    <div className="relative mx-auto max-w-7xl px-4 py-10">
      <div className="relative overflow-hidden rounded-lg">
        {slides.map((slide, i) => (
          <img
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            className={`w-full h-[330px] object-cover ${i === index ? "block" : "hidden"}`}
          />
        ))}

        <button
          className="slide-arrow left-2.5"
          onClick={() => goTo(index - 1)}
          aria-label="Anterior"
        >
          &#10094;
        </button>
        <button
          className="slide-arrow right-2.5"
          onClick={() => goTo(index + 1)}
          aria-label="Próximo"
        >
          &#10095;
        </button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {slides.map((_, i) => (
            <span
              key={i}
              onClick={() => goTo(i)}
              className={`w-3 h-3 rounded-full cursor-pointer transition-colors duration-300 ${
                i === index ? "bg-gc-neon" : "bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}