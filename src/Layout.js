import "./assets/css/main.css";
import anhlogo from "./assets/images//tennis1.jpg";
import { Outlet, useNavigate, Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCart } from "./CartContext";

const Layout = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const { cartItems } = useCart();

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // LOGIC CẬP NHẬT TRẠNG THÁI USER (Đã sửa lỗi)
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        localStorage.removeItem("user");
        setUser(null);
      }
    } else {
      setUser(null);
    }
  }, [location.pathname]); // ✅ Đảm bảo chạy lại khi điều hướng

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/"); // Chuyển về trang chủ sau khi đăng xuất
  };

  return (
    <div id="app-wrapper">
      <header className="main-header">
        {/* 1. THANH TOP BAR */}
        <div className="header-topbar">
          <div className="container-1200 topbar-content">
            <div className="topbar-contact">
              <span className="hotline">
                📞 HOTLINE: **09775.08430** | **0338000308**
              </span>
            </div>
            <div className="topbar-links">
              <Link to="/stores" className="topbar-link">
                <i className="fa-solid fa-store"></i> HỆ THỐNG CỬA HÀNG
              </Link>
            </div>
          </div>
        </div>

        {/* 2. THANH MAIN BAR */}
        <div className="header-mainbar">
          <div className="container-1200 mainbar-content">
            <Link to="/" id="logo" className="logo">
              <img src={anhlogo} alt="VNB Logo" style={{ height: "55px" }} />
            </Link>

            {/* KHU VỰC TÌM KIẾM */}
            <div className="search-box">
              <input
                type="text"
                placeholder="Tìm kiếm sản phẩm, thương hiệu..."
                className="search-input"
              />
              <button className="search-btn">🔍</button>
            </div>

            {/* KHU VỰC TÀI KHOẢN & GIỎ HÀNG (ĐÃ SỬA VÀ TÍCH HỢP LOGIC USER) */}
            <div className="user-area">
              {/* LOGIC HIỂN THỊ TÊN TÀI KHOẢN HOẶC LINK ĐĂNG NHẬP */}
              {user ? (
                <div className="user-authenticated-section">
                  <span className="user-icon user-text">
                    <i className="fa-regular fa-circle-user"></i>
                    Chào, **{user.username}**
                  </span>
                  <button
                    className="logout-btn"
                    onClick={handleLogout}
                    style={{
                      backgroundColor: "transparent",
                      color: "#fe4a00",
                      border: "none",
                      padding: "5px 10px",
                      cursor: "pointer",
                      fontSize: "14px",
                      fontWeight: "bold",
                    }}
                  >
                    (Đăng xuất)
                  </button>
                </div>
              ) : (
                // CHƯA ĐĂNG NHẬP: Hiển thị Link Tài khoản
                <Link to="/login" className="user-icon">
                  <i className="fa-regular fa-circle-user"></i>
                  <span className="user-text">Tài khoản</span>
                </Link>
              )}

              {/* GIỎ HÀNG */}
              <Link to="/cart" className="cart-link">
                <i className="fa-solid fa-bag-shopping"></i>
                <span className="cart-badge">{totalQuantity}</span>
                <span className="user-text">Giỏ hàng</span>
              </Link>
            </div>
          </div>
        </div>

        {/* 3. THANH NAVIGATION BAR */}
        <nav className="header-navbar">
          <div className="container-1200 navbar-content">
            <Link to="/" className="nav-item">
              TRANG CHỦ
            </Link>
            <Link to="/egov" className="nav-item">
              SẢN PHẨM
            </Link>
            <Link to="/sale-off" className="nav-item">
              SALE OFF
            </Link>
            <Link to="/news" className="nav-item">
              TIN TỨC
            </Link>
            <Link to="/policy" className="nav-item">
              CHÍNH SÁCH NHƯỢNG QUYỀN
            </Link>
            <Link to="/guide" className="nav-item">
              HƯỚNG DẪN
            </Link>
            <Link to="/about" className="nav-item">
              GIỚI THIỆU
            </Link>
            <Link to="/contact" className="nav-item">
              LIÊN HỆ
            </Link>
            <Link to="/admin/products" className="nav-item admin-link">
              QUẢN TRỊ
            </Link>
          </div>
        </nav>
      </header>

      {/* NỘI DUNG CHÍNH */}
      <main id="container" className="container-1200">
        <Outlet />
      </main>

      {/* FOOTER CHUẨN */}
      <footer className="main-footer">
        <div className="container-1200 footer-content">
          <p>&copy; 2025 Bản quyền thuộc về Tên Công ty. Thiết kế theo VNB.</p>
          <div className="footer-links">
            <Link to="/privacy">Chính sách bảo mật</Link>
            <Link to="/terms">Điều khoản sử dụng</Link>
          </div>
        </div>
      </footer>

      {/* 🛑 TÍNH NĂNG CHAT/HỖ TRỢ NỔI (ĐÃ THÊM) */}
      <div className="fixed-support-buttons">
        <Link to="/chat" className="chat-ai-button">
          <i className="fa-solid fa-robot"></i>
          <span>Chat AI</span>
        </Link>

        {/* Dùng icon chat hoặc icon Zalo/WhatsApp tương ứng */}
        <a href="#" className="zalo-button">
          <i className="fa-brands fa-whatsapp"></i>
          <span>Zalo</span>
        </a>
      </div>
      {/* 🛑 HẾT TÍNH NĂNG CHAT */}
    </div>
  );
};

export default Layout;
