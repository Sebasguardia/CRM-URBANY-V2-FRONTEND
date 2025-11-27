import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '../../shared/components/Layout/MainLayout';
import AuthPage from '../../features/auth/pages/AuthPage/AuthPage';
import { ProtectedRoute } from '../../shared/components/RouteGuard/ProtectedRoute';
import { PublicRoute } from '../../shared/components/RouteGuard/PublicRoute';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/login" 
          element={
            <PublicRoute>
              <AuthPage />
            </PublicRoute>
          } 
        />
        <Route 
          path="/register" 
          element={
            <PublicRoute>
              <AuthPage />
            </PublicRoute>
          } 
        />

        <Route 
          path="/" 
          element={
            <ProtectedRoute>
              <MainLayout />
            </ProtectedRoute>
          }
        >
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
          <Route path="reportes" element={<ReportsPage />} />
          <Route path="comentarios" element={<FeedbackPage />} />
          <Route path="configuracion" element={<SettingsPage />} />
        </Route>

        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
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

function ReportsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Reportes</h1>
      <p>Página de reportes - En desarrollo</p>
    </div>
  );
}

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