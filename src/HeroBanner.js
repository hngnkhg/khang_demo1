// HeroBanner.js
import React from "react";
// Đảm bảo đường dẫn ảnh này tồn tại trong project của bạn
import productBanner from "./assets/images/banner_products.png";

const HeroBanner = () => {
  return (
    <div className="hero-banner">
      <div className="container-1200 banner-content">
        <div className="text-content">
          <span className="special-offer">Special Offer</span>
          <h1 className="big-sale-text">BIG SALE</h1>
          <p className="discount-text">UP TO 50% OFF</p>
          <button className="buy-now-btn">BUY NOW</button>
        </div>

        <div className="image-content">
          <img
            src={productBanner}
            alt="Tennis and Badminton Products"
            className="product-image"
          />
          <span className="sale-badge">50% OFF</span>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
