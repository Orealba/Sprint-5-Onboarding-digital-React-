export default function MyButton() {
  return (
    <div className="flex  justify-end space-x-2">
      <button
        type="button"
        className="text-white bg-gray-800  font-medium rounded-full text-sm p-2 text-center inline-flex items-center ">
        <svg
          className="w-4 h-4"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10">
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 5H1m0 0l4 4m-4-4l4-4"
          />
        </svg>
        <span className="sr-only">Icon description</span>
      </button>
      <button
        type="button"
        className="  text-white bg-gray-800  font-medium rounded-full text-sm p-2 text-center inline-flex items-center ">
        <svg
          className="w-4 h-4"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10">
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
        <span className="sr-only">Icon description</span>
      </button>
    </div>
  );
}
