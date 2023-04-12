import { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import imgBanner from "../../../img-asm03/banner1.jpg";
import Form from "react-bootstrap/Form";
import classes from "./Register.module.css";
import { Button } from "react-bootstrap";
// Trang đăng kí tài khoản

const Register = () => {
  //State user chứa đủ thông tin
  const [userArr, setUserArr] = useState([]);
  //State thêm từng trường thông tin nhập vào
  const [newUser, setNewUser] = useState({
    fullname: "",
    email: "",
    password: "",
    phone: "",
  });

  useEffect(() => {
    localStorage.setItem("userArr", JSON.stringify(userArr));
  }, [userArr]);

  const handlerChange = (event) => {
    setNewUser({
      ...newUser,
      [event.target.name]: event.target.value,
    });
  };

  const handlerSubmit = (event) => {
    event.preventDefault();
    let isFormValid = true;

    //Kiểm tra điều kiện cho fullname
    if (newUser.fullname.trim().length < 6) {
      isFormValid = false;
      alert("Fullname cần có độ dài lớn hơn 6 kí tự.");
    }

    //Kiểm tra điều kiện cho email
    if (!newUser.email.trim()) {
      isFormValid = false;
      alert("Email không được để trống.");
    } else if (!newUser.email.includes("@")) {
      isFormValid = false;
      alert("Email phải chứa @.");
    }

    //Kiểm tra điều kiện cho password
    if (newUser.password.trim().length < 8) {
      isFormValid = false;
      alert("Mật khẩu phải lớn hơn 8 kí tự.");
    } else if (newUser.password.includes(" ")) {
      isFormValid = false;
      alert("Mật khẩu không được chứa khoảng trắng.");
    }

    //Kiểm tra điều kiện cho phone
    if (!newUser.phone.trim()) {
      isFormValid = false;
      alert("Phone không để trống.");
    } else if (isNaN(newUser.phone) || newUser.phone.length !== 10) {
      isFormValid = false;
      alert("Số điện thoại phải gồm 10 kí tự số.");
    }

    //Dữ liệu nhập vào hợp lệ thì được lưu vào localStorage
    if (isFormValid) {
      setUserArr([...userArr, newUser]);
      localStorage.setItem("userArr", JSON.stringify(userArr));

      setNewUser({
        fullname: "",
        email: "",
        password: "",
        phone: "",
      });
      // Chuyển sang trang đăng nhập
      window.location.replace("/login");
    }
  };

  return (
    <Fragment>
      <div
        className={classes.signMain}
        style={{ backgroundImage: `url(${imgBanner})` }}
      >
        <Form className={classes.formMain}>
          <Form.Group className="mb-3">
            <h2>Sign Up</h2>
            <Form.Control
              type="text"
              name="fullname"
              placeholder="Full Name"
              value={newUser.fullname}
              onChange={handlerChange}
            />
            <Form.Control
              type="email"
              placeholder="Email"
              name="email"
              value={newUser.email}
              onChange={handlerChange}
            />
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={newUser.password}
              onChange={handlerChange}
            />
            <Form.Control
              type="number"
              placeholder="Phone"
              name="phone"
              value={newUser.phone}
              onChange={handlerChange}
            />
            <Button onClick={handlerSubmit}>SIGN UP</Button>
            <div className={classes.textflex}>
              <p>Login?</p>
              <Link to="/login">Click</Link>
            </div>
          </Form.Group>
        </Form>
      </div>
    </Fragment>
  );
};

export default Register;
