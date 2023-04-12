import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useRequest from "../../../hooks/use-request";
import ProductsItem from "./ProductsItem/ProductsItem";
import classes from "./HomeProducts.module.css";
import Popup from "./Popup/Popup";
import { popupActions } from "../../../store/popup";
// 3. Danh sách các sản phẩm (HomePage) - Là con của components/HomePage.js
// Là cha của components/pages/HomePageItem/Popup (Để show chi tiết sản phẩm khi click vào)
// Hiển thị sản phẩm do lấy thông tin từ API về. (dùng useRequest của components/hooks)
// name, price, img1, desc: long_desc, key: _id.$oid
// Tạo riêng sản phẩm riêng ở component ProductsItem
// Hiển thị product cụ thể ở Popup khi click vào ảnh
// Quản lí các thông tin lấy về thông qua useState
// Dùng redux components/store/popup để quản lí state, khi click sản phẩm sẽ hiển popup chi tiết sản phẩm

const HomeProducts = () => {
  const dispatch = useDispatch();
  //Gọi tới state trong redux components/store/popup.js
  const isShowPopup = useSelector((state) => state.popup.isShowPopup);

  //State thông tin trả về khi call API
  const [productsData, setProductsData] = useState();

  // State khi click vào sản phẩm, sẽ thêm thông tin vào đây để showpopup sản phẩm
  const [productShow, setProductShow] = useState();

  const sendRequest = useRequest();

  useEffect(() => {
    const getData = (data) => {
      setProductsData(data);
    };

    sendRequest(getData);
  }, [sendRequest]);

  // console.log(productsData);
  // console.log(isShowPopup);

  //function show khi click vào sản phảm, sẽ lưu thông tin sản phẩm vào state productShow
  const showPopupHandler = (item) => {
    dispatch(popupActions.showPopup());
    setProductShow(item);

    // console.log(item.long_desc);
    // console.log(item._id.$oid);
  };

  //function ẩn. Gọi tới state false qua dispath
  const hidePopupHandler = () => {
    dispatch(popupActions.hidePopup());
  };

  return (
    <Fragment>
      <div className={classes.text}>
        <p className={classes.textp}>MADE THE HARD WAY</p>
        <h4>TOP TRENDING PRODUCTS</h4>
      </div>
      <div className="row row-cols-4">
        {productsData &&
          productsData.map((item) => (
            <div className="col" key={item._id.$oid}>
              <ProductsItem
                id={item._id.$oid}
                src={item.img1}
                name={item.name}
                price={item.price}
                showPopupHandler={showPopupHandler.bind(this, item)}
              />
            </div>
          ))}
      </div>
      {isShowPopup && (
        <Popup
          show={isShowPopup}
          id={productShow._id.$oid}
          src={productShow.img1}
          name={productShow.name}
          price={Number(productShow.price).toLocaleString("de-DE")}
          desc={productShow.long_desc}
          hidePopupHandler={hidePopupHandler}
        />
      )}
    </Fragment>
  );
};

export default HomeProducts;
