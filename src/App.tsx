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
      bgColor: '#2596be',
      image: '../public/images/Time Management.svg',
    },
    {
      title: 'Programa proyectos propios',
      description:
        'Mejor 10 horas trabajando en proyectos propios, que 10 horas mirando tutoriales. La motivación y la implicación en el proyecto ayudará a acelerar tu aprendizaje.',
      bgColor: '',
      image: '../public/images/Programming (1).svg',
    },
    {
      title: 'Intenta descansar',
      description:
        'Descansar bien y desconectar es vital. De esta forma reducirás el estrés y la ansiedad. Mejorarás tu concentración y consolidarás tu aprendizaje.',
      bgColor: '',
      image: '../public/images/Meditation (1).svg',
    },
  ];
  return (
    <>
      <Card
        image={tutorialData[0].image}
        title={tutorialData[0].title}
        description={tutorialData[0].description}
        bgColor={tutorialData[0].bgColor}
      />
    </>
  );
}

export default App;
