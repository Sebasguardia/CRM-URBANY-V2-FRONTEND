import React from 'react';
import { Search } from 'lucide-react';
import Input from '../../../shared/components/UI/Input/Input';

export const SearchInput = ({ placeholder = 'Buscar...', value, onChange, className = '' }) => {
  return (
    <Input
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      icon={<Search size={18} />}
      className={className}
    />
  );
};

export default SearchInput;

