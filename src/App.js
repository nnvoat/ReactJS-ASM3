import { BrowserRouter, Routes, Route } from "react-router-dom";
// Sử dụng react-router-dom để điều hướng cho dự án

import Layout from "./components/Layout/Layout";

import HomePage from "./components/pages/HomePage";
import ShopPage from "./components/pages/ShopPage";
import DetailPage from "./components/pages/DetailPage";
import CartPage from "./components/pages/CartPage";
import CheckoutPage from "./components/pages/CheckoutPage";
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";
import NotFound from "./components/pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/detail/:productId" element={<DetailPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
