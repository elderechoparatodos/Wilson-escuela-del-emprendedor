import VideoCarousel from "../components/VideoCarousel.jsx";
import "../App.css";

export default function RutaFormativa() {
  const modules = [
    {
      title: "Módulo 1: Liderazgo público y ética",
      videos: ["3VpLVtLYGmA", "feit-GjyBYU"],
      gradient: "linear-gradient(135deg, #15172d 10%, #262951 100%)",
    },
    {
      title: "Módulo 2: Derecho electoral y participación ciudadana",
      videos: ["2ZAPTRJUbiM", "GAcNUgkisjs", "8CE-4EToF8E", "-viMlUDZKco", "9LX7GBJ4-Bc", "e3HKabpKZmk"],
      gradient: "linear-gradient(135deg, #009dd6 30%, #002f40 100%)",
      darkTitle: true,
    },
    {
      title: "Módulo 3: Contratación estatal",
      videos: ["GpHU5yhzaOo","8jFMzRbx6E4"],
      gradient: "linear-gradient(135deg, #15172d 10%, #262951 100%)",
    },
    {
      title: "Módulo 4: Políticas públicas y planeación",
      videos: ["_I55In49llA"],
      gradient: "linear-gradient(135deg, #009dd6 30%, #002f40 100%)",
      darkTitle: true,
    },
    {
      title: "Módulo 5: Comunicación y marketing político",
      videos: ["DYNSpLDb4EM", "MVmsfJ_pfJk"],
      gradient: "linear-gradient(135deg, #15172d 10%, #262951 100%)",
    },
  ];

  return (
    <section className="min-h-screen py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="tab-content">
          <h2 className="text-5xl font-bold mb-8 text-center">
            <span className="highlight-purple">RUTA FORMATIVA</span>
          </h2>
          <p className="text-3xl text-center mb-12 opacity-90">
            Conoce el programa diseñado para líderes que quieren hacer política
            con resultados, coherencia y visión.
          </p>
          <div className="space-y-8 mb-12">
            {modules.map((module, index) => (
              <VideoCarousel
                key={index}
                title={module.title}
                videos={module.videos}
                gradient={module.gradient}
                darkTitle={module.darkTitle}
              />
            ))}
          </div>
          {/* Video promocional independiente (después de los módulos) */}
          <div className="module-card rounded-lg overflow-hidden shadow-lg mb-12" style={{ background: "linear-gradient(135deg, #1a1a1a 0%, #262951 100%)" }}>
            <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">EL SIGUIENTE NIVEL</h3>
            <div className="video-container aspect-video w-full">
              <iframe
                width="100%"
                height="100%"
                src={'https://www.youtube.com/embed/sqLxtE5KgP0'}
                title={'Video promocional'}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
          <div className="text-center">
            <div className="arrow-indicator mb-4">↓</div>
            {/* <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
              <span
                className="highlight-white"
                style={{ transform: "skewY(-3deg)", display: "inline-block" }}
              >
                DA UN PASO AL
                <br />
                SIGUIENTE NIVEL
              </span>
            </h3> */}
            {/* Botón 1 */}
            <a
              href="https://chat.whatsapp.com/F2P1ClM0KWvDidKSlplQFM"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block mb-8"
            >
              EL SIGUIENTE NIVEL
            </a>

            {/* Flayer */}
            <div className="mb-8 flex justify-center" id="unete">
              <img 
                src="/siguiente_nivel.jpeg" 
                alt="Da un paso al siguiente nivel" 
                className="w-full max-w-2xl rounded-2xl shadow-2xl shadow-purple-500/30"
                loading="lazy"
              />
            </div>

            {/* Botón 2 */}
            <a
              href="https://chat.whatsapp.com/F2P1ClM0KWvDidKSlplQFM"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block"
            >
              EL SIGUIENTE NIVEL
            </a>
            <p className="mt-6 text-lg opacity-75">
              ¡Gracias por unirte al equipo!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
