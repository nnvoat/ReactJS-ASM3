import { Fragment } from "react";
import classes from "./HomeMenu.module.css";
import product1 from "../../../img-asm03/product_1.png";
import product2 from "../../../img-asm03/product_2.png";
import product3 from "../../../img-asm03/product_3.png";
import product4 from "../../../img-asm03/product_4.png";
import product5 from "../../../img-asm03/product_5.png";
// 2. Mục Mennu: Danh sách các danh mục (HomePage) - Là con của components/HomePage.js
// Phần này được cấu trúc làm 3 phần:
// Phần trên hiển thị tên collections
// Phần giữa và dưới hiển thị ảnh mặc định được lưu trong folder im-asm03
// Phần giữa và dưới này cấu trúc theo dạng flex để hiển thị ảnh
// Khi click vào ảnh, chuyển trang sang trang shop để xem sản phẩm

const HomeMenu = () => {
  const clickImg = () => {
    window.location.replace("/shop");
  };

  return (
    <Fragment>
      <main>
        <div className={classes.text}>
          <p>CAREFULLY CREATED COLLECTIONS</p>
          <h2>BROWSE OUR CATEFORIES</h2>
        </div>
        <div className={classes.flex1}>
          <img
            src={product1}
            alt="product1"
            className={classes.imgpd1}
            onClick={clickImg}
          />
          <img
            src={product2}
            alt="product2"
            className={classes.imgpd2}
            onClick={clickImg}
          />
        </div>
        <div className={classes.flex2}>
          <img
            src={product3}
            alt="product3"
            className={classes.imgpd3}
            onClick={clickImg}
          />
          <img
            src={product4}
            alt="product4"
            className={classes.imgpd4}
            onClick={clickImg}
          />
          <img
            src={product5}
            alt="product5"
            className={classes.imgpd5}
            onClick={clickImg}
          />
        </div>
      </main>
    </Fragment>
  );
};

export default HomeMenu;
