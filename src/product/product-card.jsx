import React from "react";

import "./styles.css";

const ProductCard = ({ product }) => {
  const getDiscountedPrice = (originalPrice, discountPercent) => {
    let discountedPrice = (originalPrice * (100 - discountPercent)) / 100;
    discountedPrice = parseInt(discountedPrice);
    return discountedPrice;
  };

  return (
    <>
      <div className="productCardWrapper">
        <div style={{ position: "relative" }}>
          <img
            src={product.image}
            alt=""
            srcset=""
            className="imageContainer"
          />
          <div className="quickViewWrapper">Quick view</div>
        </div>

        <div className="productDetailsWrapper">
          <div
            style={{
              color: "mediumpurple",
              fontSize: "18px",
              fontWeight: "800",
              margin: "12px 0",
            }}
          >
            {product.title.toUpperCase()}
          </div>
          <div>{product.description}</div>
          <div style={{ display: "flex", marginBottom: "12px" }}>
            <div
              style={{
                fontWeight: "bold",
                fontSize: "14px",
              }}
            >
              ₹
              {getDiscountedPrice(
                product.originalPrice,
                product.discountPercent
              )}
            </div>
            <div style={{ marginLeft: "8px", fontSize: "12px" }}>
              <del>₹{product.originalPrice}</del>
            </div>
            <div
              style={{
                marginLeft: "8px",
                fontSize: "12px",
                color: "mediumpurple",
              }}
            >
              ({product.discountPercent}% off){" "}
            </div>
          </div>
          <div className="salePriceContainer">
            <div style={{ color: "mediumpurple" }}>★ </div> Sale Price ₹
            {product.salePrice}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
