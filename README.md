# 🇨🇴 La Otra Política

Plataforma educativa para la formación de liderazgos políticos transparentes en Colombia. Un espacio donde se aprende gestión pública, derecho electoral y marketing político sin depender de maquinarias ni favores.

## 🎯 Acerca del Proyecto

**La Otra Política** es una iniciativa del Profe Charles, abogado y docente especializado en Derecho Administrativo, con más de 15 años acercando el conocimiento jurídico de manera simple y entretenida a más de 155.000 personas en Colombia.

### ✨ Características

- 🎓 Ruta formativa estructurada con 5 módulos educativos
- 📱 Diseño completamente responsive (mobile-first)
- ⚡ Interfaz moderna con efectos glass y animaciones suaves
- 🎬 Integración de playlists de YouTube para contenido educativo
- 🌐 SPA (Single Page Application) con navegación fluida

## 🛠️ Stack Tecnológico

- **React** 19.2.0 - Biblioteca UI
- **Vite** 7.2.2 - Build tool y dev server
- **React Router DOM** 6.28.0 - Routing
- **Tailwind CSS** v4 - Estilos utility-first
- **Express** 5.1.0 - Servidor de producción
- **Node.js** 20.x - Runtime

## 🚀 Inicio Rápido

### Prerrequisitos

- Node.js 20.x o superior
- npm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/elderechoparatodos/web-la-otra-politica.git

# Entrar al directorio
cd web-laOtraPolitica

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

El sitio estará disponible en `http://localhost:5173`

## 📜 Scripts Disponibles

```bash
npm run dev      # Inicia servidor de desarrollo
npm run build    # Construye para producción
npm start        # Inicia servidor de producción
npm run lint     # Ejecuta linter ESLint
npm run preview  # Preview del build de producción
```

## 📁 Estructura del Proyecto

```
web-laOtraPolitica/
├── public/              # Archivos estáticos (imágenes, logos)
├── src/
│   ├── components/      # Componentes reutilizables
│   │   ├── Header.jsx
│   │   ├── TypewriterText.jsx
│   │   └── ModuleCard.jsx
│   ├── pages/          # Páginas principales
│   │   ├── Home.jsx
│   │   ├── RutaFormativa.jsx
│   │   └── Profe.jsx
│   ├── App.jsx         # Configuración de rutas
│   ├── App.css         # Estilos globales
│   └── main.jsx        # Punto de entrada
├── server.js           # Servidor Express para producción
├── railway.json        # Configuración Railway
└── nixpacks.toml       # Runtime configuration
```

## 🎨 Páginas

### 🏠 Home
Landing page con hero animado, propuesta de valor y CTAs.

### 📚 Ruta Formativa
5 módulos educativos con playlists de YouTube:
1. Gestión Pública
2. Estructuras de Poder
3. Liderazgo y Comunicación
4. Derecho Electoral
5. Marketing Político

### 👨‍🏫 El Profe
Biografía y trayectoria del Profe Charles.

## 🚂 Despliegue en Railway

El proyecto está configurado para despliegue automático en Railway:

1. Conecta tu repositorio de GitHub a Railway
2. Railway detectará automáticamente la configuración
3. Se construirá con `npm run build`
4. Se iniciará con `npm start`

Ver `RAILWAY_DEPLOYMENT.md` para más detalles.

## 🎨 Características de Diseño

- **Glass Effect**: Cards con efecto glassmorphism
- **Gradientes Dinámicos**: Fondos radiales y lineales personalizados
- **Animaciones**: Float, typewriter, bounce
- **Máscaras CSS**: Desvanecimiento gradual en imágenes
- **Responsive**: Breakpoints optimizados para mobile, tablet y desktop

## 📱 Contacto

- 🌐 Web: [La Otra Política](https://la-otra-politica.up.railway.app)
- 💬 WhatsApp: [Grupo de estudio](https://chat.whatsapp.com/BBFCj2fxlSf8NOWvaOffZR)
- 📱 Redes: @elderechoparatodos

## 📄 Licencia

Este proyecto es de código privado. Todos los derechos reservados © 2025 La Otra Política.

---

**Hecho con 💜 para transformar la política en Colombia**
