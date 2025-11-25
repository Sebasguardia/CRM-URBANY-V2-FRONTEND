# 📚 DOCUMENTACIÓN DE ARQUITECTURA GLOBAL

**Proyecto:** CRM Inmobiliario  
**Última Actualización:** Noviembre 2025  
**Versión:** 1.0.0

## 📂 Estructura Global del Proyecto

Esta documentación describe todos los archivos compartidos y de configuración que están fuera de la carpeta `features/`. Cada desarrollador debe conocer estos archivos antes de crear nuevas funcionalidades.

```
src/
├─ app/                    # 🎛️ Configuración del framework
├─ shared/                 # 🔄 Código reutilizable
└─ features/               # 🚀 Módulos de negocio (no cubierto aquí)
```

---

## 🎛️ Carpeta app/ - Configuración del Framework

### 📁 app/routes/

#### AppRoutes.jsx

**Propósito:** Define todas las rutas públicas y protegidas de la aplicación. Es el único lugar donde se añaden o modifican rutas.

**Qué hace:**
- Agrupa rutas por layout (AuthLayout, MainLayout)
- Protege rutas privadas con RouteGuard
- Mapea URLs a componentes de features
- Maneja redirecciones

**Cuándo modificarlo:**

```jsx
// ✅ Agregando nueva sección "Tasaciones"
<Route path="valuations" element={
  <RouteGuard feature="valuations">
    <Valuations />
  </RouteGuard>
} />
```

**No hacer:**
- ❌ Importar lógica de negocio aquí
- ❌ Hacer fetch de datos
- ❌ Condicionar rutas basado en estado (eso lo hace RouteGuard)

#### AuthLayout.jsx

**Propósito:** Componente wrapper para páginas de autenticación (login, registro) sin Sidebar ni Topbar.

**Características:**
- Fondo gradiente
- Contenedor centrado
- Solo renderiza `<Outlet />` (el contenido de la ruta)
- Clases CSS Modules aisladas

**Uso:** Automático para rutas bajo `/auth/*`

#### MainLayout.jsx

**Propósito:** Estructura base para todas las vistas protegidas. Incluye:
- `<Sidebar />`
- `<Topbar />`
- Área de contenido con `<Outlet />`

**Responsive:**
- En móvil (<768px), el sidebar se oculta
- El contenido ocupa 100% del ancho

**No modificar:**
- ❌ Lógica de negocio
- ❌ Manejo de estado
- ✅ Solo layout y composición de componentes

---

### 📁 app/providers/

#### AuthProvider.jsx

**Propósito:** Gestiona toda la autenticación de la aplicación usando Context API + useReducer.

**Estado que maneja:**

```typescript
{
  user: User | null,
  token: string | null,
  isLoading: boolean,
  isAuthenticated: boolean
}
```

**Métodos:**
- `login(credentials)` → Promise<{success, error?}>
- `logout()` → void
- Auto-login con token en localStorage al iniciar app

**Hook de uso:**

```jsx
const { user, login, logout, isAuthenticated } = useAuth();

// ❌ NO consumir el contexto directamente
// ✅ SIEMPRE usar el hook useAuth()
```

#### ThemeProvider.jsx

**Propósito:** Toggle entre tema claro/oscuro con persistencia en localStorage.

**Hook de uso:**

```jsx
const { theme, toggleTheme, isDark } = useTheme();

// Aplica clases CSS basado en isDark
<div className={isDark ? 'dark-mode' : 'light-mode'}>
```

**Cómo funciona:**
- Guarda `data-theme` attribute en `<html>`
- Persiste preferencia en localStorage
- Proporciona valor inicial desde localStorage

#### QueryProvider.jsx

**Propósito:** Configura React Query/TanStack Query para toda la app.

**Configuración clave:**
- `staleTime: 5 minutos` → Datos considerados frescos
- `cacheTime: 10 minutos` → Tiempo en caché después de inactivo
- `retry: 1` → Reintento automático en error
- `refetchOnWindowFocus: false` → No recargar al volver a pestaña
- **DevTools:** Solo en desarrollo, acceso con React Query Devtools

**Uso en componentes:**

```jsx
import { useQuery } from '@tanstack/react-query';

const { data, isLoading, error } = useQuery({
  queryKey: ['deals'],
  queryFn: dealsService.getAll,
});
```

---

### 📁 app/store/

#### index.js

**Propósito:** Configura y exporta el store de Redux combinando todos los slices.

**Slices incluidos:**
- `deals` → Pipeline global
- `properties` → Inventario compartido
- `network` → Agentes/colaboradores
- `ui` → Estado de UI (modales, toasts, sidebar)

**Uso:**

```jsx
import { store } from '../../../app/store';
import { Provider } from 'react-redux';

// En tu componente:
const deals = useSelector(state => state.deals.items);
const dispatch = useDispatch();
```

**No modificar:**
- ❌ Agregar lógica de negocio aquí
- ✅ Solo configuración de Redux

#### deals.slice.js

**Propósito:** Estado global para el pipeline de deals (compartido entre Dashboard, DealList, etc.)

**Estado inicial:**

```typescript
{
  items: Deal[],
  selectedDeal: Deal | null,
  filters: { stage, agent, dateRange },
  loading: boolean,
  error: string | null
}
```

**Acciones principales:**
- `fetchDeals()` → Thunk para cargar deals
- `setSelectedDeal(deal)` → Seleccionar deal activo
- `setFilters(filters)` → Aplicar filtros globales
- `updateDealStage({dealId, newStage})` → Mover deal en pipeline

**Uso en componente:**

```jsx
const dispatch = useDispatch();

// Cargar deals
useEffect(() => {
  dispatch(fetchDeals({ status: 'active' }));
}, []);

// Filtrar
dispatch(setFilters({ stage: 'prospect' }));

// Actualizar stage
dispatch(updateDealStage({ dealId: '123', newStage: 'qualified' }));
```

#### properties.slice.js

**Propósito:** Inventario global de propiedades accesible desde cualquier feature.

**Estado inicial:**

```typescript
{
  items: Property[],
  selectedProperty: Property | null,
  total: number,
  loading: boolean,
  error: string | null
}
```

**Acciones:**
- `fetchProperties()` → Cargar inventario
- `setSelectedProperty(property)`
- `updatePropertyStatus({propertyId, status})`

**Relación con deals:** Cuando cambia el estado de una propiedad, este slice se actualiza y todos los componentes que lo usan se re-renderizan automáticamente.

#### network.slice.js

**Propósito:** Gestiona agentes y colaboradores del equipo.

**Estado:**

```typescript
{
  agents: Agent[],
  selectedAgent: Agent | null,
  loading: boolean,
  error: string | null
}
```

**Acción principal:**
- `fetchAgents()` → Cargar equipo

**Uso:** En la sección de Network y para asignar deals a agentes.

#### ui.slice.js

**Propósito:** Estado global de UI transversal (modales, toasts, loaders, sidebar).

**Estado:**

```typescript
{
  modals: { deal: { isOpen, data }, property: {...}, contact: {...} },
  toasts: Toast[],
  isLoading: boolean,
  sidebar: { isCollapsed, activeItem: string }
}
```

**Acciones clave:**
- `openModal({modalType, data})`
- `closeModal({modalType})`
- `addToast({message, type, duration})`
- `setLoading(boolean)`
- `toggleSidebar()`

**Uso:**

```jsx
// Abrir modal
dispatch(openModal({ modalType: 'deal', data: deal }));

// Mostrar toast
dispatch(addToast({ message: 'Deal guardado', type: 'success' }));

// Toggle sidebar
dispatch(toggleSidebar());
```

---

### 📁 app/config/

#### navigation.js

**Propósito:** Define items del sidebar con iconos de Lucide React, roles y feature flags.

**Qué exporta:**
- `navigationItems`: Array de items estáticos
- `getNavigationByRole(userRole, features)`: Función filtradora

**Estructura de item:**

```typescript
{
  id: string,
  label: string,
  path: string,
  icon: LucideIcon,
  roles: USER_ROLE[],
  featureFlag: FEATURE_FLAGS,
  badge?: { type: 'count', value: string }
}
```

**Modo de uso:**

```jsx
import { getNavigationByRole } from '../../../app/config/navigation';

const items = getNavigationByRole(user.role, features);
// items ya viene filtrado por rol y feature flags
```

**Iconos disponibles:** Todos los de lucide-react (LayoutDashboard, Kanban, Building2, Calendar, Users, Building, Calculator, Map, Network, BarChart3, Settings)

#### permissions.js

**Propósito:** Define qué roles pueden hacer qué acciones (ACL - Access Control List).

**Constantes:**

```javascript
PERMISSIONS.DEALS_VIEW
PERMISSIONS.DEALS_CREATE
PERMISSIONS.DEALS_EDIT
PERMISSIONS.DEALS_DELETE
PERMISSIONS.DEALS_MOVE_STAGE
// ... y así para cada feature
```

**Funciones:**
- `hasPermission(userRole, permissionKey)` → boolean
- `hasAllPermissions(userRole, [permission1, permission2])` → boolean
- `hasAnyPermission(userRole, [permission1, permission2])` → boolean

**Uso en componentes:**

```jsx
import { hasPermission } from '../../../app/config/permissions';
import { USER_ROLES } from '../../../shared/constants/userRoles';

const canEdit = hasPermission(user.role, 'DEALS_EDIT');
// or
const canEdit = usePermissions('DEALS_EDIT'); // Si usas el hook

{canEdit && <Button onClick={handleEdit}>Editar</Button>}
```

**IMPORTANTE:** Nunca hardcodear permisos en componentes. Siempre usar estas funciones.

#### api.config.js

**Propósito:** Configuración centralizada de endpoints y modo mock.

**Exporta:**
- `USE_MOCK`: Booleano que activa/desactiva modo mock
- `API_CONFIG`: URLs y headers
- `ENDPOINTS`: Todas las rutas de la API por feature
- `simulateDelay(ms)`: Helper para simular red
- `isMockMode()`: Verifica si está en mock

**Modo mock:**

```bash
# Por defecto: true (usa mocks)
# Para usar backend real:
REACT_APP_USE_MOCK=false npm run dev
```

**Uso en servicios:**

```jsx
import { ENDPOINTS, isMockMode } from '../../../app/config/api.config';

if (isMockMode()) {
  // Usar mocks
} else {
  // Usar axios real
}
```

#### featureFlags.js

**Propósito:** Habilitar/deshabilitar módulos sin necesidad de deploy.

**Ejemplos:**

```javascript
FEATURE_FLAGS.PROJECTS: process.env.NODE_ENV === 'development' // Solo en dev
FEATURE_FLAGS.REPORTS: false // Deshabilitado temporalmente
```

**Función:**
- `isFeatureEnabled(featureKey)` → boolean
- `getFeatureFlags()` → Objeto completo

**Uso en componentes:**

```jsx
import { isFeatureEnabled } from '../../../app/config/featureFlags';

{isFeatureEnabled('projects') && <NavItem Projects />}
```

**En rutas:**

```jsx
<RouteGuard feature="projects">
  <Projects />
</RouteGuard>
```

---

## 🔄 Carpeta shared/ - Código Reutilizable

### 📁 shared/components/UI/

**Regla de oro:** Estos componentes NO deben conocer lógica de negocio. Son 100% genéricos.

**Cada componente tiene:**
- `Component.jsx` → Lógica del componente
- `Component.module.css` → Estilos CSS Modules
- Props tipadas con PropTypes

**Lista completa:**

| Componente | Propósito | Props principales |
|------------|-----------|-------------------|
| Button | Botones con variantes | variant, size, loading, icon |
| Input | Campo de texto | type, label, error, disabled, icon |
| Select | Dropdown | options, placeholder, multi, searchable |
| Textarea | Área de texto | rows, maxLength, resize |
| Checkbox | Checkbox individual/grupo | checked, onChange, label |
| Radio | Radio buttons | options, value, onChange |
| Toggle | Switch on/off | checked, onToggle |
| Card | Contenedor con sombra | title, actions, padding |
| Table | Tabla con sorting | columns, data, onRowClick, sortable |
| Search | Input de búsqueda | placeholder, onSearch, debounce |
| Pagination | Paginación | current, total, pageSize, onChange |
| Modal | Ventana modal | isOpen, onClose, title, size |
| Badge | Etiqueta de estado | variant, children |
| Avatar | Avatar con iniciales | src, name, size |
| Breadcrumb | Navegación de migas | items, separator |
| Dropdown | Menú desplegable | trigger, items, align |
| FileUpload | Subida de archivos | accept, multiple, maxSize, onUpload |
| ProgressBar | Barra de progreso | value, max, color |
| Tag | Tag removible | label, onRemove, variant |
| Tooltip | Tooltip hover | content, position, trigger |
| DatePicker | Selector de fecha/rango | value, onChange, range, min, max |
| StatusIndicator | Indicador con color | status, label, pulse |

**Ejemplo de uso:**

```jsx
import Button from '../../../../shared/components/UI/Button/Button';
import Input from '../../../../shared/components/UI/Input/Input';
import { Calendar } from 'lucide-react';

<Button 
  variant="primary" 
  size="md"
  icon={<Calendar size={16} />}
  onClick={handleSave}
  loading={isSaving}
>
  Guardar Deal
</Button>

<Input
  label="Nombre del cliente"
  value={name}
  onChange={setName}
  error={errors.name}
  placeholder="Juan Pérez"
/>
```

**NO hacer:**
- ❌ Importar hooks de features
- ❌ Hacer fetch de API
- ❌ Hardcodear textos de negocio

---

### 📁 shared/components/Layout/

#### Sidebar.jsx

**Propósito:** Renderiza el menú lateral con items filtrados por rol.

**Qué usa:**
- `getNavigationByRole()` → Filtra items
- `toggleSidebar()` → Colapsa/expande
- Iconos de Lucide React desde cada item

**Estado:** Conectado a `ui.slice.js` para saber si está colapsado y el item activo.

**Uso en MainLayout.jsx:** Ya está integrado, no necesitas tocarlo.

#### Topbar.jsx

**Propósito:** Barra superior con:
- Breadcrumb de navegación
- Notificaciones
- User menu (perfil, logout)
- Toggle de tema oscuro

**Estado:** Recibe `user` como prop desde MainLayout.

**Extensión:** Si necesitas añadir algo (ej: selector de idioma), modifica este componente.

#### ResponsiveContainer.jsx

**Propósito:** Wrapper que aplica padding y responsive breakpoints consistentes.

**Props:**
- `size`: 'sm' | 'md' | 'lg' | 'xl' | 'full'
- `className`: Clases adicionales

**Uso:**

```jsx
import ResponsiveContainer from '../../../../shared/components/Layout/ResponsiveContainer/ResponsiveContainer';

<ResponsiveContainer size="lg">
  <DealForm />
</ResponsiveContainer>
```

---

### 📁 shared/components/Feedback/

#### Loader.jsx

**Propósito:** Spinner/Loader global y por sección.

**Props:**
- `size`: 'sm' | 'md' | 'lg'
- `text`: Mensaje opcional
- `overlay`: Booleano para superponer sobre contenido

**Uso:**

```jsx
import Loader from '../../../../shared/components/Feedback/Loader/Loader';

{isLoading && <Loader size="lg" text="Cargando deals..." overlay />}
```

#### Toast.jsx

**Propósito:** Notificaciones temporales que aparecen en la esquina superior derecha.

**No usar directamente. Usa el hook:**

```jsx
import { useToast } from '../../../../shared/hooks/useToast';

const { showToast } = useToast();

showToast({ message: '¡Deal creado!', type: 'success' });
// Types: 'success' | 'error' | 'warning' | 'info'
```

**Estado:** Manejado por `ui.slice.js` (addToast, removeToast)

#### ErrorBoundary.jsx

**Propósito:** Captura errores en runtime y muestra UI amigable en lugar de crash.

**Uso:** Envuelve componentes que podrían fallar:

```jsx
import ErrorBoundary from '../../../../shared/components/Feedback/ErrorBoundary/ErrorBoundary';

<ErrorBoundary fallback={<p>Hubo un error cargando deals</p>}>
  <DealList />
</ErrorBoundary>
```

**En desarrollo:** Muestra stack trace. **En producción:** UI limpia.

#### EmptyState.jsx

**Propósito:** Muestra mensaje cuando no hay datos con ícono y CTA.

**Props:**
- `icon`: Componente de ícono
- `title`: Mensaje principal
- `description`: Texto secundario
- `action`: Botón opcional

**Uso:**

```jsx
import { Inbox } from 'lucide-react';
import EmptyState from '../../../../shared/components/Feedback/EmptyState/EmptyState';

{deals.length === 0 && (
  <EmptyState
    icon={<Inbox size={48} />}
    title="No hay deals"
    description="Crea tu primer deal para comenzar"
    action={<Button onClick={handleCreate}>Nuevo Deal</Button>}
  />
)}
```

---

### 📁 shared/hooks/

#### useModal.js

**Propósito:** Abrir y cerrar modales desde cualquier componente sin prop drilling.

**Uso:**

```jsx
import { useModal } from '../../../../shared/hooks/useModal';

const { openModal, closeModal } = useModal();

// Abrir modal de deal
openModal({ 
  modalType: 'deal', 
  data: { mode: 'create' } 
});

// Cerrar
closeModal({ modalType: 'deal' });
```

**Estado:** Manejado por `ui.slice.js`

#### useToast.js

**Uso:**

```jsx
const { showToast } = useToast();

showToast({ 
  message: 'Deal actualizado', 
  type: 'success',
  duration: 3000 
});
```

#### usePermissions.js

**Propósito:** Hook conveniente para verificar permisos.

**Uso:**

```jsx
const canCreateDeal = usePermissions('DEALS_CREATE');
// Retorna booleano

{canCreateDeal && <Button>Crear Deal</Button>}
```

**Internamente usa:** `hasPermission()` de `app/config/permissions.js`

#### useDebounce.js

**Uso:**

```jsx
const [search, setSearch] = useState('');
const debouncedSearch = useDebounce(search, 300);

useEffect(() => {
  // Se ejecuta 300ms después de que el usuario deje de escribir
  handleSearch(debouncedSearch);
}, [debouncedSearch]);
```

#### usePagination.js

**Propósito:** Maneja estado de páginas, items por página, y total.

**Uso:**

```jsx
const {
  page,
  setPage,
  pageSize,
  setPageSize,
  totalPages,
  sliceData
} = usePagination({ 
  initialPage: 1, 
  pageSize: 10,
  totalItems: deals.length 
});

const pagedDeals = sliceData(deals); // Devuelve solo items de la página actual
```

#### useSearch.js

**Propósito:** Búsqueda con filtros integrados.

**Uso:**

```jsx
const { search, results, setSearch, filters, setFilters } = useSearch({
  data: deals,
  keys: ['title', 'client.name'], // Qué campos buscar
  filters: { stage: 'prospect' }
});
```

#### useOutsideClick.js

**Uso:** Cerrar dropdowns/modales al hacer click fuera.

```jsx
const ref = useRef();
useOutsideClick(ref, () => setIsOpen(false));

<div ref={ref}>
  <Dropdown />
</div>
```

#### useLocalStorage.js

**Uso:**

```jsx
const [theme, setTheme] = useLocalStorage('theme', 'light');
// Persiste automáticamente en localStorage
```

---

### 📁 shared/utils/

**Principio:** Funciones puras, sin side effects. Testeables unitariamente.

#### formatters.js

**Funciones:**
- `formatCurrency(amount, currency = 'CLP')` → "$1.234.567"
- `formatDate(date, format = 'DD-MM-YYYY')` → "15-11-2025"
- `formatPhone(phone)` → "+56 9 1234 5678"
- `formatFileSize(bytes)` → "1.2 MB"

**Uso:**

```jsx
import { formatCurrency } from '../../../../shared/utils/formatters';

<span>{formatCurrency(deal.value)}</span>
```

#### validators.js

**Funciones:**
- `validateEmail(email)` → boolean
- `validateRUT(rut)` → boolean (valida dígito verificador chileno)
- `validatePhone(phone)` → boolean
- `isValidUrl(url)` → boolean
- `required(value)` → boolean

**Uso:**

```jsx
import { validateEmail, required } from '../../../../shared/utils/validators';

const errors = {
  email: !validateEmail(form.email) ? 'Email inválido' : null,
  name: !required(form.name) ? 'Campo obligatorio' : null,
};
```

#### mappers.js

**Propósito:** Convertir datos entre formatos (API ↔ Formulario ↔ UI).

**Funciones:**
- `mapApiToDeal(apiDeal)` → Formato normalizado para UI
- `mapFormToDeal(formData)` → Formato para enviar a API
- `mapContactToDeal(contact)` → Convertir lead a deal
- `mapProjectToProperties(project)` → Generar unidades desde proyecto

**Uso:**

```jsx
const dealForAPI = mapFormToDeal(formData);
await dealsService.create(dealForAPI);

const dealForUI = mapApiToDeal(apiResponse);
dispatch(setSelectedDeal(dealForUI));
```

**Por qué es importante:** Aísla cambios en el contrato de la API. Si el backend cambia, solo actualizas los mappers, no todos los componentes.

#### dateHelpers.js

**Funciones:**
- `addDays(date, days)` → Date
- `isToday(date)` → boolean
- `isPast(date)` → boolean
- `formatDateRange(start, end)` → "15 Nov - 20 Nov"
- `getDaysDifference(date1, date2)` → number

**Uso:**

```jsx
import { isToday } from '../../../../shared/utils/dateHelpers';

{isToday(activity.date) && <Badge>Hoy</Badge>}
```

#### stringHelpers.js

**Funciones:**
- `capitalize(str)` → "hola" → "Hola"
- `truncate(str, length)` → Limita caracteres
- `slugify(str)` → Convierte a URL slug
- `generateId()` → Genera ID único corto

#### fileHelpers.js

**Funciones:**
- `validateFile(file, options)` → {valid, error}
- `formatFileSize(bytes)`
- `getFileExtension(filename)`

**Uso:**

```jsx
const { valid, error } = validateFile(file, { 
  maxSize: 5 * 1024 * 1024, // 5MB
  accept: ['image/jpeg', 'image/png']
});
```

#### paginationHelpers.js

**Funciones:**
- `calculateTotalPages(total, pageSize)` → number
- `getPageItems(data, page, pageSize)` → Array
- `generatePaginationArray(current, total)` → [1, '...', 4, 5, 6, '...', 10]

---

### 📁 shared/constants/

| Archivo | Contenido | Ejemplo de uso |
|---------|-----------|----------------|
| activityTypes.js | ['call', 'visit', 'email', 'meeting'] | Select options |
| propertyTypes.js | { apartment, house, land } | Badges/filtros |
| dealStages.js | { prospect, qualified, ... } | Pipeline kanban |
| amenityList.js | ['pool', 'garage', 'garden'] | Checkbox group |
| originSources.js | ['web', 'referral', 'call'] | Track de origen |
| statusColors.js | Mapeo status → color | Badge colors |
| navItems.js | DEPRECATED → Usar navigation.js | - |
| userRoles.js | ADMIN, AGENT, MANAGER | Permisos, navegación |
| featureFlags.constants.js | Keys de features | Condicionales |

**Importar siempre:**

```jsx
import { USER_ROLES } from '../../../../shared/constants/userRoles';
import { FEATURE_FLAGS } from '../../../../shared/constants/featureFlags.constants';
```

**NO hardcodear strings:** ❌ 'admin' ✅ `USER_ROLES.ADMIN`

---

### 📁 shared/mocks/

**Propósito:** Datos realistas para desarrollo sin backend.

| Archivo | Cantidad | Uso |
|---------|----------|-----|
| deals.mock.js | 50+ deals | Pipeline, dashboard |
| properties.mock.js | 100+ propiedades | Inventario, mapas |
| contacts.mock.js | 200+ contactos | CRM, conversión a deal |
| activities.mock.js | 300+ actividades | Timeline, calendario |
| valuations.mock.js | 30+ tasaciones | Flujo de tasación |
| projects.mock.js | 10+ proyectos | Gestión de proyectos |
| users.mock.js | 20+ usuarios | Auth, network |
| network.mock.js | 15+ agentes | Red de agentes |
| notifications.mock.js | Notificaciones | Topbar |
| index.js | Export centralizado | import { mockDeals } from '../../../shared/mocks' |

**Estructura de cada mock:**

```javascript
export const mockDeals = [
  {
    id: '1',
    title: 'Venta Casa La Dehesa',
    client: { name: 'Juan Pérez', email: 'juan@example.com' },
    stage: 'prospect',
    value: 250000000,
    agent: { id: 'agent1', name: 'María González' },
    createdAt: '2025-11-01T10:00:00Z',
  },
  // ... más items
];
```

**Integración con servicios:** Los servicios usan estos mocks automáticamente cuando `USE_MOCK=true`.

---

## 🎯 Guía Rápida para Desarrolladores

### Flujo de Trabajo Típico

1. **Nuevo feature:**
   ```bash
   cd src/features
   npm run generate:feature nombre-feature
   ```

2. **Usar componente UI:**
   ```jsx
   import Button from '../../../../shared/components/UI/Button/Button';
   ```

3. **Verificar permisos:**
   ```jsx
   const canView = usePermissions('FEATURE_VIEW');
   ```

4. **Mostrar datos:**
   ```jsx
   import { useQuery } from '@tanstack/react-query';

   const { data, isLoading } = useQuery({
     queryKey: ['deals'],
     queryFn: dealsService.getAll
   });
   ```

5. **Notificar al usuario:**
   ```jsx
   const { showToast } = useToast();
   showToast({ message: 'Éxito', type: 'success' });
   ```

6. **Abrir modal:**
   ```jsx
   const { openModal } = useModal();
   openModal({ modalType: 'deal', data: { mode: 'create' } });
   ```

---

## ⚠️ Reglas de Oro

| ❌ NO HAGAS | ✅ HAZ ESTO |
|-------------|-------------|
| Importar entre features | Mover componente a shared/ |
| Hacer fetch directo desde componente | Crear service en features/X/services/ |
| Hardcodear permisos | Usar hasPermission() o usePermissions() |
| Crear componente UI en feature | Usar/extender shared/components/UI/ |
| Modificar app/store para feature | Usar useState o useReducer local |
| Hardcodear URLs de API | Usar ENDPOINTS de api.config.js |
| Copiar lógica de validación | Usar validators.js |
| Crear tu propio componente de tabla | Extender shared/components/UI/Table |

---

## 🔧 Configuración de Entorno

**Archivo .env recomendado:**

```bash
# Modo desarrollo
NODE_ENV=development
REACT_APP_USE_MOCK=true
REACT_APP_API_URL=http://localhost:3001/api

# Si usas backend real
# REACT_APP_USE_MOCK=false
# REACT_APP_API_URL=https://api.tudominio.com
```

---

## 📞 Recursos y Soporte

- **React Query:** https://tanstack.com/query/latest
- **Redux Toolkit:** https://redux-toolkit.js.org
- **Lucide React:** https://lucide.dev
- **Dudas:** Revisar APP_ARCHITECTURE.md completo
- **Mantenedor:** Equipo Frontend Core
- **Slack:** #frontend-crm
- **PRs:** Requerir revisión de al menos 2 desarrolladores antes de mergear cambios en app/ o shared/

---

## 📋 Checklist de Integración

Antes de comenzar a desarrollar, asegúrate de:

- [ ] Leer esta documentación completa
- [ ] Configurar tu archivo `.env` correctamente
- [ ] Conocer la estructura de `app/` y `shared/`
- [ ] Entender el sistema de permisos
- [ ] Familiarizarte con los componentes UI disponibles
- [ ] Revisar los mocks disponibles
- [ ] Conocer los hooks compartidos
- [ ] Entender el flujo de Redux para estado global

---

## 🚀 Próximos Pasos

Una vez que domines esta arquitectura global:

1. Revisa la documentación específica de cada feature en `features/[nombre-feature]/README.md`
2. Explora los ejemplos de implementación en los features existentes
3. Consulta las guías de estilo y convenciones de código
4. Participa en las revisiones de código para aprender mejores prácticas

---

## 📝 Notas Finales

Esta arquitectura está diseñada para:
- ✅ Escalabilidad
- ✅ Mantenibilidad
- ✅ Reusabilidad
- ✅ Separación de responsabilidades
- ✅ Facilitar el trabajo en equipo

**Recuerda:** Si algo no está claro o encuentras oportunidades de mejora, no dudes en proponer cambios al equipo. Esta documentación es un documento vivo que evoluciona con el proyecto.

---

**¡Bienvenido al equipo de desarrollo del CRM Inmobiliario!** 🏠✨