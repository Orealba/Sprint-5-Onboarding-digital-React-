import { useState } from 'react';
import './App.css';
import Card from './components/Card';

interface TutorialData {
  image: string;
  title: string;
  description: string;
  bgColor: string;
}
function App() {
  const [step, setStep] = useState<number>(0);
  const [direction, setDirection] = useState<'forward' | 'backward'>('forward');

  let tutorialData: TutorialData[] = [
    {
      title: 'Dedica muchas horas',
      description:
        'Un mínimo de 30 horas a la semana. Si no tienes suficiente, tendrás que dedicarle más horas. Al principio parece imposible, pero notarás una mejoría rápidamente.',
      bgColor: '#4da2a9',
      image: '../public/images/Time Management Graphic.png',
    },
    {
      title: 'Programa proyectos propios',
      description:
        'Mejor 10 horas trabajando en proyectos propios, que 10 horas mirando tutoriales. La motivación y la implicación en el proyecto ayudará a acelerar tu aprendizaje.',
      bgColor: '#d3d4d9',
      image: '../public/images/Programming SVG.png',
    },
    {
      title: 'Intenta descansar',
      description:
        'Descansar bien y desconectar es vital. De esta forma reducirás el estrés y la ansiedad. Mejorarás tu concentración y consolidarás tu aprendizaje.',
      bgColor: '#fed167',
      image: '../public/images/Meditation (1).svg',
    },
  ];

  let nexStep = () => {
    if (step < tutorialData.length - 1) {
      setDirection('forward'); 
      setStep(step + 1);
    }
  };

  let prevStep = () => {
    if (step > 0) {
      setDirection('backward'); 
      setStep(step - 1);
    }
  };

  const handleStepChange = (index: number) => {
    setDirection(index > step ? 'forward' : 'backward');
    setStep(index);
  };

  return (
    <>
      <div className="flex d-flex bg-gray-100">
        <Card
          image={tutorialData[step].image}
          title={tutorialData[step].title}
          description={tutorialData[step].description}
          bgColor={tutorialData[step].bgColor}
          onNext={nexStep}
          onPrev={prevStep}
          step={step}
          totalSteps={tutorialData.length}
          onStepChange={handleStepChange}
          direction={direction}
        />
      </div>
    </>
  );
}

export default App;
