// Datos simulados de Perú sin uso de hooks de React para evitar errores de dispatcher

export const usePeruGeo = () => {
  const provinces = [
    'Lima',
    'Arequipa',
    'Cusco',
    'La Libertad',
    'Piura',
    'Junín',
    'Lambayeque',
    'Callao',
  ];

  const citiesByProvince = {
    Lima: ['Lima', 'Miraflores', 'San Isidro', 'Barranco', 'Surco', 'La Molina'],
    Arequipa: ['Arequipa', 'Cayma', 'Yanahuara', 'Socabaya'],
    Cusco: ['Cusco', 'San Sebastián', 'San Jerónimo', 'Wanchaq'],
    'La Libertad': ['Trujillo', 'La Esperanza', 'Huanchaco', 'Víctor Larco'],
    Piura: ['Piura', 'Castilla', 'Catacaos', 'Sullana'],
    Junín: ['Huancayo', 'El Tambo', 'Chilca'],
    Lambayeque: ['Chiclayo', 'José Leonardo Ortiz', 'La Victoria'],
    Callao: ['Callao', 'Bellavista', 'La Perla'],
  };

  const districtsByCity = {
    Lima: ['Cercado de Lima', 'Rímac', 'Breña', 'Pueblo Libre'],
    Miraflores: ['Miraflores Centro', 'Santa Cruz', 'Aurora'],
    'San Isidro': ['Country Club', 'Orrantia', 'El Golf'],
    Barranco: ['Barranco Norte', 'Barranco Sur'],
    Surco: ['Chacarilla', 'Valle Hermoso', 'Monterrico'],
    'La Molina': ['La Molina Vieja', 'Camacho', 'Sol de La Molina'],

    Arequipa: ['Cercado', 'Selva Alegre'],
    Cayma: ['Cayma'],
    Yanahuara: ['Yanahuara'],
    Socabaya: ['Socabaya'],

    Cusco: ['Centro Histórico', 'Santiago'],
    'San Sebastián': ['San Sebastián'],
    'San Jerónimo': ['San Jerónimo'],
    Wanchaq: ['Wanchaq'],

    Trujillo: ['Centro', 'Primavera'],
    'La Esperanza': ['La Esperanza'],
    Huanchaco: ['Huanchaco'],
    'Víctor Larco': ['Víctor Larco'],

    Piura: ['Centro', 'Santa Isabel'],
    Castilla: ['Castilla'],
    Catacaos: ['Catacaos'],
    Sullana: ['Sullana'],

    Huancayo: ['Huancayo'],
    'El Tambo': ['El Tambo'],
    Chilca: ['Chilca'],

    Chiclayo: ['Chiclayo'],
    'José Leonardo Ortiz': ['JLO'],
    'La Victoria': ['La Victoria'],

    Callao: ['Cercado', 'La Chalaca'],
    Bellavista: ['Bellavista'],
    'La Perla': ['La Perla'],
  };

  const provinceOptions = provinces.map(p => ({ value: p, label: p }));

  const getCityOptions = (province) => {
    const cities = citiesByProvince[province] || [];
    return cities.map(c => ({ value: c, label: c }));
  };

  const getDistrictOptions = (city) => {
    const districts = districtsByCity[city] || [];
    return districts.map(d => ({ value: d, label: d }));
  };

  return { provinceOptions, getCityOptions, getDistrictOptions };
};

export default usePeruGeo;

