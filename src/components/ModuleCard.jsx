export default function ModuleCard({ title, playlist, gradient, darkTitle }) {
  // devuelve true si el color es "claro"
  const hexToLuminance = (hex) => {
    // normaliza '#abc' -> '#aabbcc'
    let h = hex.replace('#', '');
    if (h.length === 3) h = h.split('').map(c => c + c).join('');
    const r = parseInt(h.slice(0, 2), 16) / 255;
    const g = parseInt(h.slice(2, 4), 16) / 255;
    const b = parseInt(h.slice(4, 6), 16) / 255;
    // convertir a espacio lineal
    const toLin = (c) => (c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4));
    const R = toLin(r), G = toLin(g), B = toLin(b);
    // luminancia según WCAG
    return 0.2126 * R + 0.7152 * G + 0.0722 * B;
  };

  const parseHexesFromGradient = (g) => {
    if (!g || typeof g !== 'string') return [];
    // regex para hex (#fff o #ffffff)
    const matches = Array.from(g.matchAll(/#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})\b/g));
    return matches.map(m => '#' + m[1]);
  };

  // decide si usamos texto oscuro (true) o claro (false)
  const shouldUseDarkText = (() => {
    // si el dev pasa explícitamente darkTitle -> significa "título oscuro"
    if (typeof darkTitle === 'boolean') return darkTitle;
    // auto-detección: si no hay gradient o no hay hex, fallback a texto claro
    const hexes = parseHexesFromGradient(gradient);
    if (hexes.length === 0) return false; // por defecto texto claro (blanco)
    // calculamos luminancia promedio y comparamos con umbral (0.5 aproximado en escala lineal)
    const luminances = hexes.map(hexToLuminance);
    const avg = luminances.reduce((s, v) => s + v, 0) / luminances.length;
    // si luminancia alta -> fondo claro -> usar texto oscuro
    return avg > 0.5;
  })();

  const titleClass = shouldUseDarkText ? 'text-slate-900' : 'text-white';

  return (
    <div
      className="module-card rounded-lg overflow-hidden shadow-lg"
      style={gradient ? { background: gradient } : undefined}
    >
      <h3 className={`text-xl md:text-2xl font-bold mb-3 ${titleClass}`}>{title}</h3>

      <div className="video-container mt-4 aspect-video w-full">
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/videoseries?list=${playlist}`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
          className="rounded-lg"
        ></iframe>
      </div>
    </div>
  );
}
