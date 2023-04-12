import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import classes from "./Navbar.module.css";

import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { userActions } from "../../store/user";

// Dùng useNavigate hook để điều hướng Navbar

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userArr = JSON.parse(localStorage.getItem("currentUser"));
  // console.log(userArr);

  const handleLogout = () => {
    dispatch(userActions.onLogout());
  };

  return (
    <Fragment>
      <header className={classes.header}>
        <div>
          <button onClick={() => navigate("/")} className={classes.home}>
            Home
          </button>
          <button onClick={() => navigate("/shop")}>Shop</button>
        </div>
        <h2 onClick={() => navigate("/")}>BOUTIQUE</h2>
        <div className={classes.user}>
          {userArr ? (
            <div className={classes.header2}>
              <button onClick={() => navigate("/cart")}>
                <FaShoppingCart className={classes.icon} />
                Cart
              </button>
              <div>
                <button>{userArr.fullname.substring(0, 6) + "..."}</button>
                <button onClick={handleLogout}>(Logout)</button>
              </div>
            </div>
          ) : (
            <div>
              <button onClick={() => navigate("/cart")}>
                <FaShoppingCart className={classes.icon} />
                Cart
              </button>
              <button onClick={() => navigate("/login")}>
                <FaUser className={classes.icon} />
                Login
              </button>
            </div>
          )}
        </div>
      </header>
    </Fragment>
  );
};

export default Navbar;
