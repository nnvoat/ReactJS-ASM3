import { Fragment } from "react";
import DetailProduct from "./DetailPageItem/DetailProduct";
// 6. Giao diện xem danh sách sản phẩm
// Nội dung trang con nằm ở components/pages/DetailPageItem

const DetailPage = () => {
  return (
    <Fragment>
      <DetailProduct />
    </Fragment>
  );
};

export default DetailPage;
