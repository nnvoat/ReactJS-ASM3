import { Fragment } from "react";
import imgBanner from "../../../img-asm03/banner1.jpg";
import classes from "./HomeBanner.module.css";

// 1. Mục Banner: Banner (HomePage) - Là con của components/HomePage.js
// Phần này hiển thị ảnh banner mặc định đã có, được lưu trong folder img-asm03
// Chuyển trang shop khi click vào nút Browse collections

const HomeBanner = () => {
  return (
    <Fragment>
      <div className={classes.bannerimg}>
        <img src={imgBanner} alt="banner" width="100%" />
        <div className={classes.bannertext}>
          <p>NEW INSPIRATION 2020</p>
          <h1>20% OFF NEW SEASON</h1>
          <button onClick={() => window.location.replace("/shop")}>
            Browse collections
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default HomeBanner;
