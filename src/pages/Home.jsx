import TypewriterText from "../components/TypewriterText.jsx";
import "../App.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <section className="hero-section ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4 lg:pt-16 lg:pb-8 md:mt-10 ">
          {/* Hero Section - Imagen y Texto */}
          <div className="padre-hero flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 mb-4 md:mb-8">
            {/* Texto Hero */}
            <div className="hero-container  flex flex-col justify-center w-full md:w-1/2 order-2 md:order-1">
              <h1 className="hero-title text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-center md:text-left">
                <span className="highlight-white titulo block mb-2 md:mb-4">
                Es posible
              </span>
              <div className="min-h-[60px] sm:min-h-[72px] md:min-h-[80px] lg:min-h-[90px]">
                <TypewriterText
                  words={[
                    "emprender",
                    "crecer",
                    "creer",
                    "soñar",
                    "construir empresa",
                  ]}
                />
              </div>
            </h1>
          </div>

          {/* Imagen Hero */}
          <div className="hero-portrait flex justify-center items-center w-full md:w-1/2 order-1 md:order-2">
            <img
              id="charlesFoto"
              src="/wilsonycharles.png"
              alt="Fundadores de La Escuela del Emprendedor"
              className="portrait-img w-full h-auto rounded-xl"
              loading="eager"
            />
          </div>
        </div>
        </div>
      </section>

      {/* Sección Video y Senado - Fondo diferente */}
      <section className="bg-gradient-to-b from-purple-900/30 via-indigo-900/20 to-black py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* En móvil: columna (video, imagen). En desktop: fila (imagen, video, imagen) */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-6">
            {/* Imagen Cámara Izquierda - Solo visible en desktop */}
            <div className="hidden lg:block lg:w-1/5">
              <img
                src="/camara.PNG"
                alt="camara"
                className="w-full h-auto rounded-xl shadow-2xl"
                loading="lazy"
              />
            </div>

            {/* Video Central */}
            <div className="w-full lg:w-4/5 order-1 lg:order-2">
              <div className="aspect-video rounded-xl overflow-hidden shadow-2xl">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/ho418mOxapE?autoplay=1&mute=1&loop=1&playlist=ho418mOxapE"
                  title="Video Introductorio - La Escuela del Emprendedor"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>

            {/* Imagen Senado Derecha - Solo visible en desktop */}
            <div className="hidden lg:block lg:w-1/5 order-3">
              <img
                src="/senado.PNG"
                alt="Senado"
                className="w-full h-auto rounded-xl shadow-2xl"
                loading="lazy"
              />
            </div>

            {/* Contenedor de imágenes móvil - Senado y Cámara juntas */}
            <div className="container-votos flex flex-col gap-2 w-2/3 sm:w-1/2 lg:hidden order-2">
              <img
                src="/senado.PNG"
                alt="Senado"
                className=" w-full h-auto rounded-xl shadow-2xl"
                loading="lazy"
              />
              <img
                src="/camara.PNG"
                alt="Cámara"
                className="images-votos w-full h-auto rounded-xl shadow-2xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Continuación del contenido */}
      <section className="bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
          {/* Sección Principal */}
          <div className="max-w-6xl mx-auto mb-8 md:mb-16">
            <div className="glass-card mb-8 md:mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-center text-emerald-400">
                Aprende y emprende con La Escuela del Emprendedor
              </h2>
              <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-center mb-8 text-sky-400">
                Impulsa tu negocio con formación práctica y de calidad.
              </p>
              <p className="text-lg sm:text-xl md:text-2xl leading-relaxed mb-8 text-center md:text-left">
                Accede a cursos diseñados especialmente para emprendedores y
                microempresarios en áreas clave como Marketing, Administración,
                Finanzas y Gestión Legal.
            </p>
            <div className="grid sm:grid-cols-2 gap-6 md:gap-8 text-lg sm:text-xl md:text-2xl">
              <div className="flex items-start gap-4">
                <span className="text-emerald-400 text-2xl md:text-3xl font-bold">
                  ✓
                </span>
                <div>
                  <p className="font-semibold">Más de 28 módulos gratuitos</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-emerald-400 text-2xl md:text-3xl font-bold">
                  ✓
                </span>
                <div>
                  <p className="font-semibold">
                    7 profesores expertos a tu disposición
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Grid de Tarjetas */}
          <div className="grid gap-4 sm:gap-6 md:grid-cols-2 mb-8 md:mb-12">
            <div className="glass-card">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-indigo-600">
                ¿Para quién es esto?
              </h3>
              <p className="text-lg sm:text-xl md:text-2xl leading-relaxed">
                ¿Quieres emprender, crear tu propia empresa y convertir tus
                ideas en realidad? ¿Buscar libertad financiera y desarrollar tu
                potencial emprendedor?
                <span className="block mt-4 text-sky-500 font-semibold">
                  Llegaste al lugar indicado.
                </span>
              </p>
            </div>
            <div className="glass-card">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-indigo-600">
                ¿Qué aprenderás?
              </h3>
              <p className="text-lg sm:text-xl md:text-2xl leading-relaxed">
                Aquí puedes formarte de manera integral en emprendimiento,
                gestión empresarial, estrategia de negocios y desarrollo
                personal para crear y escalar tu empresa con éxito.
              </p>
            </div>
            <div className="glass-card md:col-span-2">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-indigo-600">
                Porque los sueños se construyen
              </h3>
              <p className="text-lg sm:text-xl md:text-2xl leading-relaxed mb-4">
                Para emprender con propósito, necesitas más que una idea:
                necesitas conocimiento, mentoría y una comunidad que te
                respalda.
              </p>
              <p className="text-lg sm:text-xl md:text-2xl font-bold text-sky-500">
                La Escuela del Emprendedor es el espacio donde transformas tus
                sueños en empresas reales, con herramientas probadas, estrategia
                clara y el respaldo de una comunidad de emprendedores.
              </p>
            </div>
          </div>
        </div>

        {/* Botones CTA */}
        <div className="max-w-4xl mx-auto flex flex-col gap-3 sm:gap-4 md:gap-5">
          {/* Botón principal - ancho completo */}
          <Link
            className="tab-button active w-full text-center py-4 text-base sm:text-lg md:text-xl rounded-xl transition-all duration-300 hover:scale-[1.02]"
            to="/la-escuela-del-emprendedor"
          >
             Entra a La Escuela del Emprendedor
          </Link>
          {/* Botones secundarios */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <Link
              className="tab-button w-full text-center py-3 sm:py-4 text-sm sm:text-base rounded-xl transition-all duration-300 hover:scale-[1.02]"
              to="/wilson"
            >
              Conocer a Wilson
            </Link>
            <Link
              className="tab-button w-full text-center py-3 sm:py-4 text-sm sm:text-base rounded-xl transition-all duration-300 hover:scale-[1.02]"
              to="/el-profe"
            >
              Conocer al Profe
            </Link>
          </div>
        </div>
        </div>
      </section>
    </>
  );
}
