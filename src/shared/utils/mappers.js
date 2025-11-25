// Mapeo de API a UI (camelCase)
export const mapPropertyApiToUI = (property) => ({
  id: property.id,
  title: property.titulo,
  type: property.tipo,
  price: property.precio,
  currency: property.moneda,
  address: {
    street: property.calle,
    number: property.numero,
    city: property.ciudad,
    state: property.provincia,
    zipCode: property.codigoPostal
  },
  bedrooms: property.dormitorios,
  bathrooms: property.banos,
  parking: property.garajes,
  area: property.superficie,
  description: property.descripcion,
  status: property.estado,
  agent: {
    id: property.agenteId,
    name: property.agenteNombre
  },
  images: property.imagenes || [],
  features: property.caracteristicas || [],
  createdAt: property.fechaCreacion,
  updatedAt: property.fechaActualizacion
});

// Mapeo de UI a API (snake_case)
export const mapPropertyUIToApi = (property) => ({
  titulo: property.title,
  tipo: property.type,
  precio: property.price,
  moneda: property.currency,
  calle: property.address?.street,
  numero: property.address?.number,
  ciudad: property.address?.city,
  provincia: property.address?.state,
  codigo_postal: property.address?.zipCode,
  dormitorios: property.bedrooms,
  banos: property.bathrooms,
  garajes: property.parking,
  superficie: property.area,
  descripcion: property.description,
  estado: property.status,
  agente_id: property.agent?.id,
  imagenes: property.images,
  caracteristicas: property.features
});

// Mapeo de Deal
export const mapDealApiToUI = (deal) => ({
  id: deal.id,
  title: deal.titulo,
  contact: {
    id: deal.contactoId,
    name: deal.contactoNombre,
    email: deal.contactoEmail,
    phone: deal.contactoTelefono
  },
  property: deal.propiedadId ? {
    id: deal.propiedadId,
    title: deal.propiedadTitulo
  } : null,
  stage: deal.etapa,
  value: deal.valor,
  commission: deal.comision,
  agent: {
    id: deal.agenteId,
    name: deal.agenteNombre
  },
  activities: deal.actividades || [],
  createdAt: deal.fechaCreacion,
  updatedAt: deal.fechaActualizacion
});

// Mapeo de Activity
export const mapActivityApiToUI = (activity) => ({
  id: activity.id,
  title: activity.titulo,
  type: activity.tipo,
  date: activity.fecha,
  duration: activity.duracion,
  notes: activity.notas,
  deal: activity.negocioId ? {
    id: activity.negocioId,
    title: activity.negocioTitulo
  } : null,
  property: activity.propiedadId ? {
    id: activity.propiedadId,
    title: activity.propiedadTitulo
  } : null,
  agent: {
    id: activity.agenteId,
    name: activity.agenteNombre
  },
  completed: activity.completada
});

// Mapeo de Contact
export const mapContactApiToUI = (contact) => ({
  id: contact.id,
  name: contact.nombre,
  email: contact.email,
  phone: contact.telefono,
  source: contact.origen,
  status: contact.estado,
  createdAt: contact.fechaCreacion,
  lastActivity: contact.ultimaActividad
});