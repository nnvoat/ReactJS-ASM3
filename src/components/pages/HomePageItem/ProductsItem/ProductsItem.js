import { Fragment } from "react";
import classes from "./ProductsItem.module.css";

// Sản phẩm cụ thể ở đây.
// Có component cha là HomeProducts

const ProductsItem = (props) => {
  const showPopupHandler = () => {
    props.showPopupHandler();
  };

  return (
    <Fragment>
      <div className={classes.itemflex}>
        <img
          src={props.src}
          alt="products-img"
          className={classes.imgproduct}
          onClick={showPopupHandler}
        />
        <p className={classes.textname}>{props.name}</p>
        <p className={classes.textprice}>
          {Number(props.price).toLocaleString("de-DE")} VNĐ
        </p>
      </div>
    </Fragment>
  );
};

export default ProductsItem;
