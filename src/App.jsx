import './App.css';
import Header from './components/Header.jsx';
import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home.jsx'));
const RutaFormativa = lazy(() => import('./pages/RutaFormativa.jsx'));
const Profe = lazy(() => import('./pages/Profe.jsx'));
const Wilson = lazy(() => import('./pages/Wilson.jsx'));
const LaEscuelaDelEmprendedor = lazy(() => import('./pages/LaEscuelaDelEmprendedor.jsx'));

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-black text-white">
        <Header />
        <main>
          <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center">
              <div className="text-cyan-400 text-2xl">Cargando...</div>
            </div>
          }>
            <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route path="/ruta-formativa" element={<RutaFormativa />} /> */}
              <Route path="/el-profe" element={<Profe />} />
              <Route path="/wilson" element={<Wilson />} />
              <Route path="/la-escuela-del-emprendedor" element={<LaEscuelaDelEmprendedor />} />
            </Routes>
          </Suspense>
        </main>
        <footer className="py-8 text-center text-sm opacity-50">
          <p>© 2025 La Otra Política - Todos los derechos reservados</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
