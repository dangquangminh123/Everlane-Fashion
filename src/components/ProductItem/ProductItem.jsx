import React, { useState } from 'react';
import './ProductItem.css'; // chứa phần CSS
import { FiPlus } from "react-icons/fi";
import { Link } from 'react-router-dom'

const ProductItem = ({ product, getColorName }) => {
  const [isHovered, setIsHovered] = useState(false);

  const [selectedColor, setSelectedColor] = useState(product.colors[0]); // mặc định là màu đầu tiên

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className="product-card"
          key={product.id}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
    >
      {product.discount && (
        <div className="discount-tag">{product.discount}</div>
      )}

        <div className="product-image-container">
          <img
            src={product.imageUrl}
            alt={product.title}
            className={`product-image ${isHovered ? 'hide' : ''}`}
          />
          <img
            src={product.image2}
            alt={product.title}
            className={`product-image-hover ${isHovered ? 'show' : ''}`}
          />
          <button className="quick-add-button">
            <span className="button-text">QUICK ADD</span>
            <span className="button-icon"><FiPlus /></span>
          </button>      
        </div>

      <div className="product-info">
        <Link to={"/detail_product"} className="product-title">{product.title}</Link>
        <div className="price">
          <span className="old-price">${product.priceOld}</span>
          <span className="new-price">${product.priceNew}</span>
        </div>
      </div>

      <div className="color-name">{getColorName(selectedColor)}</div>

      <div className="color-options">
        {product.colors.map((color, idx) => (
          <span
            key={idx}
            className="color-circle"
            style={{ background: color }}
            onClick={() => handleColorClick(color)}
          ></span>
        ))}
      </div>

      <div className="product-tags">
        {product.tags.map((tag, index) => (
          <div className="tag-item" key={index}>
            <p className="tag-name">{tag}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductItem;
