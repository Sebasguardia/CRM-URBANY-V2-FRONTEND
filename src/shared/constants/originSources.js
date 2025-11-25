export const ORIGIN_SOURCES = [
  { value: 'facebook', label: 'Facebook', category: 'digital' },
  { value: 'instagram', label: 'Instagram', category: 'digital' },
  { value: 'google', label: 'Google', category: 'digital' },
  { value: 'zonaprop', label: 'Zonaprop', category: 'portal' },
  { value: 'argenprop', label: 'Argenprop', category: 'portal' },
  { value: 'properati', label: 'Properati', category: 'portal' },
  { value: 'goplaceit', label: 'GoPlaceIt', category: 'portal' },
  { value: 'inmuebles', label: 'Inmuebles', category: 'portal' },
  { value: 'mercadolibre', label: 'Mercado Libre', category: 'portal' },
  { value: 'web', label: 'Sitio Web', category: 'digital' },
  { value: 'landing', label: 'Landing Page', category: 'digital' },
  { value: 'referido', label: 'Referido', category: 'offline' },
  { value: 'cartel', label: 'Cartel', category: 'offline' },
  { value: 'presencial', label: 'Presencial', category: 'offline' },
  { value: 'llamada', label: 'Llamada Entrante', category: 'offline' },
  { value: 'email', label: 'Email Directo', category: 'offline' },
  { value: 'whatsapp', label: 'WhatsApp', category: 'offline' },
  { value: 'otro', label: 'Otro', category: 'other' }
];

export const getOriginCategory = (origin) => {
  const source = ORIGIN_SOURCES.find(s => s.value === origin);
  return source?.category || 'other';
};