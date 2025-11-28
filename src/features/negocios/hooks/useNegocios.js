import { useState } from 'react';

export const useNegocios = () => {
  // Mock data - esto vendría de tu API/store
  const allDeals = [
    {
      id: 1,
      nombre: 'Diego Rodríguez',
      telefono: '(555) 987-6543',
      email: 'diego.rodriguez@email.com',
      propiedad: {
        tipo: 'Venta',
        disponibilidad: 'Disponible',
        direccion: '456 Calle Roble'
      },
      fecha: '23 de Sep, 2025',
      estado: 'nuevo'
    },
    {
      id: 2,
      nombre: 'Josué Rodrígues',
      telefono: '(555) 997-6443',
      email: 'jos.rodriguez@email.com',
      propiedad: {
        tipo: 'alquiler',
        disponibilidad: 'Disponible',
        direccion: '456 Calle suizo'
      },
      fecha: '23 de Sep, 2025',
      estado: 'nuevo'
    }
  ];

  const [deals] = useState(allDeals);

  return { deals };
};
