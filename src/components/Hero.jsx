import React, { useEffect, useState, useMemo } from "react";

const BACKEND =
  window.location.hostname === "localhost"
    ? "http://localhost:5000"
    : "https://TU-SERVICIO.koyeb.app"; // prod (pon tu dominio real)

const HOTMART = "https://pay.hotmart.com/T102779770X";

async function irAPago(e) {
  e?.preventDefault();
  try {
    const r = await fetch(`${BACKEND}/mp/preference`, { method: "POST" });
    if (!r.ok) throw new Error(`HTTP ${r.status}`);
    const { init_point } = await r.json();
    if (!init_point) throw new Error("init_point vacío");
    window.location.href = init_point; // 👉 directo a Mercado Pago
  } catch (err) {
    console.error(err);
    alert("No se pudo iniciar el pago.");
  }
}

const COPIES = [
  [
    "Rechazo en la cama.",
    <span key="c1b" className="text-blue-700">Excusas, miradas, distancia.</span>,
    "Las verrugas arruinan tu intimidad."
  ],
  [
    "Verrugas que vuelven.",
    <span key="c2b" className="text-blue-700">Vergüenza que no te deja vivir.</span>,
    "Miedo a que te vean."
  ],
  [
    "Ansiedad cada ducha.",
    <span key="c3b" className="text-blue-700">Evitas médicos, evitas espejos.</span>,
    "¿Y si nunca se van? y si se convierte en cancer?"
  ],
];

const ROTATE_MS = 5000;
const FADE_MS = 500;

const Hero = () => {
  const [idx, setIdx] = useState(0);
  const [fading, setFading] = useState(false);
  const prefersReduced = useMemo(
    () => typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches,
    []
  );

  useEffect(() => {
    if (prefersReduced) return;
    const i = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setIdx((p) => (p + 1) % COPIES.length);
        setFading(false);
      }, FADE_MS);
    }, ROTATE_MS);
    return () => clearInterval(i);
  }, [prefersReduced]);

  return (
    <section className="relative bg-white">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 -top-24 h-48 bg-gradient-to-b from-blue-50 to-transparent" />

      <div className="mx-auto max-w-6xl px-4 md:px-8 py-16 md:py-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
              <span className="inline-block h-2 w-2 rounded-full bg-blue-600" />
              Confidencial · Descarga inmediata
            </div>

            <h1
              className={[
                "text-4xl md:text-5xl font-bold leading-[1.1] text-gray-900",
                prefersReduced ? "" : "transition-opacity",
                prefersReduced ? "" : `duration-[${FADE_MS}ms]`,
                fading ? "opacity-0" : "opacity-100",
              ].join(" ")}
              aria-live="polite"
            >
              {COPIES[idx].map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  {i < COPIES[idx].length - 1 && <br className="hidden sm:block" />}
                </React.Fragment>
              ))}
            </h1>

            <p className="mt-5 max-w-xl text-lg text-gray-600">
              Frenalo hoy con un plan claro, anónimo y directo. Una guía basada en experiencia real + respaldo médico.
            </p>

            {/* CTAs */}
            <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row sm:items-start">
              <a
                href={HOTMART}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-8 py-4 text-white text-base md:text-lg font-semibold shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200"
              >
                Quiero la guía ahora
              </a>
              <a
                href="#beneficios"
                className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-700 transition hover:bg-gray-50"
              >
                Qué incluye
              </a>
            </div>

            <ul className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-500">
              <li className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" className="text-blue-600">
                  <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                Descarga inmediata (PDF)
              </li>
              <li className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" className="text-blue-600">
                  <path fill="currentColor" d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                </svg>
                Compra anónima
              </li>
              <li className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" className="text-blue-600">
                  <path fill="currentColor" d="M12 8a4 4 0 100 8 4 4 0 000-8zm8-5H4a2 2 0 00-2 2v14a2 2 0 002 2h16a2 2 0 002-2V5a2 2 0 00-2-2z"/>
                </svg>
                Sin registro ni datos personales
              </li>
            </ul>
          </div>

          <div className="relative">
            <div className="rounded-2xl border border-gray-200 shadow-sm">
              <video
                className="aspect-video w-full rounded-2xl"
                controls
                poster={`${import.meta.env.BASE_URL}crio1-poster.jpg`}
              >
                <source src={`${import.meta.env.BASE_URL}crio1.mp4`} type="video/mp4" />
                Tu navegador no soporta video.
              </video>
            </div>
            <p className="mt-3 text-center text-sm text-gray-500">
              Video educativo: La crema milagrosa EXISTE...!.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
