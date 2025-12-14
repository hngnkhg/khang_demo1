// src/App.tsx
import "./styles.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// --- CÁC COMPONENT CỦA BẠN ---
// @ts-ignore
import Layout from "./Layout";
// @ts-ignore
import ListProducts_SP from "./ListProducts_SP";
// @ts-ignore
import Trang1 from "./Trang1"; // Trang EGOV
// @ts-ignore
import Trang2 from "./Trang2"; // Trang Menu 2/Menu 3
// @ts-ignore
import Chitietsanpham from "./Chitietsanpham";
// @ts-ignore
import LoginPage from "./LoginPage";
// @ts-ignore
import LogoutPage from "./LogoutPage";
// @ts-ignore
import ProtectedRoute from "./ProtectedRoute";
// @ts-ignore
import ListProducts_SP_Admin from "./ListProducts_SP_Admin";
// @ts-ignore
import EditProduct from "./EditProduct";

import ChatPage from "./ChatPage";

// --- IMPORT MỚI CHO GIỎ HÀNG ---
import { CartProvider } from "./CartContext";
import CartPage from "./CartPage";
import TennisLandingPage from "./TennisShopLandingPage";;



export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
     
     
     
        <Routes>
          <Route path="" element={<Layout />}>
            {/* 1. TRANG CHỦ (Home Page) */}
            <Route index element={<ListProducts_SP />} /> {" "}
            {/* 2. CHỨC NĂNG CƠ BẢN */}
            <Route path="cart" element={<CartPage />} />
            <Route path="chat" element={<ChatPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="logout" element={<LogoutPage />} />
            {/* 3. TRANG NỘI DUNG (Từ Header) */}
            <Route path="egov" element={<Trang1 />} />
            <Route path="menu2" element={<Trang2 />} />
            <Route path="menu3" element={<Trang2 />} />
            {/* 4. SẢN PHẨM & CHI TIẾT (Đã sửa) */}
            <Route path="sanpham/:id" element={<Chitietsanpham />} />
            {/* Hỗ trợ URL mới */}
            <Route path="detail/:id" element={<Chitietsanpham />} />
            <Route path="tennishome" element={<TennisLandingPage />} />
            {/* 5. ADMIN (Protected Routes - Đã sửa lỗi đường dẫn tuyệt đối) */}
            <Route
              path="admin/products"
              element={
                <ProtectedRoute>
                  <ListProducts_SP_Admin />
                </ProtectedRoute>
              }
            />
            {/* SỬA: Bỏ dấu '/' ở đầu để nó là tuyến đường con của Layout */}
            <Route path="admin/edit/:id" element={<EditProduct />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
   
    
    
  );

 
}
