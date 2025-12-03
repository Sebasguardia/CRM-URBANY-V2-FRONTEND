import React from 'react';
import Input from '../../../../../shared/components/UI/Input/Input';
import Select from '../../../../../shared/components/UI/Select/Select';
import styles from '../../pages/RealEstateInfo.module.css';

const LocationModule = ({ form, onChange, provinceOptions, cityOptions, districtOptions }) => {
  const handleProvinceChange = (e) => {
    const value = e.target.value;
    onChange('provincia', value);
    onChange('ciudad', '');
    onChange('distrito', '');
  };

  const handleCityChange = (e) => {
    const value = e.target.value;
    onChange('ciudad', value);
    onChange('distrito', '');
  };

  return (
    <>
      <Input
        placeholder="Dirección"
        value={form.direccion || ''}
        onChange={(e) => onChange('direccion', e.target.value)}
        className={styles.fieldInput}
      />
      <Select
        value={form.provincia || ''}
        onChange={handleProvinceChange}
        options={provinceOptions}
        placeholder="Provincia"
        className={styles.fieldInput}
      />
      <Select
        value={form.ciudad || ''}
        onChange={handleCityChange}
        options={cityOptions}
        placeholder="Ciudad"
        className={styles.fieldInput}
      />
      <Select
        value={form.distrito || ''}
        onChange={(e) => onChange('distrito', e.target.value)}
        options={districtOptions}
        placeholder="Distrito"
        className={styles.fieldInput}
      />
    </>
  );
};

export default LocationModule;

