import React, { useState } from 'react';
import { Upload, X, File } from 'lucide-react';
import styles from './FileUpload.module.css';

export const FileUpload = ({ 
  onFilesSelected, 
  multiple = false, 
  accept = '*/*',
  maxSize = 10 * 1024 * 1024 // 10MB
}) => {
  const [dragActive, setDragActive] = useState(false);
  const [files, setFiles] = useState([]);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFiles(Array.from(e.dataTransfer.files));
    }
  };

  const handleChange = (e) => {
    if (e.target.files) {
      handleFiles(Array.from(e.target.files));
    }
  };

  const handleFiles = (selectedFiles) => {
    const validFiles = selectedFiles.filter(file => {
      if (file.size > maxSize) {
        alert(`Archivo ${file.name} excede el tamaño máximo de 10MB`);
        return false;
      }
      return true;
    });

    setFiles(validFiles);
    onFilesSelected(validFiles);
  };

  const removeFile = (index) => {
    const newFiles = files.filter((_, i) => i !== index);
    setFiles(newFiles);
    onFilesSelected(newFiles);
  };

  return (
    <div className={styles.fileUploadContainer}>
      <div
        className={`${styles.dropZone} ${dragActive ? styles.dragActive : ''}`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <Upload className={styles.uploadIcon} size={32} />
        <p className={styles.uploadText}>
          Arrastra archivos aquí o <span className={styles.browse}>busca en tu equipo</span>
        </p>
        <input
          type="file"
          className={styles.fileInput}
          multiple={multiple}
          accept={accept}
          onChange={handleChange}
        />
      </div>

      {files.length > 0 && (
        <div className={styles.fileList}>
          {files.map((file, index) => (
            <div key={index} className={styles.fileItem}>
              <File className={styles.fileIcon} size={16} />
              <span className={styles.fileName} title={file.name}>
                {file.name}
              </span>
              <span className={styles.fileSize}>
                {(file.size / 1024 / 1024).toFixed(2)} MB
              </span>
              <button
                className={styles.removeButton}
                onClick={() => removeFile(index)}
              >
                <X size={14} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};