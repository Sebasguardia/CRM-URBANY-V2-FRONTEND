// src/app/routes/AppRoutes.jsx
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '../../shared/components/Layout/MainLayout';
import ReportesPage from '../../features/reportes/pages/ReportesPage';

/**
 * Router principal de la aplicación - Versión temporal
 */
export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rutas de autenticación sin layout */}
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/auth/register" element={<RegisterPage />} />

        {/* Rutas principales con layout principal */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="actividades" element={<ActivitiesPage />} />
          <Route path="tasaciones" element={<ValuationsPage />} />
          <Route path="propiedades" element={<PropertiesPage />} />
          <Route path="propiedades/:id" element={<PropertyDetailPage />} />
          <Route path="negocios" element={<DealsPage />} />
          <Route path="negocios/:id" element={<DealDetailPage />} />
          <Route path="mensajes" element={<MessagesPage />} />
          <Route path="redes" element={<NetworkPage />} />
          <Route path="mapas" element={<MapsPage />} />
          <Route path="emprendimientos" element={<ProjectsPage />} />
          <Route path="contactos" element={<ContactsPage />} />
          <Route path="reportes" element={<ReportesPage />} />
          <Route path="comentarios" element={<FeedbackPage />} />
          <Route path="configuracion" element={<SettingsPage />} />
        </Route>

        {/* Redirect cualquier ruta no encontrada */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

// Componentes temporales básicos
function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <p>Página de login - En desarrollo</p>
      </div>
    </div>
  );
}

function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Registro</h1>
        <p>Página de registro - En desarrollo</p>
      </div>
    </div>
  );
}

function DashboardPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <p>Página principal del dashboard - En desarrollo</p>
    </div>
  );
}

function ActivitiesPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Actividades</h1>
      <p>Página de actividades - En desarrollo</p>
    </div>
  );
}

function ValuationsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Tasaciones</h1>
      <p>Página de tasaciones - En desarrollo</p>
    </div>
  );
}

function PropertiesPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Propiedades</h1>
      <p>Página de propiedades - En desarrollo</p>
    </div>
  );
}

function PropertyDetailPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Detalle de Propiedad</h1>
      <p>Detalle de propiedad - En desarrollo</p>
    </div>
  );
}

function DealsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Negocios</h1>
      <p>Página de negocios - En desarrollo</p>
    </div>
  );
}

function DealDetailPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Detalle de Negocio</h1>
      <p>Detalle de negocio - En desarrollo</p>
    </div>
  );
}

function MessagesPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Mensajes</h1>
      <p>Página de mensajes - En desarrollo</p>
    </div>
  );
}

function NetworkPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Redes</h1>
      <p>Página de redes - En desarrollo</p>
    </div>
  );
}

function MapsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Mapas</h1>
      <p>Página de mapas - En desarrollo</p>
    </div>
  );
}

function ProjectsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Emprendimientos</h1>
      <p>Página de emprendimientos - En desarrollo</p>
    </div>
  );
}

function ContactsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Contactos</h1>
      <p>Página de contactos - En desarrollo</p>
    </div>
  );
}

// (reemplazado por features/reportes/pages/ReportesPage)

function FeedbackPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Enviar Comentarios</h1>
      <p>Página de comentarios - En desarrollo</p>
    </div>
  );
}

function SettingsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Configuración</h1>
      <p>Página de configuración - En desarrollo</p>
    </div>
  );
}
