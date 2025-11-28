import { Routes, Route, Navigate } from 'react-router-dom';

import AutomationPage from '../../features/perfil/automatizacion/pages/AutomationPage';
import AppRoutes from './AppRoutes';

/**
 * Router para las secciones del perfil
 */
export default function ProfileRoutes() {
    return (
        <Routes>
            
                <Route path="miperfil" element={<MiPerfil />} />
                <Route path="perfil-inmobiliaria" element={<RealEstatePage />} />
                <Route path="integraciones" element={<IntegrationsPage />} />
                <Route path="gestion-usuarios" element={<ManagementPage />} />
                <Route path="automatizacion" element={<AutomationPage />} />
                <Route path="optimizaciones" element={<OptimizationsPage />} />

                <Route path="blog" element={<BlogPage />} />
                <Route path="ayuda" element={<HelpPage />} />
                <Route path="/perfil" element={<AppRoutes />} />
            
        </Routes>
    );
}

// Componentes temporales para las secciones del perfil
function HelpPage() {
    return (
        <div>
            <h2 className="text-xl font-bold mb-4">Ayuda</h2>
            <p>Centro de ayuda - En desarrollo</p>
        </div>
    );
}

function BlogPage() {
    return (
        <div>
            <h2 className="text-xl font-bold mb-4">Blog</h2>
            <p>Gestión del blog - En desarrollo</p>
        </div>
    );
}

function ManagementPage() {
    return (
        <div>
            <h2 className="text-xl font-bold mb-4">Gestión de Usuarios</h2>
            <p>Gestión de usuarios y permisos - En desarrollo</p>
        </div>
    );
}

function RealEstatePage() {
    return (
        <div>
            <h2 className="text-xl font-bold mb-4">Perfil de la Inmobiliaria</h2>
            <p>Configuración de la inmobiliaria - En desarrollo</p>
        </div>
    );
}

function IntegrationsPage() {
    return (
        <div>
            <h2 className="text-xl font-bold mb-4">Integraciones</h2>
            <p>Gestión de integraciones - En desarrollo</p>
        </div>
    );
}

function OptimizationsPage() {
    return (
        <div>
            <h2 className="text-xl font-bold mb-4">Optimizaciones</h2>
            <p>Optimizaciones del sistema - En desarrollo</p>
        </div>
    );
}

function MiPerfil() {
    return (
        <div>
            <h2 className="text-xl font-bold mb-4">Mi Perfil</h2>
            <p>Configuración de mi perfil - En desarrollo</p>
        </div>
    );
}
