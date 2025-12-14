// src/TennisLandingPage.tsx
import React from "react";
// Import useNavigate nếu bạn muốn chuyển hướng khi nhấn nút
import { Link } from "react-router-dom";
import "./css/TennisLandingPage.css"; // Chúng ta sẽ tạo file CSS này

// Dữ liệu mẫu
const FEATURED_PRODUCTS = [
  {
    id: 1,
    name: "Vợt Tennis Pro",
    price: "4,500,000đ",
    description: "Sức mạnh và kiểm soát hoàn hảo cho người chơi chuyên nghiệp.",
    link: "/sanpham/1",
  },
  {
    id: 2,
    name: "Giày Court Master",
    price: "2,100,000đ",
    description: "Độ bám sân tuyệt đối, thoải mái trong mọi chuyển động.",
    link: "/sanpham/2",
  },
  {
    id: 3,
    name: "Bóng Tennis Cao Cấp",
    price: "150,000đ/hộp",
    description: "Độ nảy chuẩn quốc tế, bền bỉ trên mọi mặt sân.",
    link: "/sanpham/3",
  },
];

const TennisLandingPage: React.FC = () => {
  return (
    <div className="tennis-landing-container">
      {/* 1. HERO SECTION (BANNER LỚN) */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>🎾 NÂNG TẦM TRẬN ĐẤU CỦA BẠN</h1>
          <p>
            Khám phá bộ sưu tập đồ thể thao tennis hàng đầu thế giới. Trang bị
            tốt nhất, chiến thắng dễ dàng!
          </p>
          {/* Sử dụng Link để chuyển hướng đến trang sản phẩm chính */}
          <Link to="/admin/products" className="hero-button">
            MUA SẮM NGAY
          </Link>
        </div>
      </section>

      {/* 2. SẢN PHẨM NỔI BẬT */}
      <section className="featured-section">
        <h2>✨ SẢN PHẨM NỔI BẬT</h2>
        <div className="product-grid">
          {FEATURED_PRODUCTS.map((product) => (
            <div key={product.id} className="product-card">
              {/* Giả định có ảnh sản phẩm */}
              <div className="product-image-placeholder"></div>
              <h3>{product.name}</h3>
              <p className="product-price">{product.price}</p>
              <p className="product-description">{product.description}</p>
              <Link to={product.link} className="detail-button">
                Xem Chi Tiết
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* 3. LỜI KÊU GỌI HÀNH ĐỘNG (CTA) */}
      <section className="cta-section">
        <h2>KHÔNG CHỈ LÀ THIẾT BỊ. ĐÓ LÀ PHONG CÁCH SỐNG.</h2>
        <p>
          Tham gia cộng đồng Tennis Pro Shop ngay hôm nay để nhận ưu đãi độc
          quyền và lời khuyên từ chuyên gia.
        </p>
        <Link to="/login" className="cta-button">
          ĐĂNG KÝ THÀNH VIÊN
        </Link>
      </section>
    </div>
  );
};

export default TennisLandingPage;
