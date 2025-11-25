// Validar tipo de archivo
export const validateFileType = (file, allowedTypes) => {
  const fileType = file.type;
  const fileExtension = file.name.split('.').pop().toLowerCase();
  
  return allowedTypes.some(type => {
    if (type.includes('/')) {
      // Es un MIME type
      return fileType === type;
    } else {
      // Es una extensión
      return fileExtension === type.toLowerCase();
    }
  });
};

// Validar tamaño
export const validateFileSize = (file, maxSizeMB) => {
  return file.size <= maxSizeMB * 1024 * 1024;
};

// Formato legible de tamaño
export const formatFileSize = (bytes) => {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

// Crear object URL temporal
export const createObjectURL = (file) => {
  return URL.createObjectURL(file);
};

// Revocar object URL
export const revokeObjectURL = (url) => {
  if (url && url.startsWith('blob:')) {
    URL.revokeObjectURL(url);
  }
};

// Extraer datos EXIF (simplificado)
export const getImageMetadata = (file) => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        resolve({
          width: img.width,
          height: img.height,
          orientation: img.width > img.height ? 'landscape' : 'portrait'
        });
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  });
};