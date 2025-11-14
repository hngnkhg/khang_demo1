import "./assets/css/main.css";
import anhlogo from "./assets/images//Ten-truong-do-1000x159.png";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Layout = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

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
    <div className="app-layout"> {/* Thẻ bao ngoài chính */}
      <header className="main-header">
        {/* Phần Header Top - Đặt logo, navigation, và tìm kiếm/user ở 3 cột */}
        <div className="header-top">
          {/* 1. Top Navigation/Link ngoài */}
          <div className="top-nav">
            <a href="/#" className="top-link">
              TRANG CHỦ
            </a>
            <a href="/trang1" className="top-link">
              EGOV
            </a>
            <a href="/admin/products" className="top-link">
              QUẢN TRỊ
            </a>
          </div>

          {/* 2. Logo Chính giữa */}
          <div className="logo-container">
            <img src={anhlogo} alt="Logo Trường" className="main-logo" />
          </div>

          {/* 3. Tìm kiếm & User */}
          <div className="search-user-area">
            <div className="search-box">
              <input type="text" placeholder="Tìm kiếm..." className="search-input" />
              <button className="search-button">🔍</button>
            </div>
          </div>
        </div>

        {/* Phần Main Menu Bar - Thanh Menu Chính dưới header */}
        <nav className="main-menubar">
          <div className="menubar-left">
            <a href="/menu1" className="menu-item primary">
              Menu 1
            </a>
            <a href="/menu2" className="menu-item primary">
              Menu 2
            </a>
            <a href="/menu3" className="menu-item primary">
              Menu 3
            </a>
          </div>

          {/* User/Login ở góc phải menubar */}
          <div className="menubar-right">
            {user ? (
              <>
                <span className="username">
                  <span className="user-icon">👤</span> **{user.username}**
                </span>
                <button className="logout-btn" onClick={handleLogout}>
                  Đăng xuất
                </button>
              </>
            ) : (
              <a href="/login" className="login-link">
                Đăng nhập
              </a>
            )}
          </div>
        </nav>
      </header>

      {/* Nội dung chính của trang */}
      <main className="main-content-container">
        <Outlet />
      </main>

      <footer className="main-footer">
        <p>© 2025 Bản quyền thuộc về [Tên Cơ quan/Trường]</p>
      </footer>
    </div>
  );
};

export default Layout;