import React from "react";
import { Listproducts } from "./data/listproduct";
import { useNavigate } from "react-router-dom";

// Định nghĩa các đối tượng style
const styles = {
  // Màu sắc chủ đạo
  accentColor: "#4CAF50", // Xanh lá cây (Emerald Green)
  textColor: "#212121",
  subtleColor: "#757575",
  backgroundColor: "#f5f5f5", // Nền nhẹ nhàng

  // Container tổng
  mainContainer: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#ffffff", // Nền trang trắng sáng
    padding: "40px 20px",
  },
  // Khung lưới sản phẩm
  gridContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", // Tăng kích thước min
    gap: "25px", // Tăng khoảng cách
    maxWidth: "1300px", // Mở rộng tối đa
    width: "100%",
  },
  // Card Sản phẩm (Base Style)
  cardBase: {
    // Loại bỏ border, thay bằng đổ bóng nhẹ
    border: "none",
    borderRadius: "12px", // Bo góc mềm mại
    padding: "20px",
    textAlign: "center",
    backgroundColor: "#fff",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)", // Đổ bóng tinh tế
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    transition: "all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)",
    minHeight: "380px", // Tăng chiều cao tối thiểu cho card
  },
  // Card Sản phẩm (Hover Style)
  cardHover: {
    transform: "translateY(-6px)",
    boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
    border: `1px solid ${this.accentColor}`, // Thêm viền màu nhấn khi hover
  },
  // Hình ảnh sản phẩm
  imageStyle: {
    height: "180px", // Tăng chiều cao ảnh
    objectFit: "contain",
    borderRadius: "8px",
    marginBottom: "15px",
  },
  // Tiêu đề
  titleStyle: {
    fontSize: "16px",
    color: "#424242",
    margin: "5px 0",
    fontWeight: "600",
    height: "40px", // Giữ chiều cao cố định
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitLineClamp: "2", // Giới hạn 2 dòng
    WebkitBoxOrient: "vertical",
  },
  // Giá
  priceStyle: {
    fontSize: "18px",
    fontWeight: "800",
    color: styles.accentColor, // Giá màu nhấn (Xanh lá)
    margin: "8px 0",
  },
  // Danh mục
  categoryStyle: {
    fontSize: "12px",
    color: styles.subtleColor,
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  },
  // Đánh giá
  ratingStyle: {
    fontSize: "12px",
    color: "#FF9800", // Màu cam cho ngôi sao
    marginTop: "5px",
    fontWeight: "bold",
  },
};

const Listsanpham = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.mainContainer}>
      <div style={styles.gridContainer}>
        {Listproducts.map((product) => (
          <div
            key={product.id}
            style={styles.cardBase}
            onClick={() => navigate(`/product/${product.id}`)}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = styles.cardHover.transform;
              e.currentTarget.style.boxShadow = styles.cardHover.boxShadow;
              e.currentTarget.style.border = styles.cardHover.border;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = styles.cardBase.transform;
              e.currentTarget.style.boxShadow = styles.cardBase.boxShadow;
              e.currentTarget.style.border = styles.cardBase.border;
            }}
          >
            <img
              src={product.image}
              alt={product.title}
              style={styles.imageStyle}
            />

            <div style={{ flexGrow: 1 }}>
              {" "}
              {/* Dùng div bao bọc để căn chỉnh */}
              <h3 style={styles.titleStyle}>{product.title}</h3>
            </div>

            <div>
              {" "}
              {/* Footer card */}
              <p style={styles.priceStyle}>${product.price}</p>
              <p style={styles.categoryStyle}>{product.category}</p>
              <p style={styles.ratingStyle}>
                ⭐ {product.rating.rate} ({product.rating.count} đánh giá)
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Listsanpham;
