import { Fragment } from "react";
import classes from "./Popup.module.css";
import { Modal, Container, Row, Col } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
// Là con của components/pages/HomePageItem/HomeProducts.js
// Hiển thị product khi click vào ảnh. Các thông tin được hiển thị được lấy thông qua props.

const Popup = (props) => {
  const hidePopupHandler = () => {
    props.hidePopupHandler();
  };

  const handlerDetail = () => {
    window.location.replace(`/detail/${props.id}`);
  };

  return (
    <Fragment>
      <Modal show={props.show} size="xl" centered>
        <Modal.Body>
          <Container>
            <Row>
              <Col>
                <img
                  src={props.src}
                  alt="imgproduct"
                  className={classes.imgproduct}
                />
              </Col>
              <Col>
                <div className={classes.btnx}>
                  <button onClick={hidePopupHandler}>X</button>
                </div>
                <div className={classes.text}>
                  <h3>{props.name}</h3>
                  <h4>{props.price} VNĐ</h4>
                  <p>{props.desc}</p>
                </div>
                <div>
                  <button
                    className={classes.btnshopping}
                    type="button"
                    onClick={handlerDetail}
                  >
                    <FaShoppingCart className={classes.iconshopping} />
                    View Detail
                  </button>
                </div>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </Fragment>
  );
};

export default Popup;
