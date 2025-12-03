import React from 'react';
import Input from '../../../../../shared/components/UI/Input/Input';

const CodeModule = ({ form, onChange }) => {
  const handleCodeChange = (e) => {
    const raw = e.target.value || '';
    const onlyLetters = raw.replace(/[^A-Za-z]/g, '');
    onChange('codigoInmobiliaria', onlyLetters.toUpperCase());
  };

  return (
    <>
      <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Código de inmobiliaria</p>
      <Input
        type="text"
        placeholder="Ejm: MHQXE"
        value={form.codigoInmobiliaria || ''}
        onChange={handleCodeChange}
      />
    </>
  );
};

export default CodeModule;

