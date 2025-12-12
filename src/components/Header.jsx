import { useState } from "react";
import { NavLink as RouterNavLink, useNavigate } from "react-router-dom";
// Asumiendo que NavLink y MobileLink están definidas en este mismo archivo o importadas
import "../App.css";

// Componente auxiliar para enlaces de navegación de escritorio
function NavLink({ to, label, onClick }) {
  return (
    <RouterNavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
    >
      {label}
    </RouterNavLink>
  );
}

// Componente auxiliar para enlaces de navegación móvil
function MobileLink({ to, label, onClick }) {
  return (
    <RouterNavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `mobile-nav-link ${isActive ? "active" : ""}`
      }
    >
      {label}
    </RouterNavLink>
  );
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Función para manejar el scroll (se mantiene como estaba)
  const handleScrollToUnete = (e) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    navigate("/ruta-formativa");
    setTimeout(() => {
      const element = document.getElementById("unete");
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 300);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/70 border-b border-purple-400/30 shadow-lg shadow-purple-400/10">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4 flex justify-between items-center gap-4">
        {/* 1. LOGO: Izquierda en Desktop y Mobile */}
        <RouterNavLink
          to="/"
          className="cursor-pointer flex-shrink-0"
          onClick={() => setMobileMenuOpen(false)}
        >
          <img
            src="/LA ESCUELA DEL EMPRENDEDOR LOGO.png"
            alt="La Escuela del Emprendedor"
            className="h-10 md:h-20 w-auto"
          />
        </RouterNavLink>

        {/* 2. CENTRO (Mobile: Botón LA ESCUELA / Desktop: Pestañas de Navegación) */}

        {/* 2a. Botón 'LA ESCUELA DEL EMPRENDEDOR' (SOLO MOBILE, CENTRO) */}
        <div className="flex-1 flex justify-center md:hidden">
          <RouterNavLink
            to="/la-escuela-del-emprendedor"
            onClick={() => setMobileMenuOpen(false)}
            className="btn-primary text-sm px-4 py-2 rounded-lg whitespace-nowrap"
          >
            LA ESCUELA DEL EMPRENDEDOR
          </RouterNavLink>
        </div>

        {/* 2b. Pestañas de Navegación (SOLO DESKTOP, CENTRO) */}
        <nav className="hidden md:flex items-center gap-6 flex-1 justify-center">
          <NavLink
            to="/"
            label="Inicio"
            onClick={() => setMobileMenuOpen(false)}
          />
          <NavLink
            to="/wilson"
            label="Wilson"
            onClick={() => setMobileMenuOpen(false)}
          />
          <NavLink
            to="/el-profe"
            label="El Profe"
            onClick={() => setMobileMenuOpen(false)}
          />
          <RouterNavLink
            to="/la-escuela-del-emprendedor"
            onClick={() => setMobileMenuOpen(false)}
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
          >
            LA ESCUELA
          </RouterNavLink>
        </nav>

        {/* 3. DERECHA (Mobile: Menú Hamburguesa / Desktop: Botón ÚNETE) */}

        {/* 3a. Botón ÚNETE (SOLO DESKTOP, DERECHA) */}
        {/* CLASE: 'hidden md:block' asegura que el botón solo es visible en desktop (md o mayor) */}
        <div className="hidden md:flex">
          <a
            href="https://chat.whatsapp.com/F2P1ClM0KWvDidKSlplQFM"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm px-6 py-3 rounded-2xl flex-shrink-0"
          >
            ÚNETE
          </a>
        </div>

        {/* 3b. Menú Hamburguesa (SOLO MOBILE, DERECHA) */}
        <button
          className="md:hidden p-2 text-purple-400 flex-shrink-0"
          onClick={() => setMobileMenuOpen((o) => !o)}
          aria-label="Abrir menú"
        >
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Menú Desplegable Mobile */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-lg border-t border-purple-400/20">
          <nav className="flex flex-col p-4 space-y-2">
            <MobileLink
              to="/"
              label="Inicio"
              onClick={() => setMobileMenuOpen(false)}
            />
            <MobileLink
              to="/wilson"
              label="Wilson"
              onClick={() => setMobileMenuOpen(false)}
            />
            <MobileLink
              to="/el-profe"
              label="El Profe"
              onClick={() => setMobileMenuOpen(false)}
            />
            <RouterNavLink
              to="/la-escuela-del-emprendedor"
              className="mobile-nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              LA ESCUELA
            </RouterNavLink>
            {/* AQUÍ SE AGREGA EL BOTÓN 'ÚNETE' COMO ENLACE MÓVIL */}
            <a
              href="https://chat.whatsapp.com/F2P1ClM0KWvDidKSlplQFM"
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              ÚNETE
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
