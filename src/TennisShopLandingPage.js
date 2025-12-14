import React from "react";

// Giả sử đây là nội dung CSS của bạn. Trong thực tế, bạn sẽ dùng file .css riêng.
const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    padding: "20px",
    backgroundColor: "#f9f9f9",
  },
  header: {
    backgroundColor: "#007bff", // Màu xanh dương tennis
    color: "white",
    padding: "60px 20px",
    marginBottom: "30px",
  },
  headerTitle: {
    fontSize: "3em",
    marginBottom: "10px",
  },
  headerSubtitle: {
    fontSize: "1.2em",
  },
  section: {
    padding: "40px 20px",
    marginBottom: "20px",
    backgroundColor: "white",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  sectionTitle: {
    fontSize: "2em",
    color: "#333",
    marginBottom: "20px",
    borderBottom: "2px solid #ffaa00", // Màu vàng bóng tennis
    display: "inline-block",
    paddingBottom: "5px",
  },
  productGrid: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    gap: "20px",
    marginTop: "30px",
  },
  productItem: {
    flex: "1 1 300px", // Đảm bảo 3 sản phẩm trên một hàng lớn
    border: "1px solid #ddd",
    padding: "15px",
    borderRadius: "4px",
    backgroundColor: "#fff",
  },
  productImage: {
    width: "100%",
    height: "auto",
    maxHeight: "200px",
    objectFit: "cover",
    marginBottom: "10px",
    borderRadius: "4px",
  },
  button: {
    backgroundColor: "#ffaa00",
    color: "#333",
    border: "none",
    padding: "10px 25px",
    fontSize: "1.1em",
    cursor: "pointer",
    borderRadius: "5px",
    marginTop: "20px",
    fontWeight: "bold",
    transition: "background-color 0.3s",
  },
  footer: {
    marginTop: "50px",
    padding: "20px",
    backgroundColor: "#333",
    color: "white",
    fontSize: "0.9em",
  },
};

// Dữ liệu sản phẩm mẫu
const products = [
  {
    id: 1,
    name: "Vợt Tennis ProDrive 98",
    description: "Kiểm soát tuyệt vời và sức mạnh tối ưu.",
    imageUrl: "https://cdn.hstatic.net/products/200000931671/vot-tennis-wilson-ultra-111-v5-chua-cang-day-wr179111u2__2__55049fd82530470eb1993845f9e02c4a.png",
  },
  {
    id: 2,
    name: "Giày Tennis Court Master",
    description: "Độ bám sân vượt trội và sự thoải mái.",
    imageUrl: "https://cdn.shopvnb.com/uploads/gallery/giay-tennis-asics-court-ff-3-novak-blue-fresh-air-chinh-hanng-1041a361-961-2_1709342804.webp",
  },
  {
    id: 3,
    name: "Bóng Tennis Championship",
    description: "Độ nảy chuẩn quốc tế, bền bỉ trên mọi mặt sân.",
    imageUrl: "https://babolat.com.vn/wp-content/uploads/2025/08/BabolatGoldAcademyPressurelessTennisBalls-72Balls_1024x_180a69db-578e-4c3c-a3b9-2e8124ae7c66_360x.jpg",
  },
];

// Component cho từng sản phẩm
const ProductCard = ({ product }) => (
  <div style={styles.productItem}>
    {/* Trong thực tế, bạn sẽ cần một đường dẫn hình ảnh thực tế */}
    <img
      src={product.imageUrl}
      alt={product.name}
      style={styles.productImage}
    />
    <h3>{product.name}</h3>
    <p>{product.description}</p>
    <button style={styles.button}>Xem chi tiết</button>
  </div>
);

// Component chính của trang giới thiệu
const TennisShopLandingPage = () => {
  return (
    <div style={styles.container}>
      {/* 1. Header/Hero Section */}
      <header style={styles.header}>
        <h1 style={styles.headerTitle}>CHÀO MỪNG ĐẾN VỚI TENNIS PRO SHOP</h1>
        <p style={styles.headerSubtitle}>
          Trang bị tốt nhất cho mọi trận đấu của bạn. Từ vợt cho đến giày, chúng
          tôi có tất cả!
        </p>
        <button style={styles.button}>KHÁM PHÁ NGAY</button>
      </header>

      {/* 2. Giới thiệu */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>VỀ CHÚNG TÔI</h2>
        <p>
          Chúng tôi là những người đam mê tennis, cam kết mang đến những sản
          phẩm chính hãng, chất lượng cao nhất từ các thương hiệu hàng đầu thế
          giới. Sứ mệnh của chúng tôi là giúp bạn nâng tầm trận đấu của mình.
        </p>
      </section>

      {/* 3. Sản phẩm nổi bật */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>SẢN PHẨM NỔI BẬT</h2>
        <div style={styles.productGrid}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* 4. CTA (Lời kêu gọi hành động) */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>SẴN SÀNG THAM GIA TRẬN ĐẤU?</h2>
        <p>
          Đừng để trang bị lỗi thời cản trở bạn. Mua sắm ngay hôm nay để nhận
          được ưu đãi tốt nhất!
        </p>
        <button style={styles.button}>MUA SẮM TOÀN BỘ SẢN PHẨM</button>
      </section>

      {/* 5. Footer */}
      <footer style={styles.footer}>
        <p>
          &copy; {new Date().getFullYear()} Tennis Pro Shop. Tất cả quyền được
          bảo lưu.
        </p>
        <p>
          Liên hệ: contact@tennisproshop.com | Địa chỉ: 123 Sân Banh, Quận
          Tennis, TP. HCM
        </p>
      </footer>
    </div>
  );
};

export default TennisShopLandingPage;
