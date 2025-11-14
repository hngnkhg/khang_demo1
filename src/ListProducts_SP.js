import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "./supbaseClient";

// Định nghĩa các đối tượng style Trắng - Đen
const styles = {
  // Nền tổng thể: Trắng Sáng
  container: {
    padding: "40px",
    maxWidth: "1400px",
    margin: "0 auto",
    backgroundColor: "#ffffff", // Nền trang màu Trắng tinh
    minHeight: "100vh",
    color: "#2c3e50", // Màu chữ mặc định tối
  },
  // Màu nhấn Gold
  accentColor: "#ffc107", // Vàng Kim
  // Màu giá
  priceColor: "#e53935", // Màu đỏ nổi bật cho giá

  heading: {
    fontSize: "2rem",
    color: "#1a237e", // Xanh Navy đậm cho tiêu đề
    marginBottom: "30px",
    borderBottom: "3px solid #eeeeee", // Gạch chân xám rất nhạt
    paddingBottom: "10px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "25px",
  },
  // Card Sản phẩm: Màu Đen/Tối
  cardBase: {
    border: "1px solid #333333", // Viền tối
    borderRadius: "15px",
    padding: "15px",
    textAlign: "left",
    cursor: "pointer",
    background: "#1e1e1e", // Nền Card Đen/Xám rất đậm
    boxShadow: "0 6px 15px rgba(0,0,0,0.5)", // Đổ bóng mạnh trên nền trắng
    transition: "all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)",
    display: "flex",
    flexDirection: "column",
  },
  cardHover: {
    transform: "translateY(-8px)",
    boxShadow: "0 15px 30px rgba(0,0,0,0.7)",
    border: "1px solid #ffc107", // Viền Vàng Kim khi hover
  },
  imageWrapper: {
    width: "100%",
    height: "220px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    borderRadius: "10px",
    backgroundColor: "#333333", // Nền ảnh xám đậm
    marginBottom: "10px",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  title: {
    margin: "10px 0 5px",
    fontSize: "1.1rem",
    color: "#ffffff", // Chữ trắng sáng trên nền tối
    fontWeight: "600",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  price: {
    color: "#e53935", // Màu giá vẫn nổi bật
    fontWeight: "800",
    fontSize: "1.3rem",
    margin: "5px 0",
  },
  rating: {
    color: "#cccccc", // Màu xám nhạt cho rating
    fontSize: "0.85rem",
    marginTop: "5px",
  }
};

const ListProducts_SP = () => {
  const [listProduct, setListProduct] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data, error } = await supabase
          .from("product1")
          .select("id, title, price, image, rating_rate, rating_count")
          .order("id", { ascending: true });
        if (error) throw error;
        setListProduct(data);
      } catch (err) {
        console.error("Lỗi khi lấy dữ liệu:", err.message);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>SẢN PHẨM NỔI BẬT</h2>

      <div style={styles.grid}>
        {listProduct.map((p) => (
          <div
            key={p.id}
            onClick={() => navigate(`/detail/${p.id}`)}
            style={styles.cardBase}
            onMouseEnter={(e) => {
              Object.assign(e.currentTarget.style, styles.cardHover);
            }}
            onMouseLeave={(e) => {
              Object.assign(e.currentTarget.style, styles.cardBase);
            }}
          >
            <div style={styles.imageWrapper}>
              <img
                src={p.image}
                alt={p.title}
                style={styles.image}
              />
            </div>

            <div style={{ flexGrow: 1 }}>
                <h4 style={styles.title}>
                  {p.title}
                </h4>
                <p style={styles.price}>
                  ${p.price}
                </p>
            </div>
            
            <small style={styles.rating}>
              <span style={{color: styles.accentColor, fontWeight: 'bold'}}>★</span> {p.rating_rate} | ({p.rating_count} đánh giá)
            </small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListProducts_SP;