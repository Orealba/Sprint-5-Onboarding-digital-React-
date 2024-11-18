import MyButton from './MyButton';
import Indicator from './Indicator';
import './Card.css';
import { useState, useEffect } from 'react';

export default function Card({
  title,
  description,
  bgColor,
  image,
  onNext,
  onPrev,
  step,
  totalSteps,
  onStepChange,
}: {
  title: string;
  description: string;
  bgColor: string;
  image: string;
  onNext: () => void;
  onPrev: () => void;
  step: number;
  totalSteps: number;
  onStepChange: (index: number) => void;
}): JSX.Element {
  const [currentImage, setCurrentImage] = useState(image);
  const [animationClass, setAnimationClass] = useState('image-enter');

  useEffect(() => {
    setAnimationClass('image-exit');

    const timer = setTimeout(() => {
      setCurrentImage(image);
      setAnimationClass('image-enter');
    }, 500);

    return () => clearTimeout(timer);
  }, [step, image]);

  return (
    <div className="max-w-sm  p-5  ">
      {/* card */}
      <div className=" w-64  rounded shadow-lg relative card-css ">
        <a href="#">
          <img
            className={` pt-6 ${animationClass} img-card`}
            src={currentImage}
            alt={title}
            style={{ backgroundColor: bgColor, paddingBottom: 100 }}
          />
        </a>
        <div className="p-5 m-5 bg-white rounded-b-lg  ">
          <a href="#">
            <p className="flex mb-2 text-sm font-semi-bold tracking-tight text-gray-900 text-left">
              {title}
            </p>
          </a>
          <p className="flex mb-8 text-xs font-normal text-gray-700 text-left">
            {description}
          </p>
          <Indicator
            totalSteps={totalSteps}
            step={step}
            onStepChange={onStepChange}
          />
          <div className="flex justify-end space-x-2">
            {step > 0 && (
              <MyButton
                onClick={onPrev}
                direction="back"
              />
            )}
            {step < totalSteps - 1 && (
              <MyButton
                onClick={onNext}
                direction="forward"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
