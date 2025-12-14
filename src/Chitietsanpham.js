// src/Chitietsanpham.js

import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
// 1. IMPORT SUPABASE CLIENT
// Hãy chắc chắn rằng bạn có file này đã được cấu hình với khóa API của Supabase
import { supabase } from "./supbaseClient"; 

export default function Chitietsanpham() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // 2. THAY THẾ LOGIC FETCH API
    const fetchProduct = async () => {
      setLoading(true);
      setError(null);
      try {
        // Tên bảng trong Supabase của bạn là 'product1' (như trong hình ảnh)
        const { data, error: supabaseError } = await supabase
          .from("product1") 
          .select("*") // Lấy tất cả các cột
          .eq("id", id) // Lọc theo cột 'id' bằng giá trị từ URL
          .single(); // Lấy một hàng duy nhất

        if (supabaseError) {
          throw new Error(supabaseError.message || "Lỗi khi tải sản phẩm từ Supabase.");
        }
        
        if (data) {
          setProduct(data);
        } else {
          throw new Error("Không tìm thấy sản phẩm với ID này.");
        }

      } catch (err) {
        console.error("Lỗi Supabase:", err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
        fetchProduct();
    }
    
  }, [id]); // Dependency array: chạy lại khi id thay đổi

  if (loading) {
    return <p style={{ padding: 20 }}>Đang tải dữ liệu...</p>;
  }

  if (error || !product) {
    return (
      <div style={{ padding: 20 }}>
        <h3>Không tìm thấy sản phẩm!</h3>
        <p>{error}</p>
        <button onClick={() => navigate(-1)}>Quay lại</button>
      </div>
    );
  }

  // Chú ý: Các trường dữ liệu (image, title, price, description, category) 
  // phải khớp với tên cột trong bảng 'product1' của Supabase bạn.

  return (
    <div style={{ padding: "20px" }}>
      <button onClick={() => navigate(-1)} style={{ marginBottom: "20px" }}>
        ⬅ Quay lại
      </button>

      <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
        <img
          src={product.image}
          alt={product.title}
          style={{ width: "250px", height: "250px", objectFit: "contain" }}
        />
        <div>
          <h2>{product.title}</h2>
          <p>
            <strong>Giá:</strong> ${product.price}
          </p>
          <p>
            <strong>Loại:</strong> {product.category}
          </p>
          <p style={{ maxWidth: "400px" }}>{product.description}</p>
        </div>
      </div>
    </div>
  );
}