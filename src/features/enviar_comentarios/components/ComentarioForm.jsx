import { useState } from 'react';
import styles from './ComentarioForm.module.css';
import Card from './Card';
import { Lightbulb, Heart, Info, MessageCircle } from 'lucide-react';
import { comentariosService } from '../services/comentariosService';

const ComentarioForm = ({ onCancel }) => {
  const [feedbackType, setFeedbackType] = useState('sugerencias');
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!comment.trim()) return;

    setIsSubmitting(true);
    try {
      await comentariosService.enviarComentario({
        tipo: feedbackType,
        contenido: comment,
        fecha: new Date().toISOString()
      });

      setComment('');
      alert('¡Gracias por tu comentario!');
      if (onCancel) onCancel();
    } catch (error) {
      console.error('Error al enviar comentario:', error);
      alert('Hubo un error al enviar tu comentario. Por favor intenta de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit} className={styles.formLayout}>
        <div className={styles.header}>
          <img
            src="https://i.ibb.co/84bzpL1C/imagen-2025-11-24-235947945.png"
            alt="CRM Urbany Logo"
            className={styles.logo}
          />
        </div>

        <div className={styles.tabs}>
          <button
            type="button"
            onClick={() => setFeedbackType('sugerencias')}
            className={`${styles.tabButton} ${feedbackType === 'sugerencias' ? styles.activeTabSugerencias : ''}`}
          >
            <Lightbulb size={18} />
            Sugerencias
          </button>
          <button
            type="button"
            onClick={() => setFeedbackType('cumplidos')}
            className={`${styles.tabButton} ${feedbackType === 'cumplidos' ? styles.activeTabCumplidos : ''}`}
          >
            <Heart size={18} />
            Cumplidos
          </button>
          <button
            type="button"
            onClick={() => setFeedbackType('inconvenientes')}
            className={`${styles.tabButton} ${feedbackType === 'inconvenientes' ? styles.activeTabInconvenientes : ''}`}
          >
            <Info size={18} />
            Inconvenientes
          </button>
          <button
            type="button"
            onClick={() => setFeedbackType('general')}
            className={`${styles.tabButton} ${feedbackType === 'general' ? styles.activeTabGeneral : ''}`}
          >
            <MessageCircle size={18} />
            Nos encantaría saber de ti!
          </button>
        </div>

        <textarea
          className={styles.textArea}
          placeholder={`Escribe tus ${feedbackType === 'general' ? 'comentarios' : feedbackType} aquí...`}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          rows={5}
          disabled={isSubmitting}
        />

        <p className={styles.disclaimer}>
          Es posible que se envíe parte de la información del sistema y de la cuenta a urbany, que la usará para solucionar problemas técnicos y mejorar sus servicios, de acuerdo con su Política de Privacidad y Condiciones del servicio
        </p>

        <div className={styles.actions}>
          <button
            type="button"
            className={styles.cancelButton}
            onClick={onCancel}
            disabled={isSubmitting}
          >
            cancelar
          </button>
          <button
            type="submit"
            className={styles.acceptButton}
            disabled={isSubmitting || !comment.trim()}
          >
            {isSubmitting ? 'Enviando...' : 'Aceptar'}
          </button>
        </div>
      </form>
    </Card>
  );
};

export default ComentarioForm;
