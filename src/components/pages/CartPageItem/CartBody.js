import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import classes from "./CartBody.module.css";
import { FaGift } from "react-icons/fa";
import CartProduct from "./CartProduct/CartProduct";
// Là con của components/CartPage.js
// Là cha của components/pages/CartPageItem/CartProduct/CartPoduct.js
// Trang hiển thị chi tiết sản phẩm riêng là CartProduct để dễ quản lí
// Dùng react-bootstrap để thiết kế giao diện hiển thị

const CartBody = () => {
  const navigate = useNavigate();
  //State tổng giá trị sản phẩm
  const [totalProduct, setTotalProduct] = useState(0);
  //State quản lí sản phẩm đã lấy
  const [dataProduct, setDataProduct] = useState();
  // Lấy sản phẩm đã được thêm rồi lưu trong localStorage với redux
  const cartItems = useSelector((state) => state.cart.listCart);
  // console.log(cartItems);

  useEffect(() => {
    setDataProduct(cartItems);
    // console.log(dataProduct);

    //Khi đã có sản phẩm, dùng reduce() để tính tổng
    if (dataProduct) {
      const totalPrice = dataProduct.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
      setTotalProduct(totalPrice);
    }
  });

  //Chuyển hướng sang trang shop khi click vào
  const handlerShopPage = () => {
    navigate("/shop");
  };

  //Chuyển hướng sang trang Checkout khi click vào
  const handlerCheckoutPage = () => {
    navigate("/checkout");
  };

  return (
    <Fragment>
      <h4 className={classes.shoppingcart}>SHOPING CART</h4>
      <Container fluid>
        <Row className={classes.productinfo}>
          <Col sm={9} className={classes.productcol1}>
            <div className={classes.cartmain}>
              <h6>IMAGE</h6>
              <h6>PRODUCT</h6>
              <h6>PRICE</h6>
              <h6>QUANTITY</h6>
              <h6>TOTAL</h6>
              <h6>REMOVE</h6>
            </div>
            {dataProduct &&
              dataProduct.map((item) => (
                <div key={item.id}>
                  <CartProduct
                    id={item.id}
                    img={item.img}
                    name={item.name}
                    price={item.price}
                    quantity={item.quantity}
                  />
                </div>
              ))}
          </Col>
          <Col sm={3} className={classes.totalmain}>
            <h4>CART TOTAL</h4>
            <div className={classes.totalflex1}>
              <h6>SUBTOTAL</h6>
              <p>{Number(totalProduct).toLocaleString("de-DE")} VNĐ</p>
            </div>
            <div className={classes.totalflex2}>
              <h6>TOTAL</h6>
              <p>{Number(totalProduct).toLocaleString("de-DE")} VNĐ</p>
            </div>
            <div className={classes.totalbtn}>
              <input type="text" placeholder="Enter your coupon" />
              <button>
                <FaGift className={classes.icongift} />
                Apply coupon
              </button>
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm={9} className={classes.checkout}>
            <button onClick={handlerShopPage} className={classes.btn1}>
              &larr; Continue shopping
            </button>
            <button onClick={handlerCheckoutPage} className={classes.btn2}>
              Proceed to checkout &rarr;
            </button>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default CartBody;
