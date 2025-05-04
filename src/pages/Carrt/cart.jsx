import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { FaRegTrashCan } from "react-icons/fa6";
import productCart from "../../assets/Cart/productcart.png";
import productCart2 from "../../assets/Cart/productcart2.png";
import productCart3 from "../../assets/Cart/productcart3.png";
import productCart4 from "../../assets/Cart/productcart4.png";
import productCart5 from "../../assets/Cart/productcart5.png";
import { GoPlus } from "react-icons/go";
import { HiMinus } from "react-icons/hi";

import "./cart.css"; 

const CartSidebar = ({ isOpen, onClose }) => {

  // Danh sách sản phẩm trong giỏ hàng
  const listCart = [
    {
      id: 1,
      name: "The Essential Organic Crew",
      size: "Extra Small",
      color: "White",
      image: productCart,
      price: 789900,
      discountPrice: 598000,
      quantity: 1,
    },
    {
      id: 2,
      name: "The Pointelle Short-Sleeve Tee",
      size: "Medium",
      color: "Black",
      image: productCart2,
      price: 999000,
      discountPrice: 899000,
      quantity: 2,
    },  
    {
      id: 3,
      name: "The Popover Dress in Linen",
      size: "S",
      color: "Deep Pink",
      image: productCart3,
      price: 999000,
      discountPrice: 899000,
      quantity: 2,
    },  
    {
      id: 3,
      name: "The Essential Organic Crew",
      size: "XL",
      color: "Kalamata",
      image: productCart4,
      price: 789000,
      discountPrice: 589000,
      quantity: 2,
    },
    {
      id: 4,
      name: "The Rec Crew",
      size: "L",
      color: "Heathered Navy",
      image: productCart5,
      price: 999000,
      discountPrice: 790000,
      quantity: 2,
    },
  ]
  const sidebarRef = useRef(null);
  const overlayRef = useRef(null);

    // Set vị trí ban đầu
  useEffect(() => {
      gsap.set(sidebarRef.current, { xPercent: 100 }); // ẩn ngoài màn hình
    }, []);

  // Slide in/out effect
  useEffect(() => {
    if (isOpen) {
      gsap.to(overlayRef.current, {
        autoAlpha: 1,
        duration: 0.3,
        display: "block"
      });

      gsap.to(sidebarRef.current, {
        xPercent: 0,
        duration: 0.5,
        ease: "power3.out"
      });
    } else {
      gsap.to(overlayRef.current, {
        autoAlpha: 0,
        duration: 0.3,
        display: "none"
      });

      gsap.to(sidebarRef.current, {
        xPercent: 100,
        duration: 0.4,
        ease: "power2.in"
      });
    }
  }, [isOpen]);

  return (
    <>
      {/* Overlay nền mờ */}
      <div
        className="cart-overlay"
        ref={overlayRef}
        onClick={onClose}
      ></div>

      {/* Giỏ hàng */}
      <div
        className="cart-sidebar"
        ref={sidebarRef}
        >
        <div className="cart-header">
          <h5 className="headerNameCart">Giỏ hàng (3)</h5>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>
        <div className="cart-body">
            <span className="titleCartBody">Add 2 more to your bundle to save ₫789900</span>
            <div className="listCart">
                {listCart.map((item) => (
                <div className="cartItems" key={item.id}>
                    <div className="imageProductCart">
                        <img src={item.image} alt="Product" />
                    </div>
                    <div className="optionCartProduct">
                        <div className="optionTopProduct">
                            <div className="nameCartProduct">
                                <span className="nameItems">{item.name}</span>
                                <span className="nameSizeColor"> {item.size} | {item.color}</span>
                            </div>
                            <div className="trashItemProduct">
                                <FaRegTrashCan />
                            </div>
                        </div>
                        <div className="optionBottomProduct">
                            <div className="priceItemProduct">
                                <span className="priceItemDiscount">₫{item.discountPrice.toLocaleString()}</span>
                                <span className="priceItem">   ₫{item.price.toLocaleString()}</span>
                            </div>
                            <div className="optionQuantitycart">
                                <button className="btnQuantity"><HiMinus /></button>
                                <input type="text" className="inputQuantity" value={item.quantity} readOnly/>
                                <button className="btnQuantity"><GoPlus /></button>
                            </div>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
        <hr className="view-more-line" />
        <div className="cart_total">

          <div className="titleTotal">
            <span className="subTotal">Total</span>
            <span className="TotalPrice">₫789900</span>
          </div>
          <div className="btnCheckout">
            <button className="btnCheckoutCart">Checkout</button>
          </div>
        </div>
      </div>

    
    </>
  );
};

export default CartSidebar;
