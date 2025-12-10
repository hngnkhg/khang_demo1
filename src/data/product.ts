// src/product.ts
export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}
//Viet them 22/11
export interface CartItem {
  product: Product;
  quantity: number;
  // Bạn có thể thêm các field logic khác từ Flutter nếu cần, ví dụ:
  // createdDate?: Date;
}

export const products: Product[] = [
  {
    id: 1,
    title: "Vợt Tennis Wilson Ultra 100 V4 (300g)",
    price: 249.0,
    description:
      "Dòng vợt Ultra thế hệ mới, mang lại độ ổn định cao và sức mạnh bộc phát. Thích hợp cho người chơi muốn kết hợp giữa tốc độ và lực đánh.",
    category: "Power", // ✅ Đã đổi
    image:
      "https://cdn.hstatic.net/products/200000931671/vot-tennis-wilson-ultra-111-v5-chua-cang-day-wr179111u2__2__55049fd82530470eb1993845f9e02c4a.png",
  },
  {
    id: 2,
    title: "Vợt Tennis Babolat Pure Drive 2021 (300g)",
    price: 235.5,
    description:
      "Vợt tạo lực mạnh mẽ và dễ sử dụng nhất của Babolat. Công nghệ HTR System cải thiện độ ổn định, phù hợp với người chơi muốn có cú đánh uy lực.",
    category: "Power", // ✅ Đã đổi
    image:
      "https://cdn.shopvnb.com/uploads/images/bai_viet/vot-tennis-2-1723067629.webp",
  },
  {
    id: 3,
    title: "Vợt Tennis Head Radical MP (295g)",
    price: 210.99,
    description:
      "Dòng vợt linh hoạt, cân bằng giữa khả năng kiểm soát và sức mạnh. Lý tưởng cho người chơi đa năng trên sân, thích ứng với mọi phong cách đánh.",
    category: "Versatile", // ✅ Đã đổi
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvdV5BdTauCJ_LvESzSL9uAT_MJe4M1gwVwA&s",
  },
  {
    id: 4,
    title: "Vợt Tennis Yonex Percept 100 (300g)",
    price: 259.99,
    description:
      "Sự thay thế hoàn hảo cho dòng VCORE Pro. Mang lại cảm giác bóng mềm mại, chính xác cao và khả năng kiểm soát bóng vượt trội.",
    category: "Professional", // ✅ Đã đổi
    image:
      "https://www.gusport.com.vn/image/catalog/san-pham/VOT/YONEX/Percept/percept-2023/percept-100-300gr/vot-tennis-yonex-percept-100-300gr-2023-made-in-japan-01pe100.jpg",
  },
  {
    id: 5,
    title: "Vợt Tennis Babolat Pure Aero Rafa Origin (317g)",
    price: 279.0,
    description:
      "Phiên bản đặc biệt theo thông số của Rafael Nadal. Thiết kế nặng hơn, độ cứng cao, tối ưu hóa cho những cú topspin xoáy mạnh và tốc độ cao.",
    category: "Power", // ✅ Đã đổi
    image:
      "https://babolat.com.vn/wp-content/uploads/2025/08/101574-PS_97_CARBON_GREY-3018-1-Face-350x350.png",
  },
  {
    id: 6,
    title: "Vợt Tennis Mizuno C-Tour 300 (300g)",
    price: 178.0,
    description:
      "Dòng vợt cao cấp đến từ Nhật Bản. Tập trung vào kiểm soát và cảm giác bóng tốt. Phù hợp cho người chơi kỹ thuật và thích đánh gần lưới.",
    category: "Professional", // ✅ Đã đổi
    image:
      "https://product.hstatic.net/1000313927/product/mizuno_ctour_300__vot_tennis_cao_cap_chinh_hang_sieu_ben_nhat_ban__3_4cc18d2bb32e444c944ccc72ca19d578.jpg",
  },
  {
    id: 7,
    title: "Vợt Tennis Wilson Blade 98 V8 Team (280g)",
    price: 189.99,
    description:
      "Phiên bản nhẹ hơn của Blade V8, dễ dàng xoay sở và kiểm soát. Mang lại cảm giác kết nối tuyệt vời với bóng, phù hợp cho người chơi trung cấp.",
    category: "Professional", // ✅ Đã đổi
    image:
      "https://sporthouse.vn/images/products/2023/12/13/original/blade%20v8%20team%20280.jpg",
  },
  {
    id: 8,
    title: "Vợt Tennis Head Speed PWR L (230g)",
    price: 179.99,
    description:
      "Vợt siêu nhẹ, trợ lực tối đa, đầu vợt lớn. Hoàn hảo cho người chơi lớn tuổi hoặc người mới bắt đầu muốn tăng tốc độ và sức mạnh cú đánh.",
    category: "Power", // ✅ Đã đổi
    image:
      "https://www.gusport.com.vn/image/catalog/san-pham/VOT/HEAD/SPEED/HEAD%20SPEED%202022/vot-tennis-head-speed-pwr-l-230gr-233682/vot-tennis-head-speed-pwr-l-230gr-233682.jpg",
  },
  {
    id: 9,
    title: "Vợt Tennis Wilson Hammer H6 (Trợ lực)",
    price: 155.0,
    description:
      "Vợt trợ lực lớn với công nghệ Hammer. Điểm ngọt lớn, giúp người chơi dễ dàng tạo ra lực đánh sâu và mạnh ngay cả khi không chạm tâm vợt.",
    category: "Power", // ✅ Đã đổi
    image:
      "https://vietthethao.com/public/cuploads/images/39V%E1%BB%A2T%20TENNIS%20WILSON%20HAMMER%20H6.jpg",
  },
  {
    id: 10,
    title: "Vợt Tennis Head Boom MP (295g)",
    price: 245.0,
    description:
      "Thiết kế hình dạng đầu vợt mới, mang lại sự kết hợp tuyệt vời giữa sức mạnh bùng nổ và cảm giác mềm mại. Hỗ trợ tạo xoáy (spin) tốt.",
    category: "Versatile", // ✅ Đã đổi
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFPR96Ig4WkHGhCc7wLu-LnIrjoO8naVvQfg&s",
  },
  {
    id: 11,
    title:
      "Vợt Tennis Yonex EZONE 100L (285g) and very strong for newbie, very good ",
    price: 199.0,
    description:
      "Vợt nhẹ và linh hoạt, công nghệ Textreme giúp tăng độ ổn định và cảm giác. Phù hợp cho người chơi cần độ kiểm soát khi đánh bóng tốc độ.",
    category: "Versatile",
    image:
      "https://shopvnb.com//uploads/gallery/vot-tennis-warrior-107t-textreme-280gr-chinh-hang_1694371781.webp",
  },
  {
    id: 12,
    title:
      "Vợt Tennis Yonex EZONE 100L (285g), it work for woman and so very powerful",
    price: 230.0,
    description:
      "Vợt nhẹ, dễ sử dụng nhưng vẫn giữ được tốc độ và lực đánh lớn. Công nghệ Isometric đặc trưng của Yonex giúp tăng điểm ngọt (sweet spot).",
    category: "Versatile",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw1h_f_AnOpZAky8khSq1D4M2ZAbEHBmQnWA&s",
  },
];
