import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Card = ({ prod }) => {
  return (
    <div className="my-8">
      <img src={prod.image} alt={prod.name} />
      <h1 className="font-semibold text-lg">{prod.name}</h1>
      <div className="flex items-center justify-between mt-2">
        <span className="bg-black font-semibold rounded-full px-2 text-white ">
          {prod.brand}
        </span>
        <span className="text-2xl">${prod.price}</span>
      </div>
      <div className="flex items-center justify-center">
        <Link to={`/product/${prod._id}`}>
        <button className="font-semibold text-xl mt-4 flex items-center gap-2 bg-gray-200  rounded-xl py-2 px-4">
          View Details <FaArrowRight/>
        </button>
        </Link>
      </div>
    </div>
  );
};
export default Card;
