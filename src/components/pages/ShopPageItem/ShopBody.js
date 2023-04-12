import { Fragment, useState } from "react";
import classes from "./ShopBody.module.css";
import { Container, Row, Col } from "react-bootstrap";
import ShopCategories from "./ShopCategories/ShopCategories";
// Là con của components/ShopPage.js
// Là cha của components/pages/ShopPageItem/ShopCategories/ShopCategories.js
// Phần ShopBody hiển thị gồm 2 phần: Cột danh sách và Cột hiển thị sản phẩm
// Cột hiển thị sản phẩm được tạo riêng để dễ quản lí. Nó nằm ở components/pages/ShopPageItem/ShopCategories
// Sử dụng Container, Row, Col trong react-bootstrap để hiển thị
// Mỗi khi click vào 1 mục của cột danh mục sẽ hiển thị được sản phẩm cần lọc
// Hiển thị mặc định set state category

const ShopBody = () => {
  const [category, setCategory] = useState("all");

  // Function này khi click vào sẽ chuyển đổi sang dạng string chữ thường.
  const clickHandler = (e) => {
    setCategory(e.target.textContent.toLowerCase());
  };

  // Sản phẩm hiển thị tương ứng với state category (ShopCategories)

  return (
    <Fragment>
      <Container fluid className={classes.shopmain}>
        <Row>
          <Col sm={2}>
            <h3>CATEGORIES</h3>
            <h5>APPLE</h5>
            <li onClick={clickHandler}>All</li>
            <h6>IPHONE & IMAC</h6>
            <li onClick={clickHandler}>iPhone</li>
            <li onClick={clickHandler}>iPad</li>
            <li onClick={clickHandler}>Macbook</li>
            <h6>WIRELESS</h6>
            <li onClick={clickHandler}>Airpod</li>
            <li onClick={clickHandler}>Watch</li>
            <h6>OTHER</h6>
            <li onClick={clickHandler}>Mouse</li>
            <li onClick={clickHandler}>Keyboard</li>
            <li onClick={clickHandler}>Other</li>
          </Col>
          <Col sm={10}>
            <ShopCategories category={category} />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default ShopBody;
