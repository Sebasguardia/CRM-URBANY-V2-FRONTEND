// Servicio temporal - puedes reemplazarlo con tu API real
export const comentariosService = {
  async enviarComentario(datos) {
    // Simular llamada a API
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Comentario enviado:', datos);
        resolve({ success: true, message: 'Comentario enviado exitosamente' });
      }, 1000);
    });
  },

  async obtenerSugerencias(filtros = {}) {
    // Simular llamada a API
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([]);
      }, 500);
    });
  },

  async votarSugerencia(sugerenciaId) {
    // Simular llamada a API
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true });
      }, 300);
    });
  }
};