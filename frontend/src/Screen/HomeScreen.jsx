import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Component/Card";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products");
      setProducts(data);
    };
    fetchProducts();
  }, []);
  return (
    <div>
      <h1 className="font-bold text-3xl text-center mt-3 underline">
        Latest Collection
      </h1>
      <div className="grid grid-cols-4 gap-8 max-w-7xl mx-auto">
        {products.map((prod) => (
          <Card prod={prod} key={prod._id} />
        ))}
      </div>
    </div>
  );
};
export default HomeScreen;
