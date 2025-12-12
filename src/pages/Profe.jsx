import "../App.css";

export default function Profe() {
  return (
    <section className="min-h-screen py-32 px-6 pb-1">
      <div className="max-w-6xl mx-auto relative">
        <div className="tab-content relative z-10">
          <h2 className="text-6xl font-bold mb-8 text-center">
            <span className="highlight-purple">
              ¿QUIÉN ES EL PROFE CHARLES?
            </span>
          </h2>
          <div className="text-xl leading-relaxed space-y-6 max-w-4xl mx-auto">
            <p className="text-3xl font-semibold">
              ¡Hola! Soy El Profe Charles, abogado, docente y apasionado del
              derecho, el deporte y la buena comida.
            </p>
            <p className="text-3xl">
              Cuento con formación como{" "}
              <strong>Magíster en Derecho Administrativo</strong>, y soy
              especialista en Contratación Estatal, Derecho Administrativo y
              Derecho Disciplinario.
            </p>
            <img
              src="/charles3.png"
              alt="El Profe Charles"
              class="float-left mr-6 mb-4 w-64 md:w-80 [mask-image:linear-gradient(to_bottom,black_60%,transparent)]"
              loading="lazy"
            />
            <p className="text-3xl">
              Desde hace más de <strong>15 años</strong> me dedico a acercar el
              conocimiento jurídico de manera simple, clara y entretenida. Hoy,
              más de{" "}
              <strong className="text-purple-700">155.000 personas</strong> en
              toda Colombia siguen mi trabajo en redes sociales.
            </p>
            <p className="text-3xl">
              Soy creador de{" "}
              <strong className="text-sky-500">#ElDerechoParaTodos</strong>, una
              comunidad educativa con más de 17.000 líderes académicos, y
              cocreador de{" "}
              <strong className="text-emerald-400">
                La Escuela del Emprendedor
              </strong>
              , donde se forman más de 2.000 emprendedores en todo el país.
            </p>
            <div className="text-center mt-12">
              <button
                className="btn-primary"
                onClick={() =>
                  window.open("https://wa.me/573116005672", "_blank")
                }
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Contáctame
              </button>
            </div>
          </div>
        </div>
        {/* Imagen decorativa abajo a la derecha - desktop: z-index alto, más abajo y derecha */}
        <div className="hidden md:block fixed bottom-4 right-4 lg:bottom-8 lg:right-8 w-56 lg:w-72 xl:w-80  pointer-events-none z-50 saturate-100 ">
          <img
            src="/charles2.png"
            alt="El Profe Charles"
            className="w-full h-auto profe-portrait-desktop "
            style={{
              filter:
                "drop-shadow(0 0 5px rgba(255, 255, 255, 0.3)) drop-shadow(0 0 10px rgba(255, 255, 255, 0.15))",
            }}
            loading="lazy"
          />
        </div>
        {/* Versión móvil - centrada y más pequeña */}
        <div className="md:hidden flex justify-center mb-8">
          <img
            src="/charles2.png"
            alt="El Profe Charles"
            className="w-80 h-auto profe-portrait-mobile"
            style={{
              filter:
                "drop-shadow(0 0 20px rgba(255, 255, 255, 0.2)) drop-shadow(0 0 10px rgba(255, 255, 255, 0.1))",
            }}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
