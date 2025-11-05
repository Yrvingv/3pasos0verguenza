import React from 'react';

const pasos = [
  {
    titulo: "Paso 1: Entender el problema",
    texto: "Antes de encontrar una solución real, pasé por años de frustración, silencio y desinformación. Esta guía comienza explicando qué son realmente las verrugas genitales y por qué aparecen.",
  },
  {
    titulo: "Paso 2: Evitar errores comunes",
    texto: "Probé cremas, quemaduras, electrocauterización y otros métodos dolorosos que solo empeoraron todo. En este paso te muestro qué no funcionó y por qué.",
  },
  {
    titulo: "Paso 3: Aplicar el plan que funcionó",
    texto: "Te comparto exactamente lo que hice, cómo lo hice y en qué orden. Una combinación simple que trajo resultados visibles en pocas semanas y me devolvió la paz mental.",
  },
];

const Proceso = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-8" id="proceso">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700 text-center mb-12">
          Cómo logré resolverlo en 3 pasos
        </h2>

        <div className="space-y-10">
          {pasos.map((paso, idx) => (
            <div key={idx} className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                {paso.titulo}
              </h3>
              <p className="text-gray-700 text-base">{paso.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Proceso;
