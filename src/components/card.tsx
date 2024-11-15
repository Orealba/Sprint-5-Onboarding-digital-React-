import './card.css';

export default function Card({
  title,
  description,
  bgColor,
  image,
}: {
  title: string;
  description: string;
  bgColor: string;
  image: string;
}): JSX.Element {
  return (
    <div className="max-w-sm  p-5  ">
      {/* card */}
      <div className="border w-64 h-96 rounded-full shadow-lg   ">
        <a href="#">
          <img
            className="rounded-t-lg w-50 pt-16 px-6 "
            src={image}
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
          <p className="flex mb-8 text-sm font-normal text-gray-700 text-left">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
