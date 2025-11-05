import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-8 px-4 md:px-8 text-center text-sm text-gray-500">
      <p className="mb-2">
        Este sitio web no reemplaza el diagnóstico médico. La guía compartida es una experiencia personal documentada con fines informativos. Consulte a su médico antes de iniciar cualquier tratamiento.
      </p>
      <p className="text-gray-400">
        © {new Date().getFullYear()} 3 Pasos, 0 Vergüenza · Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default Footer;
