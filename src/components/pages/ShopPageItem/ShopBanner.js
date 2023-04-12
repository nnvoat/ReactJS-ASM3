import { Fragment } from "react";
import classes from "./ShopBanner.module.css";
// Là con của components/ShopPage.js
// Banner phần Shop này hiển thị đơn giản

const ShopBanner = () => {
  return (
    <Fragment>
      <section className={classes.main}>
        <div>
          <h1>SHOP</h1>
        </div>
        <div className={classes.btn}>
          <button>SHOP</button>
        </div>
      </section>
    </Fragment>
  );
};

export default ShopBanner;
