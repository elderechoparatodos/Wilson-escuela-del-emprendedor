import { useState, useEffect } from "react";

export default function WelcomePopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Mostrar el popup al cargar la página
    setIsOpen(true);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="popup-overlay" onClick={handleClose}>
      <div className="popup-container popup-container-dual" onClick={(e) => e.stopPropagation()}>
        {/* Botón cerrar */}
        <button className="popup-close" onClick={handleClose} aria-label="Cerrar">
          ✕
        </button>

        {/* Contenedor de ambas imágenes */}
        <div className="popup-images-grid">
          <img
            src="/senado.PNG"
            alt="Senado"
            className="popup-image"
          />
          <img
            src="/camara.PNG"
            alt="Cámara"
            className="popup-image"
          />
        </div>

        {/* Botón para cerrar */}
        <button className="popup-enter-btn" onClick={handleClose}>
          Continuar a La Escuela
        </button>
      </div>
    </div>
  );
}
