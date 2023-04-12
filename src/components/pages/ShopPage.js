import { Fragment } from "react";
import ShopBanner from "./ShopPageItem/ShopBanner";
import ShopBody from "./ShopPageItem/ShopBody";
// 6. Giao diện xem danh sách sản phẩm
// Phần hiển thị này chia làm 2 phần: ShopBanner và ShopBody
// 2 phần này nằm ở components/pages/ShopPageItem

const ShopPage = () => {
  return (
    <Fragment>
      <ShopBanner />
      <ShopBody />
    </Fragment>
  );
};

export default ShopPage;
