import "./card.css";

function Card(props) {
  return (
    <>
      <div className="overflow-hidden shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl rounded-lg cursor-pointer">
        <div className="w-full block h-full">
          <img
            alt="blog photo"
            src={props.value.picture_url}
            className="max-h-40 w-full object-cover"
          />
          <div className="w-full p-4">
            <p className="text-[var(--clr-green)] text-2xl font-medium">
              {props.value.title}
            </p>
            <a className="text-sm font-medium mb-2">
              <i className="fa-solid fa-location-dot"></i>
              <span className="ml-2">{props.value.address}</span>
            </a>
            <p className="text-md mt-2">
              It is difficult to believe that we have become so used to having
              instant access to information at...
              <a className="inline-flex text-indigo-500" href="#">
                Read More
              </a>
            </p>
            <div className="flex flex-wrap items-center  gap-8">
              <div className="flex items-center  gap-1 mt-2">
                <i className="fa-solid fa-indian-rupee-sign"></i>
                <span>{props.value.rent_per_month}</span>
              </div>

              <div className="flex items-center  gap-1 mt-2">
                <i className="fa-solid fa-house-user"></i>
                <span>{props.value.type}</span>
              </div>
            </div>

            <button className="btn btn-green | mt-4 hover:scale-105 transition hover:shadow">
              Details
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
