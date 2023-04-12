import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import classes from "./CheckoutBody.module.css";
// Là con của components/CheckoutPage.js
// Hiển thị tổng giá trị các sản phẩm và giao diện form để người dùng đăng kí thông tin thanh toán

const CheckoutBody = () => {
  //State quản lí thông tin sản phẩm đã lưu
  const [dataProduct, setDataProduct] = useState();

  //State tổng giá trị các sản phẩm
  const [totalPrice, setTotalPrice] = useState(0);

  //Lấy thông tin sản phẩm đã lưu
  const cartItems = useSelector((state) => state.cart.listCart);
  // console.log(cartItems);

  //State thông tin đăng kí form thanh toán
  const [orderArr, setOrderArr] = useState([]);
  const [newOrder, setNewOrder] = useState({
    fullname: "",
    email: "",
    phone: "",
    address: "",
  });

  //Chay useEffect ngay tu dau
  useEffect(() => {
    localStorage.setItem("orderArr", JSON.stringify(orderArr));
  }, [orderArr]);

  //Function thêm trường dữ liệu nhập
  const handlerChange = (event) => {
    setNewOrder({ ...newOrder, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    //State quản lí dữ liệu được lấy đã lưu
    setDataProduct(cartItems);

    //Tính tổng giá trị các sản phẩm
    if (dataProduct) {
      const totalProduct = dataProduct.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
      setTotalPrice(totalProduct);
      // console.log(totalPrice);
    }
  });
  // console.log(dataProduct);

  //Function submit thông tin người dùng nhập để thanh toán
  const handlerSubmit = (event) => {
    event.preventDefault();
    let isFormValid = true;

    //Kiểm tra dữ liệu fullname được nhập
    if (newOrder.fullname.trim() < 6) {
      isFormValid = false;
      alert("Vui lòng nhập Full Name lớn hơn 6 kí tự!");
    }

    //Kiểm tra email được nhập
    if (!newOrder.email.trim()) {
      isFormValid = false;
      alert("Vui lòng không để trống Email!");
    } else if (!newOrder.email.includes("@")) {
      isFormValid = false;
      alert("Email được nhập phải chứa @!");
    }

    //Kiểm tra phone được nhập
    if (!newOrder.phone.trim()) {
      isFormValid = false;
      alert("Vui lòng không để trống Phone!");
    } else if (isNaN(newOrder.phone) || newOrder.phone.length !== 10) {
      isFormValid = false;
      alert("Phone được nhập phải đúng 10 kí tự số!");
    }

    //Kiểm tra address được nhập
    if (!newOrder.address.trim()) {
      isFormValid = false;
      alert("Vui lòng không để trống Address!");
    }

    //Sau khi đã kiểm tra hợp lệ xong thì thêm dữ liệu vào
    if (isFormValid) {
      //Khi hợp lệ, thêm thông tin vào mảng
      setOrderArr(...orderArr, newOrder);
      //Lưu xuống localStorage
      localStorage.setItem("orderArr", JSON.stringify(orderArr));

      //Set lại thông tin nhập về trắng ban đầu
      setNewOrder({
        fullname: "",
        email: "",
        phone: "",
        address: "",
      });
      //Thông báo thành công
      alert("Bạn đã đặt hàng thành công!");
      //Chuyển ra trang chủ
      window.location.replace("/");
    }
  };

  return (
    <Fragment>
      <h4 className={classes.billing}>BILING DETAILS</h4>
      <Container fluid>
        <Row className={classes.formmain}>
          <Col sm={8}>
            <form>
              <label className={classes.labelinput}>
                FULL NAME:
                <input
                  type="text"
                  name="fullname"
                  placeholder="Enter Your Full Name Here!"
                  size="100"
                  value={newOrder.fullname}
                  onChange={handlerChange}
                />
              </label>
              <label className={classes.labelinput}>
                EMAIL:
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email Here!"
                  value={newOrder.email}
                  onChange={handlerChange}
                />
              </label>
              <label className={classes.labelinput}>
                PHONE NUMBER:
                <input
                  type="number"
                  name="phone"
                  placeholder="Enter Your Phone Number Here!"
                  value={newOrder.phone}
                  onChange={handlerChange}
                />
              </label>
              <label className={classes.labelinput}>
                ADDRESS:
                <input
                  type="text"
                  name="address"
                  placeholder="Enter Your Address Here!"
                  value={newOrder.address}
                  onChange={handlerChange}
                />
              </label>
              <button onClick={handlerSubmit}>Place order</button>
            </form>
          </Col>
          <Col sm={4}>
            <div className={classes.ordermain}>
              <h4>YOUR ORDER</h4>
              <div>
                {dataProduct &&
                  dataProduct.map((item) => (
                    <div className={classes.ordertotal} key={item.id}>
                      <h6>
                        {item.name.length > 26
                          ? item.name.substring(0, 26) + "..."
                          : item.name}
                      </h6>
                      <p>
                        {Number(item.price).toLocaleString("de-DE")} VND
                        <span className={classes.orderx}>x</span>
                        {item.quantity}
                      </p>
                    </div>
                  ))}
              </div>
              <div className={classes.ordertotal3}>
                <h5>TOTAL</h5>
                <p>{Number(totalPrice).toLocaleString("de-DE")} VND</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default CheckoutBody;
