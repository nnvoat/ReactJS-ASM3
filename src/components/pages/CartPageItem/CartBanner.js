import { Fragment } from "react";
import classes from "./CartBanner.module.css";
// Là con của components/CartPage.js

const CartBanner = () => {
  return (
    <Fragment>
      <section className={classes.main}>
        <div>
          <h1>CART</h1>
        </div>
        <div className={classes.btn}>
          <button>CART</button>
        </div>
      </section>
    </Fragment>
  );
};

export default CartBanner;
