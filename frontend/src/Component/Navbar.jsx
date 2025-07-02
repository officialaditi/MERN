import { Link } from "react-router-dom";
import { RiAccountCircleFill } from "react-icons/ri";
import { BsCartCheck } from "react-icons/bs";


const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-3 px-5 bg-slate-300">
      
        <Link to='/'>
          <h1 className="font-bold text-2xl uppercase tracking-wide">Rst-Store</h1>
        </Link>
     
      <ul className="flex items-center justify-between gap-10 font-semibold text-xl">
        <Link to='/cart'>
          <li className=" hover:cursor-pointer">Cart <BsCartCheck/></li>
        </Link>
        <Link to='/login'>
          <li className="hover: cursor-pointer">Login <RiAccountCircleFill/></li>
        </Link>
      </ul>
    </div>
  );
};
export default Navbar;
