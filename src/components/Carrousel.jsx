import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

// Archivos en /public (no anteponer "public/")
const FILES = [
  "verruga1.jpg",
  "verruga2.jpeg",
  "verruga3.jpeg",
  "verruga4.jpeg",
  "verruga5.jpeg",
  "verruga4.jpeg",
  "verruga6.jpeg",
  "verruga7.jpeg",
  "verruga8.jpeg",
];

// 👉 Prefijo robusto según entorno (dev: "/" | prod GH Pages: "/3pasos0verguenza/")
const slides = FILES.map((f) => `${import.meta.env.BASE_URL}${f}`);

const Carousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  const prev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const next = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <section className="bg-white py-16 px-4 md:px-8" id="galeria">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-8">Evidencia del proceso</h2>

        {/* Viewport */}
        <div className="overflow-hidden relative" ref={emblaRef}>
          {/* Container */}
          <div className="flex select-none touch-pan-y -ml-4">
            {slides.map((src, i) => (
              <div className="min-w-full pl-4" key={i}>
                {/* Marco uniforme (alto fijo) */}
                <div className="relative w-full h-[80px] md:h-[420px] rounded-xl overflow-hidden border border-gray-200 shadow-sm bg-gray-100">
                  {/* La imagen llena el marco y se recorta si sobra */}
                  <img
                    src={src}
                    alt={`evidencia ${i + 1}`}
                    className="absolute inset-0 h-full w-full object-contain object-center"
                    loading="lazy"
                    onError={() => console.warn("No carga imagen:", src)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controles */}
        <div className="flex justify-center gap-6 mt-6">
          <button onClick={prev} className="bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded shadow">
            ← Anterior
          </button>
          <button onClick={next} className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded shadow">
            Siguiente →
          </button>
        </div>

        <p className="text-sm text-gray-500 mt-3">
          Todas las imágenes son referenciales de este tipo de padecimientos en la piel.
        </p>
      </div>
    </section>
  );
};

export default Carousel;
