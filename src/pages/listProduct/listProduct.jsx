import React, { useState, useRef, useEffect }  from 'react';
import "./listProduct.css";
import { FiPlus } from "react-icons/fi";
import { HiMinus } from "react-icons/hi2";

import product1 from "../../assets/Product/product1.png";
import product2 from "../../assets/Product/product2.png";
import product3 from "../../assets/Product/product3.png";
import product4 from "../../assets/Product/product4.png";
import product5 from "../../assets/Product/product5.png";
import product6 from "../../assets/Product/product6.png";
import product7 from "../../assets/Product/product7.png";
import product8 from "../../assets/Product/product8.png";
import product9 from "../../assets/Product/product9.png";

const products = [
    {
      id: 1,
      title: "The Waffle Long-Sleeve Crew",
      priceOld: 188,
      priceNew: 132,
      discount: "30% off",
      imageUrl: product1,
      colors: ["#514535", "#3A3840", "#8C7058", "#262525"],
    },
    {
      id: 1,
      title: "The Waffle Long-Sleeve Crew",
      priceOld: 188,
      priceNew: 132,
      discount: "30% off",
      imageUrl: product1,
      colors: ["#514535", "#3A3840", "#8C7058", "#262525"],
    },
    {
      id: 1,
      title: "The Waffle Long-Sleeve Crew",
      priceOld: 188,
      priceNew: 132,
      discount: "30% off",
      imageUrl: product1,
      colors: ["#514535", "#3A3840", "#8C7058", "#262525"],
    },
    {
      id: 1,
      title: "The Waffle Long-Sleeve Crew",
      priceOld: 188,
      priceNew: 132,
      discount: "30% off",
      imageUrl: product1,
      colors: ["#514535", "#3A3840", "#8C7058", "#262525"],
    },
    {
      id: 1,
      title: "The Waffle Long-Sleeve Crew",
      priceOld: 188,
      priceNew: 132,
      discount: "30% off",
      imageUrl: product1,
      colors: ["#514535", "#3A3840", "#8C7058", "#262525"],
    },
    {
      id: 1,
      title: "The Waffle Long-Sleeve Crew",
      priceOld: 188,
      priceNew: 132,
      discount: "30% off",
      imageUrl: product1,
      colors: ["#514535", "#3A3840", "#8C7058", "#262525"],
    },
    {
      id: 1,
      title: "The Waffle Long-Sleeve Crew",
      priceOld: 188,
      priceNew: 132,
      discount: "30% off",
      imageUrl: product1,
      colors: ["#514535", "#3A3840", "#8C7058", "#262525"],
    },
    {
      id: 1,
      title: "The Waffle Long-Sleeve Crew",
      priceOld: 188,
      priceNew: 132,
      discount: "30% off",
      imageUrl: product1,
      colors: ["#514535", "#3A3840", "#8C7058", "#262525"],
    },
    {
      id: 1,
      title: "The Waffle Long-Sleeve Crew",
      priceOld: 188,
      priceNew: 132,
      discount: "30% off",
      imageUrl: product1,
      colors: ["#514535", "#3A3840", "#8C7058", "#262525"],
    },
    {
      id: 1,
      title: "The Waffle Long-Sleeve Crew",
      priceOld: 188,
      priceNew: 132,
      discount: "30% off",
      imageUrl: product1,
      colors: ["#514535", "#3A3840", "#8C7058", "#262525"],
    },
];
  const categories = [
    'Everyone - All Gender, Collection',
    'Accessories & Gift Cards',
    'Backpacks, Weekenders & Duffle Bags',
    'Dress Shirts & Button-downs',
    'Jackets & Outerwear',
    'Jeans & Pants',
    'Shoes & Boots',
    'Socks & Underwear',
    'Sunglasses',
    'Watches',
  ];

  const colors = [
    { name: 'Black', color: '#1A1A1A' },
    { name: 'Blue', color: '#21558D' },
    { name: 'Brown', color: '#925C37' },
    { name: 'Green', color: '#585B45' },
    { name: 'Grey', color: '#E1E1E3' },
    { name: 'Orange', color: '#D38632' },
    { name: 'Pink', color: '#EFCEC9' },
    { name: 'Red', color: '#BD2830' },
    { name: 'Tan', color: '#B3A695' },
    { name: 'White', color: '#FFFFFF' },
    { name: 'Yellow', color: '#E5C542' },
    { name: 'Navy', color: '#001F3F' },
    { name: 'Beige', color: '#F5F5DC' },
  ];
  const sizes = [
    { label: 'Waist', options: ['36', '38', '40', '42', '44', '46', '48', '50'] },
    { label: 'Clothing', options: ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'] },
    { label: 'European', options: ['EU34', 'EU36', 'EU38', 'EU40'] },
    { label: 'US Sizes', options: ['US6', 'US7', 'US8', 'US9'] },
    { label: 'Unisex', options: ['One Size'] },
  ]



const ListProduct = () => {

  const [categoryExpanded, setCategoryExpanded] = useState(false);
  const categoryToShow = categoryExpanded ? categories : categories.slice(0, 5);
  const [colorExpanded, setColorExpanded] = useState(false);
  const colorsToShow = colorExpanded ? colors : colors.slice(0, 9);
  const [sizeExpanded, setSizeExpanded] = useState(false);
  const sizesToShow = sizeExpanded ? sizes : sizes.slice(0, 3);

  return (
    <div className="product-page">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="product-count">
          <p>249 Products</p>
          <hr className="underline" />
        </div>

        <div className="filter-group">
          <h3 className="filter-title">Category</h3>
          {categoryToShow.map((category, index) => (
            <div key={index} className="checkbox-wrapper">
              <div className="checkbox-container">
                <input type="checkbox" className="checkbox" />
              </div>
              <div className="category-text">{category}</div>
            </div>
          ))}
          {categories.length > 5 && (
            <div
              className="view-more-wrapper"
              onClick={() => setCategoryExpanded(!categoryExpanded)}
            >
              <p className="view-more-text">
                {categoryExpanded ? 'View Less' : 'View More'}
                <span className="view-more-icon">
                  {categoryExpanded ? <HiMinus /> : <FiPlus />}
                </span>
              </p>
              <hr className="view-more-line" />
            </div>
          )}
        </div>

        <div className="filter-group">
          <h3 className="filter-title">Color</h3>
          <div className="color-grid">
            {colorsToShow.map((color, index) => (
              <div key={index} className="color-item">
                <div className="color-box" style={{ backgroundColor: color.color }}></div>
                <p className="color-label">{color.name}</p>
              </div>
            ))}
          </div>

          {colors.length > 9 && (
            <div
              className="view-more-wrapper"
              onClick={() => setColorExpanded(!colorExpanded)}
            >
              <p className="view-more-text">
                {colorExpanded ? 'View Less' : 'View More'}
                <span className="view-more-icon">
                  {colorExpanded ? <HiMinus /> : <FiPlus />}
                </span>  
              </p>
              <hr className="view-more-line" />
            </div>
          )}
        </div>

        <div className="filter-group">
          <h3 className="filter-title">Size</h3>

          {sizesToShow.map((group, idx) => (
            <div key={idx}>
              <p className="sub-title">{group.label}</p>
              <div className="size-grid">
                {group.options.map((size, index) => (
                  <div key={index} className="size-box">{size}</div>
                ))}
              </div>
            </div>
          ))}

          {sizes.length > 3 && (
              <div
                className="view-more-wrapper"
                onClick={() => setSizeExpanded(!sizeExpanded)}
              >
                <p className="view-more-text">
                  {sizeExpanded ? 'View Less' : 'View More'}
                  <span className="view-more-icon">
                    {sizeExpanded ? <HiMinus /> : <FiPlus />}
                  </span>  
                </p>
                <hr className="view-more-line" />
              </div>
            )}
        </div>
      </aside>

      {/* Product List */}
      <section className="product-list">
        <h2>Men’s Clothing & Apparel - New Arrivals</h2>
        <div className="flex-products">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <div className="discount-tag">{product.discount}</div>
              <img src={product.imageUrl} alt={product.title} />
              <h4>{product.title}</h4>
              <div className="price">
                <span className="old-price">${product.priceOld}</span>
                <span className="new-price">${product.priceNew}</span>
              </div>
              <div className="color-options">
                {product.colors.map((color, idx) => (
                  <span key={idx} className="color-circle" style={{ background: color }}></span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ListProduct;