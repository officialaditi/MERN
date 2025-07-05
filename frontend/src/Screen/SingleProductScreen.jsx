import axios from "axios";
import { useEffect, useState } from "react";
import { MdOutlineArrowBack } from "react-icons/md";
import { Link, useParams } from "react-router-dom";

const SingleProductScreen = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchSingleProduct = async () => {
      const { data } = await axios.get(`/api/products/${id}`);
      setProduct(data);
    };
    fetchSingleProduct();
  }, [id]);

  return (
    <div className="max-w-7xl mx-auto p-4">
      {/* Back Button */}
      <Link to="/">
        <button className="bg-gray-200 rounded-full p-3 mb-6 hover:bg-gray-300">
          <MdOutlineArrowBack size={24} />
        </button>
      </Link>

      {/* Product Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Product Image */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full max-h-[500px] object-cover rounded-xl shadow-md"
        />

        {/* Product Details */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-gray-600">{product.description}</p>

          <div className="text-lg space-y-2">
            <p><span className="font-semibold">Brand:</span> {product.brand}</p>
            <p><span className="font-semibold">Category:</span> {product.category}</p>
            <p><span className="font-semibold">Price:</span> ₹{product.price}</p>
            <p><span className="font-semibold">In Stock:</span> {product.countInStock}</p>
            <p><span className="font-semibold">Rating:</span> ⭐ {product.rating} ({product.numReviews} reviews)</p>
          </div>

          <button className="mt-4 bg-black text-white text-lg px-6 py-3 rounded-full hover:bg-gray-900 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProductScreen;
