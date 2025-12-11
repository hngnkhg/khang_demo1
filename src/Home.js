import React, { useState } from "react";
import HeroBanner from "./HeroBanner"; // Đã import

const Home = () => {
  const str = "THỨ BẢY NGÀY 11/10/2025";

  // ... (các biến thường và state khác của bạn)

  const dssv = ["Nguyễn Văn An111", "Trần Văn Ba", "Nguyễn Văn Cường"];

  const ds2 = [
    { id: "001", hoten: "Nguyễn Thị An111", lop: "K18", gioitinh: false },
    { id: "002", hoten: "Trần Văn Ba", lop: "K18", gioitinh: true },
    { id: "003", hoten: "Nguyễn Văn Cường", lop: "K18", gioitinh: true },
    { id: "007", hoten: "Nguyễn Văn Bảy", lop: "phicong", gioitinh: true },
  ];

  const [ds3, setDs3] = useState([
    { id: "101", hoten: "Lê Thị Hoa", lop: "K19", gioitinh: false },
    { id: "102", hoten: "Phạm Văn Nam", lop: "K19", gioitinh: true },
    { id: "103", hoten: "Nguyễn Văn Bình", lop: "K19", gioitinh: false },
  ]);

  const [tenMoi, setTenMoi] = useState("");

  const handleChangeDs3 = (id, field, value) => {
    setDs3((prevDs3) =>
      prevDs3.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  const TestSuaDLds3_aaa = (id) => {
    if (!tenMoi.trim()) {
      alert("Vui lòng nhập tên mới trước khi sửa!");
      return;
    }
    var newds3 = ds3.map((phantu) => {
      if (phantu.id === id) {
        // Nguyên tắc của State trong React: KHÔNG SỬA TRỰC TIẾP
        // Thay vì: phantu.hoten = tenMoi;
        // Ta dùng cách tạo ra đối tượng mới:
        return { ...phantu, hoten: tenMoi };
      }
      return phantu;
    });

    setTenMoi("");
    setDs3(newds3);
  };

  const TestSuaDLds2 = (id) => {
    // Vẫn giữ lại để minh họa: sửa biến thường không cập nhật UI
    ds2.map((item) => {
      if (item.id === id) {
        item.hoten = "Ronaldo";
        console.log("ds2 item.hoten = " + item.hoten);
      }
      return item;
    });
    alert("ds2 đã thay đổi nhưng UI không cập nhật tự động!");
  };

  return (
    // Dùng thẻ Fragment <>...</> hoặc <div> chính để bọc (Nếu không có HeroBanner)
    // Nhưng do Layout đã có container, ta có thể đặt HeroBanner ngoài container để tràn hết chiều rộng
    <>
      {/* 1. KHU VỰC HERO BANNER (Tràn chiều rộng) */}
      <HeroBanner />

      {/* 2. KHU VỰC NỘI DUNG CHÍNH (Trong container của Layout) */}
      {/* Lưu ý: Nếu muốn khu vực này cũng tràn chiều rộng, bạn phải bỏ style={{ padding: "20px" }} và điều chỉnh CSS của .container trong Layout.js */}
      <div style={{ padding: "20px" }}>
        <h3>{str}</h3>

        {/* Hiển thị danh sách từ biến thường dssv */}
        <div>
          <p>DANH SÁCH SINH VIÊN (biến thường dssv)</p>
          {dssv.map((sv, index) => (
            <p key={index}>{sv}</p>
          ))}
        </div>

        {/* Hiển thị bảng ds2 (biến thường) */}
        <div style={{ marginTop: "20px" }}>
          <p>DANH SÁCH SINH VIÊN ds2 (biến thường)</p>
          <table border="1" cellPadding="5">
            <thead>
              <tr>
                <td>ID</td>
                <td>Họ tên</td>
                <td>Lớp</td>
                <td>Giới tính</td>
                <td>Sửa DL</td>
              </tr>
            </thead>
            <tbody>
              {ds2.map((sv) => (
                <tr key={sv.id}>
                  <td>{sv.id}</td>
                  <td>
                    <input type="text" value={sv.hoten} readOnly />
                  </td>
                  <td>{sv.lop}</td>
                  <td>
                    <input type="checkbox" checked={sv.gioitinh} readOnly />
                  </td>
                  <td>
                    <input
                      type="button"
                      value="Sửa"
                      onClick={() => TestSuaDLds2(sv.id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <small>
            Chú ý: Vì ds2 là biến thường, UI sẽ không cập nhật khi thay đổi giá
            trị.
          </small>
        </div>

        {/* Hiển thị bảng ds3 (state) */}
        <div style={{ marginTop: "30px" }}>
          <p>DANH SÁCH SINH VIÊN ds3 (state)</p>

          {/* Ô nhập tên mới */}
          <div style={{ marginBottom: "10px" }}>
            <label>Nhập tên mới: </label>
            <input
              type="text"
              value={tenMoi}
              onChange={(e) => setTenMoi(e.target.value)}
              placeholder="Nhập tên muốn đổi..."
            />
          </div>

          <table border="1" cellPadding="5">
            <thead>
              <tr>
                <td>ID</td>
                <td>Họ tên</td>
                <td>Lớp</td>
                <td>Giới tính</td>
                <td>Sửa DL</td>
              </tr>
            </thead>
            <tbody>
              {ds3.map((sv) => (
                <tr key={sv.id}>
                  <td>{sv.id}</td>
                  <td>
                    <input
                      type="text"
                      value={sv.hoten}
                      onChange={(e) =>
                        handleChangeDs3(sv.id, "hoten", e.target.value)
                      }
                    />
                  </td>
                  <td>{sv.lop}</td>
                  <td>
                    <input
                      type="checkbox"
                      checked={sv.gioitinh}
                      onChange={(e) =>
                        handleChangeDs3(sv.id, "gioitinh", e.target.checked)
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="button"
                      value="Sửa"
                      onClick={() => TestSuaDLds3_aaa(sv.id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <small>
            Chú ý: ds3 là state, mọi thay đổi sẽ tự động render lại UI.
          </small>
        </div>
      </div>
    </>
  );
};

return (
  <>
    {/* 1. HERO BANNER: Tràn chiều rộng (Toàn màn hình) */}
    <HeroBanner />

    {/* 2. NỘI DUNG CÒN LẠI: Giới hạn chiều rộng (Căn giữa 1200px) */}
    <div
      className="container-1200"
      style={{ paddingTop: "20px", paddingBottom: "40px" }}
    >
      {/* Bắt đầu nội dung của bạn */}
      <h3>{str}</h3>
      {/* ... (Các phần hiển thị dssv, ds2, ds3 của bạn tiếp tục ở đây) ... */}
    </div>
  </>
);

export default Home;
