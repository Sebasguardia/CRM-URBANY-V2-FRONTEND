import React from "react";
import {
  ChevronDown,
  ChevronRight,
  CalendarRange,
  Mail,
} from "lucide-react";
import styles from "./IntegrationItem.module.css";

const MyPerfitLogo = () => {
  return <Mail className={styles.heroIcon} />;
};

const getIconForItem = (type, id) => {
  if (type === "calendar") return <CalendarRange size={30} />;
  if (id === "instagram-business") {
    return (
      <img
        src="https://app.2clics.com.ar/img/social/icon_instagram.png"
        alt="Instagram"
        className={styles.portalSocialIconImage}
      />
    );
  }
  if (id === "whatsapp-business-api" || id === "whatsapp-alternative") {
    return (
      <img
        src="https://app.2clics.com.ar/img/integrations/whatsapp-logo.png"
        alt="WhatsApp"
        className={styles.portalSocialIconImage}
      />
    );
  }
  if (type === "bullets" || id === "email-benefits") return <Mail size={18} />;
  if (id === "red-urbany") 
    return 
    <img 
        src="https://i.ibb.co/84bzpL1C/imagen-2025-11-24-235947945.png"
        alt="Urbany"
        className={styles.UrbanyIconImage}
    />;
  if (id === "mercadolibre") {
    return (
      <img src="https://app.2clics.com.ar/img/portales/icon-ml.png" alt="MercadoLibre" className={styles.portalIconImage} />
    );
  }
  if (id === "immoup") {
    return (
      <img
        src="https://app.2clics.com.ar/img/portales/icon-inmoclickCom.png"
        alt="InmoUP"
        className={styles.portalIconImage}
      />
    );
  }
  if (id === "inmoclick") {
    return (
      <img
        src="https://app.2clics.com.ar/img/portales/icon-inmoclick.png"
        alt="Inmoclick"
        className={styles.portalIconImage}
      />
    );
  }
  if (id === "brokian") {
    return (
      <img src="https://app.2clics.com.ar/img/portales/icon-brokian.png" alt="Brokian" className={styles.portalIconImage} />
    );
  }
  if (id === "proppit") {
    return (
      <img src="https://app.2clics.com.ar/img/portales/icon-olx.png" alt="Proppit" className={styles.portalIconImage} />
    );
  }
  if (id === "myperfit") return <Mail size={18} />;
  return <img src="https://app.2clics.com.ar/img/portales/icon-web.png" alt="Proppit" className={styles.portalIconImage} />;
};

const IntegrationItem = ({ item, isOpen, onToggle }) => {
  const { type } = item;

  const [showMyPerfitConfig, setShowMyPerfitConfig] = React.useState(false);

  const renderRightIllustration = () => {
    if (type === "calendar")       
      return <img 
        src="https://cdn-icons-png.freepik.com/256/5827/5827265.png?semt=ais_white_label"
        alt="calendario"
        className={styles.CalendarIconImage}/>;
    if (item.id === "email-benefits") return <Mail className={styles.heroIcon} />;
    if (item.id === "real-estate-benefits" || item.id === "red-urbany") {
      return <img 
        src="https://i.ibb.co/84bzpL1C/imagen-2025-11-24-235947945.png"
        alt="Urbany"
        className={styles.UrbanyIconImage}/>;
    }
    if (item.id === "myperfit") return <MyPerfitLogo />;
    return null;
  };

  const showChevronToggle = type === "accordion" || type === "accordion-form";

  const hasExpandableContent =
    type === "accordion" || type === "accordion-form" || type === "calendar";

  if (type === "calendar") {
    return (
      <div className={`${styles.wrapper} ${styles.calendarWrapper}`}>
        <div className={styles.calendarLayout}>
          <div className={styles.calendarCopy}>
            {item.subtitle && (
              <p className={styles.calendarSubtitle}>{item.subtitle}</p>
            )}
            {item.bullets && (
              <ul className={styles.bulletList}>
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            )}
            {item.footerText && (
              <p className={styles.calendarFooter}>{item.footerText}</p>
            )}
            <div className={styles.calendarActionsBlock}>
              {item.primaryActionLabel && (
                <button type="button" className={styles.primaryButton}>
                  {item.primaryActionLabel}
                </button>
              )}
              {item.secondaryActionLabel && (
                <button type="button" className={styles.secondaryButton}>
                  {item.secondaryActionLabel}
                </button>
              )}
            </div>
          </div>
          <div className={styles.calendarGraphic}>{renderRightIllustration()}</div>
        </div>
      </div>
    );
  }

  if (item.id === "real-estate-benefits") {
    return (
      <div className={`${styles.wrapper} ${styles.networksWrapper}`}>
        <div className={styles.networksLayout}>
          <div className={styles.emailContent}>
            <p className={styles.emailIntro}>{item.name}</p>
            {item.bullets && (
              <ul className={styles.emailBulletList}>
                {item.bullets.map((bullet) => (
                  <li key={bullet} className={styles.emailBullet}>
                    {bullet}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className={styles.networksGraphic}>
            <img
              src="https://app.2clics.com.ar/img/app/location.svg"
              alt="Mapa redes inmobiliarias"
              className={styles.networksPlanet}
            />
          </div>
        </div>
      </div>
    );
  }

  if (item.id === "email-benefits") {
    return (
      <div className={`${styles.wrapper} ${styles.emailWrapper}`}>
        <div className={styles.emailContent}>
          <p className={styles.emailIntro}>{item.name}</p>
          {item.bullets && (
            <ul className={styles.emailBulletList}>
              {item.bullets.map((bullet) => (
                <li key={bullet} className={styles.emailBullet}>
                  {bullet}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  }

  if (item.id === "myperfit") {
    const description =
      item.description ||
      "Integre MyPerfit para conectar 2clics y poder conectar contactos y crear listas.";

    return (
      <div className={styles.wrapper}>
        {!showMyPerfitConfig ? (
          <div className={styles.emailMarketingWrapper}>
            <div className={styles.emailMarketingMain}>
              <div className={styles.leftBlock}>
                <img
                  src="https://app.2clics.com.ar/img/integrations/perfit-logo.png"
                  alt="MyPerfit"
                  className={styles.myPerfitIcon}
                />
                <div className={styles.textBlock}>
                  <span className={styles.name}>MyPerfit</span>
                  <span className={styles.description}>{description}</span>
                </div>
              </div>
            </div>
            <div className={styles.emailMarketingActions}>
              <button
                type="button"
                className={`${styles.secondaryButton} ${styles.secondaryButtonBlue}`}
                onClick={() => setShowMyPerfitConfig(true)}
              >
                Ver configuración
              </button>
            </div>
          </div>
        ) : (
          <div className={styles.emailMarketingConfig}>
            <div className={styles.emailMarketingConfigHeader}>
              <div>
                <h3 className={styles.emailMarketingConfigTitle}>
                  {item.detailTitle || "Integración con MyPerfit"}
                </h3>
                <p className={styles.emailMarketingConfigSubtitle}>
                  {(item.detailParagraphs && item.detailParagraphs[0]) ||
                    "Conecta con tu cuenta de MyPerfit para poder sincronizar los contactos y crear listas."}
                </p>
              </div>
              <img
                src="https://app.2clics.com.ar/img/integrations/perfit-logo.png"
                alt="MyPerfit"
                className={styles.myPerfitIconLarge}
              />
            </div>

            <form
              className={styles.emailMarketingForm}
              onSubmit={(event) => event.preventDefault()}
            >
              {item.formFields &&
                item.formFields.map((field) => (
                  <label
                    key={field.id}
                    htmlFor={field.id}
                    className={styles.formLabel}
                  >
                    <span>{field.label}</span>
                    <input
                      id={field.id}
                      name={field.id}
                      className={styles.formInput}
                      type="text"
                    />
                  </label>
                ))}

              <button type="submit" className={styles.primaryButton}>
                {item.primaryActionLabel || "Guardar configuración"}
              </button>
            </form>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <button
        type="button"
        className={styles.header}
        onClick={hasExpandableContent ? onToggle : undefined}
      >
        <div className={styles.leftBlock}>
          {showChevronToggle && (
            <span
              className={
                isOpen
                  ? `${styles.arrowIcon} ${styles.arrowIconOpen}`
                  : styles.arrowIcon
              }
            >
              {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            </span>
          )}
          {item.id !== "red-urbany" && (
            <div className={styles.placeholderIcon}>
              {getIconForItem(type, item.id)}
            </div>
          )}
          {item.id === "red-urbany" && (
            <img
              src="https://i.ibb.co/84bzpL1C/imagen-2025-11-24-235947945.png"
              alt="Urbany"
              className={styles.UrbanyIconImage}
            />
          )}
          <div className={styles.textBlock}>
            <span className={styles.name}>{item.name}</span>
            <span className={styles.description}>{item.description}</span>
          </div>
        </div>
      </button>

      <div
        className={
          isOpen ? `${styles.content} ${styles.contentOpen}` : styles.content
        }
      >
        <div className={styles.contentInner}>
          {type === "calendar" && (
            <div className={styles.calendarLayout}>
              <div className={styles.calendarCopy}>
                {item.bullets && (
                  <ul className={styles.bulletList}>
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                )}
                <div className={styles.calendarActionsBlock}>
                  {item.primaryActionLabel && (
                    <button type="button" className={styles.primaryButton}>
                      {item.primaryActionLabel}
                    </button>
                  )}
                  {item.secondaryActionLabel && (
                    <button type="button" className={styles.secondaryButton}>
                      {item.secondaryActionLabel}
                    </button>
                  )}
                </div>
              </div>
              <div className={styles.calendarGraphic}>
                {renderRightIllustration()}
              </div>
            </div>
          )}

          {type === "accordion" && (
            <div className={styles.richTextBlock}>
              {item.id === "red-urbany" ? (
                <>
                  <div className={styles.radioGroup}>
                    <label className={styles.radioOption}>
                      <input
                        type="radio"
                        name="redUrbanyCommission"
                        defaultChecked
                      />
                      <span>
                        Compartir todas mis propiedades nuevas con un
                        <strong> 30% de comisión</strong>
                      </span>
                    </label>
                    <label className={styles.radioOption}>
                      <input type="radio" name="redUrbanyCommission" />
                      <span>
                        Compartir todas mis propiedades nuevas con un
                        <strong> 50% de comisión</strong>
                      </span>
                    </label>
                    <label className={styles.radioOption}>
                      <input type="radio" name="redUrbanyCommission" />
                      <span>
                        Decidiré luego si compartir mis nuevas propiedades
                      </span>
                    </label>
                  </div>
                  <div className={styles.buttonRow}>
                    <button
                      type="button"
                      className={`${styles.secondaryButton} ${styles.secondaryButtonBlue}`}
                    >
                      Guardar configuración
                    </button>
                    <button type="button" className={styles.primaryButton}>
                      Guardar y compartir propiedades
                    </button>
                  </div>
                </>
              ) : (
                <>
                  {item.detailTitle && (
                    <p className={styles.detailTitle}>{item.detailTitle}</p>
                  )}
                  {item.detailParagraphs &&
                    item.detailParagraphs.map((paragraph) => (
                      <p key={paragraph} className={styles.detailParagraph}>
                        {paragraph}
                      </p>
                    ))}
                  {item.bullets && (
                    <ul className={styles.bulletList}>
                      {item.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                  <div className={styles.buttonRow}>
                    {item.primaryActionLabel && (
                      <button type="button" className={styles.primaryButton}>
                        {item.primaryActionLabel}
                      </button>
                    )}
                    {item.secondaryActionLabel && (
                      <button type="button" className={styles.secondaryButton}>
                        {item.secondaryActionLabel}
                      </button>
                    )}
                  </div>
                </>
              )}
            </div>
          )}

          {type === "bullets" && (
            <div className={styles.richTextBlock}>
              {item.bullets && (
                <ul className={styles.bulletList}>
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}
            </div>
          )}

          {type === "accordion-form" && (
            <div className={styles.formBlock}>
              {item.detailTitle && (
                <p className={styles.detailTitle}>{item.detailTitle}</p>
              )}
              {item.detailParagraphs &&
                item.detailParagraphs.map((paragraph) => (
                  <p key={paragraph} className={styles.detailParagraph}>
                    {paragraph}
                  </p>
                ))}
              <form
                className={styles.formFields}
                onSubmit={(event) => event.preventDefault()}
              >
                {item.formFields &&
                  item.formFields.map((field) => (
                    <label
                      key={field.id}
                      htmlFor={field.id}
                      className={styles.formLabel}
                    >
                      <span>{field.label}</span>
                      <input
                        id={field.id}
                        name={field.id}
                        className={styles.formInput}
                        type="text"
                      />
                    </label>
                  ))}

                {item.primaryActionLabel && (
                  <button type="submit" className={styles.primaryButton}>
                    {item.primaryActionLabel}
                  </button>
                )}
              </form>
            </div>
          )}

          {type === "card" && !hasExpandableContent && (
            <div className={styles.placeholderCardContent}>
              <p className={styles.contentText}>
                Área de configuración para <strong>{item.name}</strong>. Aquí se
                mostrará la información detallada de la integración y los pasos
                para conectarla.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default IntegrationItem;
