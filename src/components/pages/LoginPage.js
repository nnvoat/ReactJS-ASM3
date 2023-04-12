import { Fragment } from "react";
import SignIn from "./LoginPageItem/SignIn";
// Trang chính hiển thị phần đăng nhập
// Có con là SignIn, nằm ở components/pages/LoginPageItem/SignIn.js

const LoginPage = () => {
  return (
    <Fragment>
      <SignIn />
    </Fragment>
  );
};

export default LoginPage;
