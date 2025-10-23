import React from "react";
import { Listproducts } from "./data/listproduct";
import { useNavigate } from "react-router-dom";

const Listsanpham = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#f9f9f9",
        padding: "20px",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: "16px",
          maxWidth: "1200px",
          width: "100%",
        }}
      >
        {Listproducts.map((product) => (
          <div
            key={product.id}
            style={{
              height: "360px",
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "10px",
              textAlign: "center",
              backgroundColor: "#fff",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
            onClick={() => navigate(`/product/${product.id}`)}
          >
            <img
              src={product.image}
              alt={product.title}
              style={{
                height: "150px",
                objectFit: "contain",
                borderRadius: "6px",
                marginBottom: "10px",
              }}
            />
            <h3
              style={{
                fontSize: "15px",
                margin: "5px 0",
                height: "38px",
                overflow: "hidden",
              }}
            >
              {product.title}
            </h3>
            <p>${product.price}</p>
            <p style={{ fontSize: "13px", color: "#666" }}>
              {product.category}
            </p>
            <p style={{ fontSize: "12px", color: "#ff9800" }}>
              ⭐ {product.rating.rate} ({product.rating.count} đánh giá)
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Listsanpham;
