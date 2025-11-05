const BACKEND =
  window.location.hostname === 'localhost'
    ? 'http://localhost:5000'           // dev
    : 'https://TU-SERVICIO.koyeb.app';  // prod: pon tu dominio real

const HOTMART = "https://pay.hotmart.com/T102779770X";

export default function Compra() {
  const comprar = async (e) => {
    e?.preventDefault();
    try {
      const r = await fetch(`${BACKEND}/mp/preference`, { method: 'POST' });
      if (!r.ok) throw new Error(`HTTP ${r.status}`);
      const { init_point } = await r.json();
      if (!init_point) throw new Error('init_point vacío');
      window.location.href = init_point; // 👉 directo a la pasarela de MP
    } catch (err) {
      console.error(err);
      alert('No se pudo iniciar el pago.');
    }
  };

  return (
    <section id="compra" className="py-12 md:py-16 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-center">
          <a
            href={HOTMART}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-8 py-4 text-white text-base md:text-lg font-semibold shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200"
          >
            Comprar ahora
          </a>
        </div>
      </div>
    </section>
  );
}
