import { Fragment, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useRequest from "../../../../hooks/use-request";
import ProductsItem from "../../HomePageItem/ProductsItem/ProductsItem";
import classes from "./ShopCategories.module.css";
// Là con của components/pages/ShopPageItem/ShopBody.js
// Cần get API để lấy dữ liệu sản phẩm về.
// Khi hiển thị sản phẩm, sử dụng lại giao diện đã được tạo trong trang HomePage,
// rồi truyền dữ liệu get API về vào đó components/pages/HomePageItem/ProductsItem/ProductsItem.js

const ShopCategories = (props) => {
  // State quản lí dữ liệu khi get API về.
  const [productData, setProductData] = useState();
  //Dùng usehook sendRequest để get API về
  const sendRequest = useRequest();

  // Tạo điều hướng link khi click vào sản phẩm
  const navigate = useNavigate();

  useEffect(() => {
    const getData = (data) => {
      setProductData(data);
    };
    sendRequest(getData);
  }, []);

  // Function click điều hướng sản phẩm
  const clickHandler = (product) => {
    navigate(`/detail/${product._id.$oid}`);
  };

  // Function nếu có dữ liệu get về và state category ở ShopBody không là all thì trả về dữ liệu được lọc theo category dạng string hoặc là all thì trả về dữ liệu toàn bộ
  const productCategory = (category) => {
    if (productData && category !== "all") {
      return productData.filter((item) => item.category === category);
    }

    if (productData && category === "all") {
      return productData;
    }
  };

  return (
    <Fragment>
      <div className={classes.maincategories}>
        <div className="row row-cols-3">
          {productCategory(props.category) &&
            productCategory(props.category).map((product) => (
              <div className="col" key={product._id.$oid}>
                <ProductsItem
                  src={product.img1}
                  name={product.name}
                  price={product.price}
                  showPopupHandler={clickHandler.bind(this, product)}
                />
              </div>
            ))}
        </div>
      </div>
    </Fragment>
  );
};

export default ShopCategories;
