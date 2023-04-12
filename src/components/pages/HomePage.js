import { Fragment } from "react";
// HomePage được xây dựng dựa trên các mục nhỏ: 1: Banner, 2: Danh sách các danh mục, 3: Danh sách các sản phẩm, 4: Các thông tin khác, 5: Chat Popup
// Các mục nhỏ này nằm trong components/pages/HomePageItem
import HomeBanner from "./HomePageItem/HomeBanner";
import HomeMenu from "./HomePageItem/HomeMenu";
import HomeProducts from "./HomePageItem/HomeProducts";
import HomeInfo from "./HomePageItem/HomeInfo";
import ChatPopup from "./HomePageItem/ChatPopup/ChatPopup";

const HomePage = () => {
  return (
    <Fragment>
      <HomeBanner />
      <HomeMenu />
      <HomeProducts />
      <HomeInfo />
      <ChatPopup />
    </Fragment>
  );
};

export default HomePage;
