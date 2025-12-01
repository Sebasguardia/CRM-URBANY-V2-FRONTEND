import React, { useState } from 'react';
import IntegrationsLayout from '../components/IntegrationsLayout/IntegrationsLayout';

const CATEGORIES = [
    'Portales',
    'Calendario',
    'Instagram y WhatsApp',
    'Correo electrónico',
    'Redes inmobiliarias',
    'Email marketing',
];

const SECTIONS_BY_CATEGORY = {
    Portales: [
        {
            id: 'custom-portals',
            title: 'Integración personalizada',
            items: [
                {
                    id: 'mercadolibre',
                    name: 'MercadoLibre',
                    description:
                        'Integre MercadoLibre para publicar, editar, eliminar sus inmuebles y obtener las consultas realizadas en este portal.',
                    type: 'accordion',
                    detailTitle: 'Antes de comenzar',
                    detailParagraphs: [],
                    bullets: [
                        'Es necesario tener un usuario creado en MercadoLibre y registrado como inmobiliaria. Si todavía no te has registrado como inmobiliaria accede a MercadoLibre, sección Ayuda > Configuración de mi cuenta > Registrarme como inmobiliaria.',
                        'Debe tener un plan contratado para poder realizar publicaciones.',
                    ],
                    primaryActionLabel: 'Conectar',
                },
                {
                    id: 'immoup',
                    name: 'InmoUP',
                    description:
                        'Integre InmoUP para publicar, editar y eliminar sus inmuebles.',
                    type: 'accordion-form',
                    detailTitle: 'Antes de comenzar',
                    detailParagraphs: [
                        'La información de contacto será la del agente de la propiedad.',
                    ],
                    formFields: [
                        { id: 'inmoupEmail', label: 'Email de usuario en InmoUP' },
                        { id: 'inmoupApiKey', label: 'API Key' },
                    ],
                    primaryActionLabel: 'Conectar',
                },
                {
                    id: 'web-page',
                    name: 'Página Web',
                    description:
                        'Integre una página web desarrollada por 2clics para publicar, editar, eliminar sus inmuebles y sincronizar las consultas.',
                    type: 'accordion',
                    detailTitle: 'Antes de comenzar',
                    detailParagraphs: [],
                    bullets: [
                        'La página web deberá ser desarrollada por 2clics. No es posible realizar integraciones con páginas web realizadas por terceros.',
                        'Para comenzar a desarrollar tu web ponte en contacto con tu asesor o nuestro equipo de soporte.',
                    ],
                },
                {
                    id: 'inmoclick',
                    name: 'Inmoclick',
                    description:
                        'Integre Inmoclick para publicar, editar y eliminar sus inmuebles.',
                    type: 'accordion-form',
                    detailTitle: 'Antes de comenzar',
                    detailParagraphs: [
                        'La información de contacto será la del agente de la propiedad.',
                    ],
                    formFields: [
                        { id: 'inmoclickEmail', label: 'Email de usuario en Inmoclick' },
                        { id: 'inmoclickApiKey', label: 'API Key' },
                    ],
                    primaryActionLabel: 'Conectar',
                },
                {
                    id: 'brokian',
                    name: 'Brokian',
                    description:
                        'Integre Brokian para publicar, editar y eliminar sus inmuebles.',
                    type: 'accordion',
                    detailTitle: 'Antes de comenzar',
                    detailParagraphs: [],
                    bullets: [
                        'Para integrar tu cuenta de Brokian primero debes comunicarte con nuestro equipo de soporte.',
                    ],
                },
            ],
        },
        {
            id: 'paid-portals',
            title: 'Portales pagos',
            items: [
                {
                    id: 'proppit',
                    name: 'Proppit',
                    description:
                        'Integre Proppit para publicar, editar y eliminar sus inmuebles.',
                    type: 'accordion-form',
                    detailTitle: 'Configuración en 2clics',
                    detailParagraphs: [
                        'Configure la visualización de este portal al momento de difundir sus propiedades y la publicación automática de las mismas.',
                    ],
                    formFields: [
                        { id: 'proppitWhatsapp', label: 'WhatsApp' },
                    ],
                    primaryActionLabel: 'Guardar configuración',
                },
            ],
        },
    ],
    Calendario: [
        {
            id: 'calendar-sync',
            title: 'Sincronización de calendario',
            items: [
                {
                    id: 'google-calendar',
                    name: 'Sincronización de calendario',
                    subtitle: 'Visualizá todas tus activades en un sólo lugar',
                    type: 'calendar',
                    bullets: [
                        'Ya no cambiarás entre 2clics y tu calendario de Google',
                        'No te olvides de ninguna actividad',
                        'Compartí tu disponibilidad con tus compañeros de trabajo',
                    ],
                    footerText:
                        'Sincroniza tus eventos en 2clics con el proveedor número uno: Google Calendar.',
                    primaryActionLabel: 'Añadir cuenta nueva',
                    secondaryActionLabel: '¿Cómo funciona?',
                },
            ],
        },
    ],
    'Instagram y WhatsApp': [
        {
            id: 'official-integrations',
            title: 'Integraciones oficiales',
            items: [
                {
                    id: 'instagram-business',
                    name: 'Instagram',
                    description:
                        'Integre su cuenta de Instagram Negocio y comience a publicar a través del CRM.',
                    type: 'accordion',
                    detailTitle: 'Antes de comenzar',
                    detailParagraphs: [
                        'Para poder conectar tu cuenta de Instagram primero debe estar relacionada a un negocio de Facebook.',
                        'Suena complicado pero no te preocupes, te ayudaremos en todo el proceso. En el siguiente artículo tienes todo detallado.',
                        'Una vez que lo hayas completado puedes conectar tu cuenta con el CRM desde aquí.',
                        'Conoce nuestras políticas de privacidad',
                    ],
                    primaryActionLabel: 'Conectar cuenta de la inmobiliaria con Facebook',
                    secondaryActionLabel: 'Conectar cuentas de los agentes con Facebook',
                },
                {
                    id: 'whatsapp-business-api',
                    name: 'WhatsApp Business API',
                    description:
                        'Integre su cuenta de Facebook Busines y conecte todo el equipo a un número de WhatsApp para tener todas las conversaciones en el CRM a través de la API Oficial.',
                    type: 'accordion',
                    detailTitle: 'Antes de comenzar',
                    detailParagraphs: [
                        'No cuentas con esta función en tu licencia, comunicate con tu asesor o con el equipo de soporte para poder habilitarla.',
                    ],
                },
            ],
        },
        {
            id: 'alternative-integration',
            title: 'Integración alternativa',
            items: [
                {
                    id: 'whatsapp-alternative',
                    name: 'WhatsApp',
                    description:
                        'Integre su número de WhatsApp a su cuenta escaneando el QR para sincronizar sus conversaciones con el CRM.',
                    type: 'accordion',
                    detailTitle: 'Antes de comenzar',
                    detailParagraphs: [
                        'No cuentas con esta función en tu licencia, comunicate con tu asesor o con el equipo de soporte para poder habilitarla.',
                    ],
                },
            ],
        },
    ],
    'Correo electrónico': [
        {
            id: 'email-integration',
            title: 'Integración de correo electrónico',
            items: [
                {
                    id: 'email-benefits',
                    name: 'Pero primero debe estar tu web configurada. ¿Qué podré hacer una vez que tenga mi cuenta creada?',
                    description:
                        'Sincronizar los correos de urbany2 con tu cuenta de email profesional. Difundir tus propiedades por email. Efectuar seguimiento de las aperturas de correo. Ahorrar tiempo usando plantillas personalizables. Personalizar tu firma para tener una apariencia más profesional. Comparte tu disponibilidad con tus compañeros de trabajo.',
                    type: 'bullets',
                    bullets: [
                        'Sincronizar los correos de urbany2 con tu cuenta de email profesional',
                        'Difundir tus propiedades por email',
                        'Efectuar seguimiento de las aperturas de correo',
                        'Ahorrar tiempo usando plantillas personalizables',
                        'Personalizar tu firma para tener una apariencia más profesional',
                        'Comparte tu disponibilidad con tus compañeros de trabajo',
                    ],
                },
            ],
        },
    ],
    'Redes inmobiliarias': [
        {
            id: 'real-estate-networks',
            title: 'Redes inmobiliarias',
            items: [
                {
                    id: 'real-estate-benefits',
                    name: 'Obtén un mayor alcance y concreta más negocios a través de las redes inmobiliarias.',
                    description:
                        'Elige en que redes compartir tus propiedades. Comparte fichas entre colegas. Las fichas de otra propiedad con tus datos. Asigna comisiones propias para cada propiedad.',
                    type: 'bullets',
                    bullets: [
                        'Elige en que redes compartir tus propiedades.',
                        'Comparte fichas entre colegas.',
                        'Las fichas de otra propiedad con tus datos.',
                        'Asigna comisiones propias para cada propiedad.',
                    ],
                },
                {
                    id: 'red-urbany',
                    name: 'Red Urbany',
                    description:
                        'Administre sus propiedades en la red y qué hacer al cargar una nueva',
                    type: 'accordion',
                },
            ],
        },
    ],
    'Email marketing': [
        {
            id: 'email-tools',
            title: 'Herramientas',
            items: [
                {
                    id: 'myperfit',
                    name: 'MyPerfit',
                    description:
                        'Administre sus propiedades en la red y qué hacer al cargar una nueva',
                    type: 'accordion-form',
                    detailTitle: 'Integración con MyPerfit',
                    detailParagraphs: [
                        'Conecta con tu cuenta de MyPerfit para poder sincronizar los contactos y crear listas.',
                    ],
                    formFields: [
                        { id: 'apiKey', label: 'API Key' },
                        { id: 'account', label: 'Cuenta' },
                    ],
                    primaryActionLabel: 'Guardar Configuración',
                },
            ],
        },
    ],
};

const IntegrationsPage = () => {
    const [activeCategory, setActiveCategory] = useState(CATEGORIES[0]);
    const [isLoading, setIsLoading] = useState(false);

    const handleChangeCategory = (category) => {
        if (category === activeCategory) return;

        setIsLoading(true);
        setTimeout(() => {
            setActiveCategory(category);
            setIsLoading(false);
        }, 350);
    };

    const sections = SECTIONS_BY_CATEGORY[activeCategory] || [];

    return (
        <IntegrationsLayout
            categories={CATEGORIES}
            activeCategory={activeCategory}
            onChangeCategory={handleChangeCategory}
            sections={sections}
            isLoading={isLoading}
        />
    );
};

export default IntegrationsPage;
