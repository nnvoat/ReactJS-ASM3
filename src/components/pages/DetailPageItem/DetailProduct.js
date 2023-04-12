import { Fragment, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useRequest from "../../../hooks/use-request";
import { useDispatch } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import classes from "./DetailProduct.module.css";
import ProductsItem from "../HomePageItem/ProductsItem/ProductsItem";
import { cartActions } from "../../../store/cart";
// Là con của components/DetailPage.js
// Bố cục phần này chia làm 3 phần. Dùng Container, Row và Col của react-bootstrap
// Dùng usehooks senRequest để lấy API về
// Tiếp tục lọc dữ liệu đã lấy về để lấy product cụ thể theo key: _id.$oid . Từ đó hiển thị thông tin theo product đã lọc
// Dùng useParams để xác định :ProductId (Router - App)
// Sử dụng lại ProductsItem của phần HomePage (trang chủ) để hiển thị sản phẩm đã xem ở dưới cùng

const DetailProduct = () => {
  // Lấy API về
  const sendRequest = useRequest();
  // State lưu dữ liệu được get API về
  const [productData, setProductData] = useState();
  //State lưu dữ liệu đã được lọc để lấy id
  const [productDetail, setProductDetail] = useState();
  //State lọc sản phẩm
  const [productRelated, setProductRelated] = useState();
  //State lấy link ảnh khi click vào
  const [srcViewImg, setSrcViewImg] = useState();
  //State số lượng
  const [quantity, setQuantity] = useState(1);
  //params xác định ProductId
  const params = useParams();
  const { productId } = params;
  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    const getData = (data) => {
      setProductData(data);
    };
    sendRequest(getData);
    // console.log(productData);
  }, [sendRequest]);

  useEffect(() => {
    if (productData) {
      const [detail] = productData.filter(
        (product) => product._id.$oid === productId
      );

      setProductDetail(detail);
      // console.log(productDetail);

      setProductRelated(
        productData
          .filter((product) => product.category === detail.category)
          .filter((product) => product._id.$oid !== productId)
      );
    }
    // console.log(productRelated);
  }, [productData]);

  const viewImg = (e) => {
    setSrcViewImg(e.target.src);
  };

  //Function click vào rồi chuyển sang trang có sản phẩm id đó, rồi tải lại trang
  const reloadProduct = (e) => {
    navigate(`/detail/${e._id.$oid}`);
    window.location.reload();
  };

  const handleAddToCart = () => {
    //Tạo sản phẩm mới
    const newProduct = {
      id: productDetail._id.$oid,
      name: productDetail.name,
      price: productDetail.price,
      img: productDetail.img1,
      quantity: quantity,
    };

    //Gửi action addCart thêm sản phẩm mới. Action addCart dùng redux trong components/store/cart.js
    dispatch(cartActions.addCart(newProduct));

    //Chuyển tới giỏ hàng
    navigate("/cart");
  };

  return (
    <Fragment>
      {productDetail && (
        <Container fluid className={classes.maindetail}>
          <Row className={classes.mainrow1}>
            <Col sm={1}>
              <img src={productDetail.img1} onClick={viewImg} />
              <img src={productDetail.img2} onClick={viewImg} />
              <img src={productDetail.img3} onClick={viewImg} />
              <img src={productDetail.img4} onClick={viewImg} />
            </Col>
            <Col sm={4}>
              <img src={srcViewImg ? srcViewImg : productDetail.img4} />
            </Col>
            <Col sm={6}>
              <h2>{productDetail.name}</h2>
              <h4>{Number(productDetail.price).toLocaleString("de-DE")} VNĐ</h4>
              <p>{productDetail.short_desc}</p>
              <div className={classes.mainrow1flex}>
                <h5>CATEGORY:</h5>
                <p>{productDetail.category}</p>
              </div>
              <div>
                <input
                  type="number"
                  placeholder="QUANTITY"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(+e.target.value)}
                />
                <button onClick={handleAddToCart}>Add to cart</button>
              </div>
            </Col>
          </Row>
          <Row className={classes.mainrow2}>
            <Col sm={6}>
              <button>DESCRIPTION</button>
              <h5>PRODUCT DESCRIPTION</h5>
              <p>{productDetail.long_desc}</p>
            </Col>
          </Row>
          <Row className={classes.mainrow3}>
            <h4>RELATED PRODUCTS</h4>
            {productRelated &&
              productRelated.map((product) => (
                <Col sm={2} key={product._id.$oid}>
                  <ProductsItem
                    src={product.img1}
                    name={product.name}
                    price={product.price}
                    showPopupHandler={reloadProduct.bind(this, product)}
                  />
                </Col>
              ))}
          </Row>
        </Container>
      )}
    </Fragment>
  );
};

export default DetailProduct;
