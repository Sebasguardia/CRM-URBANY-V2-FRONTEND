import { useState } from 'react';

export const useForm = ({ inicialValues, validaciones, onSubmit }) => {
  const [formData, setFormData] = useState(inicialValues);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Validación en tiempo real
    if (validaciones && validaciones[name]) {
      const error = validaciones[name](type === 'checkbox' ? checked : value);
      setErrors(prev => ({
        ...prev,
        [name]: error
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validar todos los campos
    let formErrors = {};
    Object.keys(validaciones).forEach(key => {
      const error = validaciones[key](formData[key]);
      if (error) {
        formErrors[key] = error;
      }
    });

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setErrors({});
    onSubmit(formData);
  };

  return {
    formData,
    handleChange,
    handleSubmit,
    errors
  };
};