import { Fragment } from "react";
import classes from "./CheckoutBanner.module.css";
import { useNavigate } from "react-router-dom";
// Là con của components/CheckoutPage.js
// Banner này có gia diện đơn giản. Thiết lập thêm điều hướng sang trang home và cart
// khi click vào nút HOME và CART

const CheckoutBanner = () => {
  const navigate = useNavigate();
  const handlerHome = () => {
    navigate("/");
  };

  const handlerCart = () => {
    navigate("/cart");
  };

  return (
    <Fragment>
      <section className={classes.main}>
        <div>
          <h1>CHECKOUT</h1>
        </div>
        <div className={classes.btn}>
          <button className={classes.btn1} onClick={handlerHome}>
            HOME /
          </button>
          <button className={classes.btn2} onClick={handlerCart}>
            CART /
          </button>
          <button className={classes.btn3}>CHECKOUT</button>
        </div>
      </section>
    </Fragment>
  );
};

export default CheckoutBanner;
