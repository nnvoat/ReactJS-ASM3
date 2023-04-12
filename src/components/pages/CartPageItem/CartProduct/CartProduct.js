import { Fragment, useEffect } from "react";
import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useState } from "react";
import classes from "./CartProduct.module.css";
import { Container, Row, Col } from "react-bootstrap";
import { cartActions } from "../../../../store/cart";
// Là con của components/pages/CartPageItem/CartBody.js
// Hiển thị giao diện chi tiết sản phẩm
// Dùng redux cart để quản lí sản phẩm

const CartProduct = (props) => {
  const dispatch = useDispatch();
  //State tổng giá trị sản phảm tương ứng với quantity tăng giảm
  const [totalPrice, setTotalPrice] = useState(props.quantity * props.price);
  //State quản lí quantity khi tăng giảm
  const [quantityCount, setQuantityCount] = useState(props.quantity);

  //Dùng useEffect để theo dõi sự thay đổi của biến quantityCount để thay đổi tống giá sản phẩm mới
  useEffect(() => {
    const newTotalPrice = quantityCount * props.price;
    setTotalPrice(newTotalPrice);
  }, [quantityCount]);

  // Hàm giảm số lượng quantity update cho redux
  const deQuantityHandler = () => {
    if (quantityCount > 1) {
      const newQuantity = quantityCount - 1;
      setQuantityCount(newQuantity);
      dispatch(
        cartActions.updateCart({
          id: props.id,
          quantity: newQuantity,
        })
      );
    }
  };

  //Hàm tăng số lượng quantity update cho redux
  const inQuantityHandler = () => {
    const newQuantity = quantityCount + 1;
    setQuantityCount(newQuantity);
    dispatch(
      cartActions.updateCart({
        id: props.id,
        quantity: newQuantity,
      })
    );
  };

  //Hàm xóa sản phẩm qua redux
  const handlerDeleteCart = () => {
    dispatch(cartActions.deleteCart(props.id));
  };

  return (
    <Fragment>
      <Container>
        <Row className={classes.productmain}>
          <Col sm={2}>
            <div className={classes.image}>
              <img src={props.img} />
            </div>
          </Col>
          <Col sm={2} className={classes.col2}>
            <div>
              <h5>{props.name}</h5>
            </div>
          </Col>
          <Col sm={2} className={classes.col3}>
            <div>{Number(props.price).toLocaleString("de-DE")} VNĐ</div>
          </Col>
          <Col sm={2} className={classes.col4}>
            <div>
              <button onClick={deQuantityHandler}>&#10096;</button>
              <span>{quantityCount}</span>
              <button onClick={inQuantityHandler}>&#10097;</button>
            </div>
          </Col>
          <Col sm={2} className={classes.col5}>
            <div>{Number(totalPrice).toLocaleString("de-DE")} VNĐ</div>
          </Col>
          <Col sm={2} className={classes.col6}>
            <div>
              <FaTrash
                className={classes.col6trash}
                onClick={handlerDeleteCart}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default CartProduct;
