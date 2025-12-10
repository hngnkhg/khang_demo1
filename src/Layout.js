import "./assets/css/main.css";
import anhlogo from "./assets/images//tennis1.jpg";
import { Outlet, useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCart } from "./CartContext";

const Layout = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const { cartItems } = useCart();

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  return (
    <div id="app-wrapper">
      <header className="header1">
        {/* 1. THANH MENU PHỤ TRÊN CÙNG (CÂN ĐỐI) */}
        <div id="topleft">
          <ul className="ul1">
            <li>
              <Link to="/" className="top-link">
                TRANG CHỦ
              </Link>
            </li>
            <li>
              <Link to="/egov" className="top-link">
                EGOV
              </Link>
            </li>

            {/* ✅ ĐÃ SỬA: BỎ ĐIỀU KIỆN - LINK QUẢN TRỊ LUÔN HIỂN THỊ */}
            <li>
              <Link to="/admin/products" className="top-link">
                QUẢN TRỊ
              </Link>
            </li>
          </ul>
        </div>

        {/* 2. KHU VỰC LOGO & TÌM KIẾM (CÂN ĐỐI) */}
        <div id="banner" className="banner1">
          <Link to="/" id="logo" className="logo1">
            {/* ✅ ĐÃ SỬA: BỎ thuộc tính width="548" để CSS điều khiển */}
            <img src={anhlogo} alt="logo" style={{ display: "block" }} />
          </Link>

          <div id="divtimkiem">
            {/* ... (Phần tìm kiếm giữ nguyên) */}
            <input
              type="text"
              placeholder="🔍 Tìm kiếm..."
              className="search-input"
            />
          </div>
        </div>

        {/* 3. THANH MENU CHÍNH */}
        <nav id="menubar" className="menubar">
          <div className="menubar-left">
            {/* Dùng Link thay cho <a> */}
            <Link to="/chat" className="menu-item">
              Chat với AI
            </Link>
            <Link to="/menu2" className="menu-item">
              Menu 2
            </Link>
            <Link to="/menu3" className="menu-item">
              Menu 3
            </Link>
          </div>

          <div className="menubar-right">
            {/* Giỏ hàng nổi bật */}
            <Link to="/cart" className="menu-item cart-link">
              🛒 Giỏ hàng
              {totalQuantity > 0 && (
                <span className="cart-badge">{totalQuantity}</span>
              )}
            </Link>

            {/* Thông tin đăng nhập/đăng xuất */}
            {user ? (
              <>
                <span className="username">👤 {user.username}</span>
                <button className="logout-btn" onClick={handleLogout}>
                  Đăng xuất
                </button>
              </>
            ) : (
              // Dùng Link thay cho <a>
              <Link to="/login" className="login-link">
                Đăng nhập
              </Link>
            )}
          </div>
        </nav>
      </header>

      {/* Thay thế <body> bằng <main> */}
      <main id="container" className="container">
        <Outlet />
      </main>

      {/* Thêm Footer chuẩn */}
      <footer className="main-footer">
        &copy; 2025 Bản quyền thuộc về Tên Công ty
      </footer>
    </div>
  );
};

export default Layout;
