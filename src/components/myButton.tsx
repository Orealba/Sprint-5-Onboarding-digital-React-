import './MyButton.css';

interface MyButtonProps {
  onClick: () => void;
  direction: 'back' | 'forward';
}

export default function MyButton({ onClick, direction }: MyButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="   font-medium rounded-full text-sm p-2 text-center inline-flex items-center  my-button-css">
      <svg
        className="w-4 h-4"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 10">
        <path
          
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d={
            direction === 'forward'
              ? 'M1 5h12m0 0L9 1m4 4L9 9'
              : 'M13 5H1m0 0l4 4m-4-4l4-4'
          }
          className="my-button-css-arrow"
        />
      </svg>
      <span className="sr-only">
        {direction === 'forward' ? 'Next' : 'Previous'}
      </span>
    </button>
  );
}
