import { useDispatch, useSelector } from "react-redux";
import logo from "../assets/images/TR.png";
import { goToCart, goToHome } from "../redux/navigation/action";

const Navbar = () => {
  const dispatch = useDispatch();
  const { totalCartQuantity } = useSelector((state) => state.cart);
  return (
    <nav className=" py-4" style={{ backgroundColor: "lightgray" }}>
      <div className="navBar">
        <a href="#" onClick={() => dispatch(goToHome())}>
          <img
            src={logo}
            alt="LWS"
            className="max-w-[140px]"
            style={{ height: "40px" }}
          />
        </a>

        <div className="flex gap-4">
          <a
            href="#"
            className="navHome"
            id="lws-home"
            onClick={() => dispatch(goToHome())}
          >
            {" "}
            Home{" "}
          </a>
          <a
            href="#"
            className="navCart"
            id="lws-cart"
            onClick={() => dispatch(goToCart())}
          >
            <i className="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
            <span id="lws-totalCart">{totalCartQuantity}</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
