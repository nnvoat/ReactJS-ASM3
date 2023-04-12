import { Fragment } from "react";
import CheckoutBanner from "./CheckoutPageItem/CheckoutBanner";
import CheckoutBody from "./CheckoutPageItem/CheckoutBody";
// Trang có giao diện gồm 2 phần là CheckoutBanner và CheckoutBody
// Có 2 con là componentns/pages/CheckoutPageItem/CheckoutBanner.js
// và componentns/pages/CheckoutPageItem/CheckoutBody.js

const CheckoutPage = () => {
  return (
    <Fragment>
      <CheckoutBanner />
      <CheckoutBody />
    </Fragment>
  );
};

export default CheckoutPage;
