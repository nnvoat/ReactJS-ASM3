import { Fragment } from "react";
import CartBanner from "./CartPageItem/CartBanner";
import CartBody from "./CartPageItem/CartBody";
// Trang chính chia làm 2 phần. Có 2 trang con là components/pages/CartPageItem/CartBanner.js
// và components/pages/CartPageItem/CartBody.js

const CartPage = () => {
  return (
    <Fragment>
      <CartBanner />
      <CartBody />
    </Fragment>
  );
};

export default CartPage;
