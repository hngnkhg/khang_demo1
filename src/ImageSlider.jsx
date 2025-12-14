// ImageSlider.jsx

import { useState, useEffect } from "react"; // <--- CẦN PHẢI CÓ DÒNG NÀY

// Import file CSS tùy chỉnh cho slider (bạn cần tự tạo file này)
// import "./ImageSlider.css"; // Hãy chắc chắn file CSS được link

const ImageSlider = () => {
  const slides = [
    {
      id: 1,
      src: "https://theme.hstatic.net/200000931671/1001296384/14/share_fb_home.jpg?v=2065",
      alt: "Sản phẩm mới",
      link: "/egov",
    },
    {
      id: 2,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPmpPx3XMhXaouPEMmfQRM8HL7m_68lLmTOQ&s",
      alt: "Khuyến mãi lớn",
      link: "/egov",
    },
    {
      id: 3,
      src: "https://cdn.shopvnb.com/uploads/images/tin_tuc/cac-dong-vot-babolat-1-1703535970.webp",
      alt: "Thương hiệu VIP",
      link: "/egov",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // LOGIC TỰ ĐỘNG CHUYỂN SLIDE MỖI 3 GIÂY
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const translateXValue = `-${currentSlide * (100 / slides.length)}%`;

  return (
    <div
      className="slider-container"
      style={{ transform: `translateX(${translateXValue})` }}
    >
      {slides.map((slide) => (
        <a href={slide.link} key={slide.id} className="slider-slide">
          <img src={slide.src} alt={slide.alt} />
        </a>
      ))}
    </div>
  );
};

export default ImageSlider;
