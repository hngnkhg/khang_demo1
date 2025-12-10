export interface Listproduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export const Listproducts: Listproduct[] = [
  {
    id: 1,
    title: "Bàn Phím Cơ Không Dây RK61 Pro (60%)",
    price: 89.99,
    description:
      "Bàn phím cơ nhỏ gọn 60% với switch Brown Kailh, kết nối 3 chế độ (USB-C, Bluetooth 5.1, 2.4Ghz) và đèn nền RGB tùy chỉnh. Phù hợp cho lập trình viên và game thủ.",
    category: "thiết bị ngoại vi",
    image:
      "https://images.unsplash.com/photo-1587840177721-e0c609c0d02b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: {
      rate: 4.9,
      count: 520,
    },
  },
  {
    id: 2,
    title: "Màn Hình Cong 34-inch Ultrawide 4K QLED",
    price: 799.0,
    description:
      "Màn hình cong tỷ lệ 21:9, độ phân giải 3440x1440, công nghệ QLED, tần số quét 144Hz. Lý tưởng cho đa nhiệm và thiết kế đồ họa chuyên nghiệp.",
    category: "thiết bị hiển thị",
    image:
      "https://images.unsplash.com/photo-1541701494587-c5b005cb224f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: {
      rate: 4.6,
      count: 315,
    },
  },
  {
    id: 3,
    title: "Tai Nghe Chống Ồn Sony WH-1000XM6",
    price: 349.99,
    description:
      "Tai nghe không dây cao cấp với công nghệ chống ồn hàng đầu, thời lượng pin 40 giờ và chất lượng âm thanh Hi-Res Audio Wireless. Thiết kế gọn nhẹ, đệm tai mềm mại.",
    category: "phụ kiện âm thanh",
    image:
      "https://images.unsplash.com/photo-1620013532726-25816913c24d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: {
      rate: 4.8,
      count: 980,
    },
  },
  {
    id: 4,
    title: "Chuột Không Dây Logitech MX Master 4S",
    price: 99.95,
    description:
      "Chuột công thái học dành cho người làm sáng tạo và văn phòng, cảm biến 8000 DPI, cuộn MagSpeed siêu nhanh và kết nối đa thiết bị. Sạc nhanh qua USB-C.",
    category: "thiết bị ngoại vi",
    image:
      "https://images.unsplash.com/photo-1616715112109-b7b51f07455d?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: {
      rate: 4.7,
      count: 765,
    },
  },
  {
    id: 5,
    title: "Đèn LED Bàn Thông Minh Xiaomi Mi Smart Desk Lamp 2",
    price: 45.5,
    description:
      "Đèn bàn thông minh với 4 chế độ chiếu sáng, điều chỉnh độ sáng và nhiệt độ màu qua ứng dụng di động. Thiết kế tối giản, hiện đại, bảo vệ mắt.",
    category: "đồ dùng văn phòng",
    image:
      "https://images.unsplash.com/photo-1549488344-ec2d3e1d1523?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: {
      rate: 4.4,
      count: 410,
    },
  },
  {
    id: 6,
    title: "Balo Laptop Chống Nước Thụy Sĩ (15.6 inch)",
    price: 65.0,
    description:
      "Balo cao cấp chống nước với ngăn chống sốc cho laptop 15.6 inch, cổng sạc USB tích hợp và nhiều ngăn phụ tiện dụng. Hoàn hảo cho doanh nhân và du lịch.",
    category: "phụ kiện di động",
    image:
      "https://images.unsplash.com/photo-1581452140232-a169b5961358?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: {
      rate: 4.5,
      count: 550,
    },
  },
];
