import { Fragment } from "react";
import classes from "./HomeInfo.module.css";

// 4. Các thông tin khác (HomePage) - Là con của components/HomePgae.js
// Hiển thị một số thông tin cơ bản.

const HomeInfo = () => {
  return (
    <Fragment>
      <div className={classes.maintop}>
        <div>
          <h4>FREE SHIPPING</h4>
          <p>Free shipping worlwide</p>
        </div>
        <div>
          <h4>24 X 7 SERVICE</h4>
          <p>Free shipping worlwide</p>
        </div>
        <div>
          <h4>FESTIVAL OFFER</h4>
          <p>Free shipping worlwide</p>
        </div>
      </div>
      <div className={classes.mainbottom}>
        <div>
          <h3>LET'S BE FRIEND!</h3>
          <p>Nisi nisi tempor consequat laboris nisi.</p>
        </div>
        <div>
          <input type="text" placeholder="Enter your email address" size="80" />
          <button type="button" className={classes.btn}>
            Subscribe
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default HomeInfo;
