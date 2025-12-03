import { useState } from 'react';
import { profileApi } from '../services/profile.api';

export const useRealEstateInfo = () => {
  const [form, setForm] = useState({
    nombre: '',
    telefono: '',
    celular: '',
    email: '',
    sitioWeb: '',
    codigoInmobiliaria: '',
    direccion: '',
    provincia: '',
    ciudad: '',
    distrito: '',
    facebook: '',
    youtube: '',
    twitter: '',
    instagram: '',
    watermarkLogo: null,
    watermarkPosition: '',
  });

  const provinceOptions = [
    { value: '', label: 'Provincia' },
    { value: 'Buenos Aires', label: 'Buenos Aires' },
    { value: 'Córdoba', label: 'Córdoba' },
    { value: 'Santa Fe', label: 'Santa Fe' },
  ];

  const districtOptions = [
    { value: '', label: 'Distrito' },
    { value: 'Centro', label: 'Centro' },
    { value: 'Norte', label: 'Norte' },
    { value: 'Sur', label: 'Sur' },
  ];

  const updateField = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const save = async () => {
    return profileApi.update(form);
  };

  return { form, updateField, save, provinceOptions, districtOptions };
};

export default useRealEstateInfo;

