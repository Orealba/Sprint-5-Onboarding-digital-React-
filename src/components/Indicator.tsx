import './Indicator.css';
export default function Indicator({
  totalSteps,
  step,
  onStepChange,
}: {
  totalSteps: number;
  step: number;
  onStepChange: (index: number) => void;
}) {
  return (
    <div className="flex space-x-2 justify-start mt-4 indicator-css">
      {Array.from({ length: totalSteps }).map((_, index) => (
        <div
          key={index}
          onClick={() => onStepChange(index)}
          className={`w-3 h-3 rounded-full ${
            index === step ? 'bg-gray-700' : 'bg-gray-300'
          }  `}
        />
      ))}
    </div>
  );
}
