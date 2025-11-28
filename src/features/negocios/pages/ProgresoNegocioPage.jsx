import { AlarmClock, HelpCircle, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Card from '../../../shared/components/UI/Card/Card';
import Input from '../../../shared/components/UI/Input/Input';
import Toggle from '../../../shared/components/UI/Toggle/Toggle';
import Button from '../../../shared/components/UI/Button/Button';
import styles from './ProgresoNegocioPage.module.css';

const ProgresoNegocioPage = () => {
    const navigate = useNavigate();
    const etapas = [
        { id: 1, nombre: 'Nuevo Negocio', dias: 3, placeholder: 'Nuevo Negocio' },
        { id: 2, nombre: 'Contacto', dias: 10, placeholder: 'Contacto' },
        { id: 3, nombre: 'Visita Programada', dias: 10, placeholder: 'Visita programada' }
    ];

    const handleGoBack = () => {
        navigate('/negocios');
    };

    return (
        <div className={styles.progresoPage}>
            <div className={styles.header}>
                <div className={styles.titleRow}>
                    <Button 
                        variant="outline" 
                        size="md" 
                        onClick={handleGoBack}
                        className={styles.backButton}
                    >
                        <ArrowLeft size={18} />
                        Volver
                    </Button>
                    <h1 className={styles.title}>Progreso del Negocio</h1>
                </div>
                <p className={styles.subtitle}>
                    Configure la vida de su negocio, agregue o elimine las etapas por las cuales pasará el mismo
                </p>
            </div>

            <div className={styles.etapasGrid}>
                {etapas.map((etapa) => (
                    <Card key={etapa.id} className={styles.etapaCard}>
                        <h3 className={styles.etapaNombre}>{etapa.nombre}</h3>
                        <div className={styles.diasRow}>
                            <AlarmClock size={18} />
                            <span>{etapa.dias}</span>
                        </div>
                    </Card>
                ))}
            </div>

            <div className={styles.formGrid}>
                {etapas.map((etapa) => (
                    <div key={etapa.id} className={styles.formColumn}>
                        <label className={styles.label}>Nombre</label>
                        <Input 
                            type="text" 
                            placeholder={etapa.placeholder}
                            className={styles.customInput}
                        />
                        
                        <div className={styles.toggleRow}>
                            <span className={styles.toggleLabel}>Estancado durante (Días)</span>
                            <HelpCircle size={16} className={styles.helpIcon} />
                            <Toggle defaultChecked />
                        </div>

                        <Input 
                            type="number" 
                            placeholder={etapa.dias.toString()}
                            className={styles.customInput}
                        />

                        {etapa.id === 1 && (
                            <>
                                <Card className={styles.negociacionCard}>
                                    <h3 className={styles.negociacionTitulo}>En Negociación</h3>
                                    <div className={styles.diasRow}>
                                        <AlarmClock size={18} />
                                        <span>5</span>
                                    </div>
                                </Card>

                                <label className={styles.label}>Nombre</label>
                                <Input 
                                    type="text" 
                                    placeholder="En Negociación"
                                    className={styles.customInput}
                                />
                                
                                <div className={styles.toggleRow}>
                                    <span className={styles.toggleLabel}>Estancado durante (Días)</span>
                                    <HelpCircle size={16} className={styles.helpIcon} />
                                    <Toggle defaultChecked />
                                </div>

                                <Input 
                                    type="number" 
                                    placeholder="5"
                                    className={styles.customInput}
                                />
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProgresoNegocioPage;
