import { useState } from 'react';
import '../App.css';

export default function VideoCarousel({ title, videos, gradient, darkTitle, titles }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextVideo = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  const goToVideo = (index) => {
    setCurrentIndex(index);
  };

  const titleClass = darkTitle ? 'text-slate-900' : 'text-white';

  if (!videos || videos.length === 0) {
    return (
      <div
        className="module-card rounded-lg overflow-hidden shadow-lg"
        style={gradient ? { background: gradient } : undefined}
      >
        <h3 className={`text-xl md:text-2xl font-bold mb-3 ${titleClass}`}>{title}</h3>
        <p className={`text-center py-8 ${titleClass} opacity-70`}>Contenido próximamente</p>
      </div>
    );
  }

  return (
    <div
      className="module-card rounded-lg overflow-hidden shadow-lg"
      style={gradient ? { background: gradient } : undefined}
    >
      <h3 className={`text-xl md:text-2xl font-bold mb-3 ${titleClass}`}>{title}</h3>
      
      <span className={`text-sm ${titleClass} opacity-70 block mb-3`}>
        Video {currentIndex + 1} de {videos.length}
      </span>

      <div className="relative">
        <div className="video-container aspect-video w-full">
          <iframe
            width="100%"
            height="100%"
            src={'https://www.youtube.com/embed/' + videos[currentIndex]}
            title={title + ' - Video ' + (currentIndex + 1)}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
            className="rounded-lg"
          ></iframe>
        </div>

        {/* Título del video actual (responsivo, con truncado) */}
        <div className="mt-3 px-1">
          <p className={`text-sm md:text-base ${titleClass} opacity-90`}
             style={{
               display: '-webkit-box',
               WebkitLineClamp: 2,
               WebkitBoxOrient: 'vertical',
               overflow: 'hidden'
             }}>
            {Array.isArray(titles) && titles[currentIndex]
              ? titles[currentIndex]
              : `Video ${currentIndex + 1}`}
          </p>
        </div>

        {videos.length > 1 && (
          <>
            {/* Botones de navegación */}
            <button
              onClick={prevVideo}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white rounded-full p-2 md:p-3 transition-all z-10"
              aria-label="Video anterior"
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={nextVideo}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white rounded-full p-2 md:p-3 transition-all z-10"
              aria-label="Siguiente video"
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>

            {/* Indicadores de puntos */}
            <div className="flex justify-center gap-2 mt-4">
              {videos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToVideo(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex 
                      ? 'bg-purple-500 w-8' 
                      : 'bg-white/40 hover:bg-white/60'
                  }`}
                  aria-label={`Ir al video ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
