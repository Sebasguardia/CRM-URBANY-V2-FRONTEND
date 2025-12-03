import React, { useState } from 'react';
import { Phone, Smartphone, Mail, Globe, NotebookPen, Camera } from 'lucide-react';
import Card from '../../../../shared/components/UI/Card/Card';
import Input from '../../../../shared/components/UI/Input/Input';
import Button from '../../../../shared/components/UI/Button/Button';
import { Avatar } from '../../../../shared/components/UI/Avatar/Avatar';
import styles from './RealEstateInfo.module.css';
import CollapsibleModule from '../components/CollapsibleModule';
import LocationModule from '../components/modules/LocationModule';
import SocialModule from '../components/modules/SocialModule';
import WatermarkModule from '../components/modules/WatermarkModule';
import CodeModule from '../components/modules/CodeModule';
import usePeruGeo from '../hooks/usePeruGeo';

const RealEstateInfo = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    celular: '',
    email: '',
    sitioWeb: '',
    codigoInmobiliaria: ''
  });

  const [avatarUrl] = useState('');

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    console.log('Guardando cambios:', formData);
  };

  const [openModule, setOpenModule] = useState(null);

  const handleAvatarChange = () => {
    console.log('Cambiando avatar');
  };

  const { provinceOptions, getCityOptions, getDistrictOptions } = usePeruGeo();
  const cityOptions = getCityOptions(formData.provincia);
  const districtOptions = getDistrictOptions(formData.ciudad);

  return (
    <div className={styles.container}>
      <Card className={styles.card}>
        <div className={styles.header}>
          <div className={styles.titleSection}>
            <h1 className={styles.title}>Información inmobiliaria</h1>
            <p className={styles.subtitle}>
              Configure todos los datos de su inmobiliaria en este panel.
            </p>
          </div>
          
          <div className={styles.avatarSection}>
            <div className={styles.avatarContainer}>
              <Avatar 
                src={avatarUrl} 
                alt="Logo inmobiliaria" 
                size="lg"
                className={styles.avatar}
              />
              <button 
                className={styles.avatarButton}
                onClick={handleAvatarChange}
                aria-label="Cambiar logo"
              >
                <Camera size={16} />
              </button>
            </div>
          </div>
        </div>

        <div className={styles.formContainer}>
          {/* Fila 1: Nombre | Email */}
          <div className={`${styles.row} ${styles.rowTop}`}>
            <div className={styles.col}>
              <label className={styles.label}>Nombre</label>
              <Input
                type="text"
                placeholder="Ingrese el nombre de la inmobiliaria"
                value={formData.nombre}
                onChange={(e) => handleInputChange('nombre', e.target.value)}
                className={styles.fieldInput}
              />
            </div>
            <div className={styles.col}>
              <label className={styles.label}>Email</label>
              <Input
                type="email"
                placeholder="Ingrese el email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                icon={<Mail size={20} />}
                className={styles.fieldInput}
              />
            </div>
          </div>

          {/* Fila 2: Teléfono | Celular | Sitio web */}
          <div className={`${styles.row} ${styles.rowBottom}`}>
            <div className={styles.col}>
              <div className={styles.splitGroup}>
                <div className={styles.splitItem}>
                  <label className={styles.label}>Teléfono</label>
                  <Input
                    type="tel"
                    placeholder="Ingrese el teléfono"
                    value={formData.telefono}
                    onChange={(e) => handleInputChange('telefono', e.target.value)}
                    icon={<Phone size={20} />}
                    className={styles.fieldInput}
                  />
                </div>
                <div className={styles.splitItem}>
                  <label className={styles.label}>Celular</label>
                  <Input
                    type="tel"
                    placeholder="Ingrese el celular"
                    value={formData.celular}
                    onChange={(e) => handleInputChange('celular', e.target.value)}
                    icon={<Smartphone size={20} />}
                    className={styles.fieldInput}
                  />
                </div>
              </div>
            </div>
            <div className={styles.col}>
              <label className={styles.label}>Sitio web</label>
              <Input
                type="url"
                placeholder="Ingrese el sitio web"
                value={formData.sitioWeb}
                onChange={(e) => handleInputChange('sitioWeb', e.target.value)}
                icon={<Globe size={20} />}
                className={styles.fieldInput}
              />
            </div>
          </div>
        </div>

        {/* Lista de iconos/acciones como en la imagen */}
        <div className={styles.linksSection}>
          <button className={styles.linkButton} onClick={() => setOpenModule(openModule === 'ubicacion' ? null : 'ubicacion')}>
            <NotebookPen size={16} className={styles.linkIcon} />
            <span>Modificar ubicación de inmobiliaria</span>
          </button>
          <button className={styles.linkButton} onClick={() => setOpenModule(openModule === 'redes' ? null : 'redes')}>
            <NotebookPen size={16} className={styles.linkIcon} />
            <span>Redes sociales de la inmobiliaria</span>
          </button>
          <button className={styles.linkButton} onClick={() => setOpenModule(openModule === 'marca' ? null : 'marca')}>
            <NotebookPen size={16} className={styles.linkIcon} />
            <span>Modificar marca de agua</span>
          </button>
          <button className={styles.linkButton} onClick={() => setOpenModule(openModule === 'codigo' ? null : 'codigo')}>
            <NotebookPen size={16} className={styles.linkIcon} />
            <span>Modificar código de inmobiliaria</span>
          </button>
        </div>

        {/* Módulos desplegables */}
        <CollapsibleModule
          id="ubicacion"
          title="Modificar ubicación inmobiliaria"
          icon={<NotebookPen size={16} className={styles.linkIcon} />}
          openId={openModule}
          setOpenId={setOpenModule}
          hideHeader={true}
        >
          <LocationModule
            form={formData}
            onChange={handleInputChange}
            provinceOptions={provinceOptions}
            cityOptions={cityOptions}
            districtOptions={districtOptions}
          />
        </CollapsibleModule>

        <CollapsibleModule
          id="redes"
          title="Redes sociales"
          icon={<NotebookPen size={16} className={styles.linkIcon} />}
          openId={openModule}
          setOpenId={setOpenModule}
          hideHeader={true}
        >
          <SocialModule form={formData} onChange={handleInputChange} />
        </CollapsibleModule>

        <CollapsibleModule
          id="marca"
          title="Modificar marca de agua"
          icon={<NotebookPen size={16} className={styles.linkIcon} />}
          openId={openModule}
          setOpenId={setOpenModule}
          hideHeader={true}
        >
          <WatermarkModule form={formData} onChange={handleInputChange} />
        </CollapsibleModule>

        <CollapsibleModule
          id="codigo"
          title="Modificar código de inmobiliaria"
          icon={<NotebookPen size={16} className={styles.linkIcon} />}
          openId={openModule}
          setOpenId={setOpenModule}
          hideHeader={true}
        >
          <CodeModule form={formData} onChange={handleInputChange} />
        </CollapsibleModule>

        <div className={styles.actions}>
          <Button 
            variant="primary" 
            size="md"
            onClick={handleSave}
            className={styles.saveButton}
          >
            Guardar cambios
          </Button>
        </div>
      </Card>
    </div>
  );
};

// módulos colapsables disponibles pero no usados en esta vista

export default RealEstateInfo;
