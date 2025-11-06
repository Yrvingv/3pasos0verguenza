import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid'; // usa HeroIcons (opcional)


const beneficios = [
  "El plan que me ayudó a eliminar las verrugas del cuello y de la parte genital.",
  "Qué tratamientos probé y por qué no funcionaron.",
  "El paso a paso real, sin filtros ni promesas mágicas.",
  "Productos que usé, cómo los combiné y cuándo los apliqué.",
  "Rutina diaria de cuidado para acelerar la recuperación."
];

const Beneficios = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-8" id="beneficios">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-10">
          ¿Qué vas a encontrar en esta guía?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
          {beneficios.map((item, index) => (
            <div
              key={index}
              className="flex items-start bg-gray-50 border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition"
            >
              <CheckCircleIcon className="w-6 h-6 text-blue-600 mt-1 mr-3 flex-shrink-0" />
              <p className="text-gray-700">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Beneficios;
