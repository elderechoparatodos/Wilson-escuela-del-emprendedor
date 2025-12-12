import VideoCarousel from "../components/VideoCarousel.jsx";
import "../App.css";

export default function LaEscuelaDelEmprendedor() {
  const modules = [
    {
      title: "  Módulo 1: Gestión legal y administrativa",
      videos: [
        "DafwJEFRzz0",
        "wkyxjUVG-Kg",
        "559kU-atR9A",
        "UdM-yTFVUx0",
        "xEvyLbN-wBg"
      ],
      gradient: "linear-gradient(135deg, #15172d 10%, #262951 100%)",
    },
    {
      title: "  Módulo 2: Costos estratégicos y control financiero",
      videos: [
        "J93ds4r_7Ns",
        "erwHjc6lXrM",
        "48H2ylDIYiQ",
        "Tz0T7WUqfoM",
        "ITRkiatl3-o",
        "iFldOqLncv4"
      ],
      gradient: "linear-gradient(135deg, #009dd6 30%, #002f40 100%)",
      darkTitle: true,
    },
    {
      title: "  Módulo 3: Marketing digital",
      videos: [
        "HXtuvlX2a4s",
        "nCY3eDsrOZA",
        "ijiZtKpwYRY",
        "H3c9u0SXkEg",
        "DuFVTg_MMOo",
        "sTohtFQXV-Y",
        "sVmIxMnA-0s",
        "OVoHrM8YW78",
        "wxjE3gVP3WM",
        "s_3Juz2XLnM",
        "vLRtUim6yc8"
      ],
      gradient: "linear-gradient(135deg, #15172d 10%, #262951 100%)",
    },
    {
      title: "  Módulo 4: Mercadeo y pauta con Meta ADS",
      videos: [
        "fibbDmLBUXE",
        "ZVFj27kz_IU",
        "VCb3R01e7fc",
        "tzR5Mx41wWs",
        "uBRp9-3u2y0",
        "OhX_4WzQ-ho",
        "75nkUYUGO0Y",
        "8aUYt8sVNZo",
        "SqKs-0MD_Ss",
        "DEHfhh3q3_I",
        "AYWqdFwC51Y"
      ],
      gradient: "linear-gradient(135deg, #009dd6 30%, #002f40 100%)",
      darkTitle: true,
    },
  ];

  return (
    <section className="min-h-screen py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="tab-content">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6 text-center leading-tight">
            <span
              className="highlight-purple"
              style={{ display: "inline-block", wordBreak: "break-word" }}
            >
              LA ESCUELA DEL EMPRENDEDOR
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-2xl text-center mb-10 opacity-90">
            Explora nuestros módulos de formación empresarial diseñados para emprendedores.
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
          {/* Versión móvil - imagen centrada debajo del módulo */}
          <div className="md:hidden flex justify-center mb-8 mt-6 [mask-image:linear-gradient(to_bottom,black_60%,transparent)]">
            <img
              src="/wilson.png"
              alt="Wilson Castañeda"
              className="w-48 h-auto profe-portrait-mobile "
              style={{
                filter:
                  "drop-shadow(0 0 10px rgba(255, 255, 255, 0.2)) drop-shadow(0 0 10px rgba(255, 255, 255, 0.1))",
              }}
              loading="lazy"
            />
          </div>
        </div>
        {/* Imagen decorativa abajo a la izquierda - desktop */}
        <div className="  p-0 mb-0 hidden md:block fixed bottom-4 left-4 lg:bottom-0 lg:left-8 w-64 lg:w-72 xl:w-80 pointer-events-none z-50 saturate-100  [mask-image:linear-gradient(to_bottom,black_60%,transparent)]">
          <img
            src="/wilson.png"
            alt="Wilson Castañeda"
            className="w-full h-auto profe-portrait-desktop"
            style={{
              filter:
                "drop-shadow(0 0 5px rgba(255, 255, 255, 0.3)) drop-shadow(0 0 10px rgba(255, 255, 255, 0.15))",
            }}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
