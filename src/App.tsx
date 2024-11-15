//import { useState } from 'react';

import './App.css';
import Card from './components/card';

interface TutorialData {
  image: string;
  title: string;
  description: string;
  bgColor: string;
}
function App() {
  // const [step, setStep] = useState<number>(0);
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
  return (
    <>
      <div className="flex d-flex  bg-gray-100">
        <Card
          image={tutorialData[0].image}
          title={tutorialData[0].title}
          description={tutorialData[0].description}
          bgColor={tutorialData[0].bgColor}
        />
        <Card
          image={tutorialData[1].image}
          title={tutorialData[1].title}
          description={tutorialData[1].description}
          bgColor={tutorialData[1].bgColor}
        />
        <Card
          image={tutorialData[2].image}
          title={tutorialData[2].title}
          description={tutorialData[2].description}
          bgColor={tutorialData[2].bgColor}
        />
      </div>
    </>
  );
}

export default App;
