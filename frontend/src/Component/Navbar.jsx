import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fixed top-2 inset-x-2 bg-black text-white rounded-full">
      <div className="flex items-center justify-between py-2 px-4 ">
        <Link to="/">
          <h1 className="font-bold text-xl md:text-2xl uppercase hover:cursor-pointer">
            rst-store
          </h1>
        </Link>
        <ul className="flex gap-6 text-2xl">
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <Link to="/account">Account</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
