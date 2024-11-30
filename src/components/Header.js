import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  // let btnName = "Login";

  const [btnNameReact, setLogOut] = useState("Login");

  const onlineStatus = useOnlineStatus();


// Subscribing to the store using selector
  const cartItems = useSelector((store)=>store.cart.items)

  return (
    <div className="flex justify-between lg:bg-red-200 shadow-lg mb-1 sm:bg-blue-200 md:bg-yellow-200 ">
      <div className="logo  w-48">
        <Link to="/">
          <img height={130} src={LOGO_URL}></img>
        </Link>
      </div>
      <div className="nav-items flex items-center">
        <ul className="flex p-4 m-4 ">
          <li className="px-4">Status : {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/About">About us</Link>
          </li>
          <li className="px-4">
            <Link to="/Contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/cart">Cart ({cartItems.length} items)</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <button
            className="login"
            onClick={() => {
              btnNameReact == "Login"
                ? setLogOut("LogOut")
                : setLogOut("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
