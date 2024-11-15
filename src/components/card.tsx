import './card.css';

export default function Card({
  title,
  description,
  bgColor,
  image,
}: {
  title: any;
  description: any;
  bgColor: any;
  image: any;
}): JSX.Element {
  return (
    <div>
      {/* card */}
      <div>
        <div className={`max-w-sm bg-white border border-gray-200 rounded-lg shadow ${bgColor}`}>
          <a href="#">
            <img
              className="rounded-t-lg "
              src={image}
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                {title}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 ">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
