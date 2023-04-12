import { Fragment } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

// Layout tổng cho dự án, gồm 3 phần: Navbar, Content, Footer

const Layout = (props) => {
  return (
    <Fragment>
      <Navbar />
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
