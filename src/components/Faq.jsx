import React, { useState } from 'react';

const faqs = [
  {
    pregunta: "¿Este tratamiento es seguro?",
    respuesta: "La combinación de crioterapia, imiquimod y vaselina fue aplicada de forma segura y progresiva. Sin embargo, siempre recomendamos consultar a un médico antes de comenzar cualquier tratamiento.",
  },
  {
    pregunta: "¿Voy a sentir dolor con el tratamiento?",
    respuesta: "La crioterapia puede causar molestias leves o ardor durante el proceso. Sin embargo, en esta guía se explican cuidados posteriores para minimizar dolor y acelerar la recuperación.",
  },
  {
    pregunta: "¿Cuánto tiempo tarda en desaparecer una verruga?",
    respuesta: "Según el tamaño y respuesta del cuerpo, puede tardar entre 7 y 21 días. El protocolo propuesto en la guía acelera significativamente el proceso en la mayoría de los casos.",
  },
  {
    pregunta: "¿Puedo usar este tratamiento en casa?",
    respuesta: "Sí, pero con precauciones. La guía te explica paso a paso cómo hacerlo de forma segura y anónima, sin necesidad de acudir a centros médicos si no lo deseás.",
  },
  {
    pregunta: "¿Qué pasa si me vuelven a salir?",
    respuesta: "En la guía se incluye un protocolo de seguimiento para evitar recurrencias y un esquema preventivo basado en experiencia real.",
  },
  {
    pregunta: "¿Cómo recibiré el PDF después del pago?",
    respuesta: "Una vez realizada la compra, recibirás automáticamente el PDF con la guía completa en tu correo electrónico o podrás descargarlo directamente desde la web.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 px-4 md:px-8" id="faq">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-700 text-center mb-10">
          Preguntas Frecuentes
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg shadow-sm"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full text-left flex justify-between items-center p-4 focus:outline-none"
              >
                <span className="text-gray-800 font-medium">{faq.pregunta}</span>
                <span className="text-blue-600 text-2xl">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-4 pb-4 text-gray-600">{faq.respuesta}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
