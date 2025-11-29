import React, { useState } from 'react';
import TypeOfVenture from '../components/Barra_Navegacion/TypeOfVenture';
import GeneralInformation from '../components/Barra_Navegacion/GeneralInformation';
import Multimedia from '../components/Barra_Navegacion/Multimedia';
import Plans from '../components/Barra_Navegacion/Plans';
import Location from '../components/Barra_Navegacion/Location';
import Amenities from '../components/Barra_Navegacion/Amenities';
import Description from '../components/Barra_Navegacion/Description';
import styles from './FormForVentures.module.css';

export default function FormForVentures() {
  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState([]);

  const steps = [
    { number: 1, label: 'Tipo' },
    { number: 2, label: 'Información' },
    { number: 3, label: 'Multimedia' },
    { number: 4, label: 'Planos' },
    { number: 5, label: 'Ubicación' },
    { number: 6, label: 'Amenities' },
    { number: 7, label: 'Descripción' },
  ];

  const handleNext = () => {
    if (currentStep < 7) {
      if (!completedSteps.includes(currentStep)) {
        setCompletedSteps([...completedSteps, currentStep]);
      }
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleStepClick = (stepNumber) => {
    setCurrentStep(stepNumber);
  };

  return (
    <div className={styles.container}>
      <div className={styles.stepNavigation}>
        {steps.map((step) => (
          <div
            key={step.number}
            className={`${styles.step} ${currentStep === step.number ? styles.active : ''} ${completedSteps.includes(step.number) ? styles.completed : ''}`}
            onClick={() => handleStepClick(step.number)}
          >
            <div className={styles.stepNumber}>{step.number}</div>
            <span className={styles.stepLabel}>{step.label}</span>
          </div>
        ))}
      </div>

      <div className={styles.content}>
        {currentStep === 1 && <TypeOfVenture onNext={handleNext} />}
        {currentStep === 2 && <GeneralInformation onNext={handleNext} onPrev={handlePrev} />}
        {currentStep === 3 && <Multimedia onNext={handleNext} onPrev={handlePrev} />}
        {currentStep === 4 && <Plans onNext={handleNext} onPrev={handlePrev} />}
        {currentStep === 5 && <Location onNext={handleNext} onPrev={handlePrev} />}
        {currentStep === 6 && <Amenities onNext={handleNext} onPrev={handlePrev} />}
        {currentStep === 7 && <Description onPrev={handlePrev} />}
      </div>
    </div>
  );
}
