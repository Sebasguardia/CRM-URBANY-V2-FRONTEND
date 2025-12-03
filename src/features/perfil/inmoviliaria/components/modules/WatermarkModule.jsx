import React from 'react';
import Select from '../../../../../shared/components/UI/Select/Select';
import { FileUpload } from '../../../../../shared/components/UI/FileUpload/FileUpload';

const WatermarkModule = ({ form, onChange }) => {
  const positionOptions = [
    { value: 'top-left', label: 'Arriba - izquierda' },
    { value: 'bottom-left', label: 'Abajo - izquierda' },
    { value: 'top-right', label: 'Arriba - derecha' },
    { value: 'bottom-right', label: 'Abajo - derecha' },
  ];

  const handleFilesSelected = (files) => {
    const [file] = files;
    onChange('watermarkLogo', file || null);
  };

  return (
    <>
      <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
        La imagen que elijas será utilizada para generar las marcas de agua en las fotos de tus propiedades.
      </p>
      <FileUpload onFilesSelected={handleFilesSelected} multiple={false} accept="image/*" />
      <Select
        value={form.watermarkPosition || ''}
        onChange={(e) => onChange('watermarkPosition', e.target.value)}
        options={positionOptions}
        placeholder="Ubicación de marca de agua"
      />
    </>
  );
};

export default WatermarkModule;

