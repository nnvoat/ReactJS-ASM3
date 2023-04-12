import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import imgBanner from "../../../img-asm03/banner1.jpg";
import classes from "./SignIn.module.css";
import { userActions } from "../../../store/user";
// Có cha là components/LoginPage.js
// Dùng redux components/store/user để quản lí việc đăng kí, đăng nhập
// Hiển thị để đăng nhập, khi chưa đăng kí tài khoản thì click vào nút Sign Up chuyển sang trang đăng kí

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handlerSubmit = (event) => {
    //Ngăn chặn form được submit mặc định
    event.preventDefault();

    // //Kiểm tra xem email và password được nhập đủ hay chưa
    if (!email || !password) {
      alert("Hãy nhập đủ email và password!");
      return;
    }

    // //Lấy danh sách tài khoản từ localStorage
    const userArr = localStorage.getItem("userArr")
      ? JSON.parse(localStorage.getItem("userArr"))
      : [];

    // //Kiểm tra xem có tài khoản thoả mãn không
    const user = userArr.find(
      (user) => user.email === email && user.password === password
    );

    // Nếu tài khoản đã thỏa mãn thì tiến hành đăng nhập
    if (user) {
      alert("Đăng nhập thành công!");
      setEmail("");
      setPassword("");
      // cập nhật lại dữ liệu cho state của component bằng cách sử dụng Redux action ON_LOGIN
      // ...
      dispatch(userActions.onLogin(user));

      //Chuyển trang
      window.location.replace("/");
    } else {
      alert("Sai email hoặc mật khẩu.");
      // Xoá hiển thị password đang nhập
      setPassword("");
    }
  };

  return (
    <Fragment>
      <div
        className={classes.signMain}
        style={{ backgroundImage: `url(${imgBanner})` }}
      >
        <Form className={classes.formMain} onSubmit={handlerSubmit}>
          <Form.Group className="mb-3">
            <h2>Sign In</h2>
            <Form.Control
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit">SIGN IN</Button>
            <div className={classes.textflex}>
              <p>Create an account?</p>
              <Link to="/register">Sign Up</Link>
            </div>
          </Form.Group>
        </Form>
      </div>
    </Fragment>
  );
};

export default SignIn;
