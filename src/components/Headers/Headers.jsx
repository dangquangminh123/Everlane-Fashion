import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from 'react-bootstrap'
import { useLocation, Link } from "react-router-dom"; 
import  './Headers.css'
import { FaArrowRight } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { MdOutlinePerson } from "react-icons/md";
import { LuShoppingCart } from "react-icons/lu";
import cur from '../../assets/us 1.png'
import logo from '../../assets/Logo.png'
import { gsap } from 'gsap';
import CartSidebar from "../../pages/Carrt/cart";

const Headers = () => {
  const currentPath = location.pathname;
  const [isCartOpen, setCartOpen] = useState(false);

  const menuItems = [
    { id: 1, name: "Woman", link: "/list_product", subMenu: ["New Arrivals", "Best Sellers", "Clothing", "Tops & Sweaters", "Pants & Jeans", "Outerwear", "Shoes & Bags", "Sale"]},
    { id: 2, name: "Men", link: "/list_product", subMenu: ["New Arrivals", "Best Sellers", "Clothing", "Tops & Sweaters", "Pants & Jeans", "Outerwear", "Shoes & Bags", "Sale"]},
    { id: 3, name: "About", link: "/about", subMenu: ["Stores", "Factories", "Environmental Initiatives", "Our Carbon Commitment", "Annual Impact Report", "Cleaner Fashion"] },
    { id: 4, name: "Everworld Stories", link: "/everworld", subMenu: [] }
  ];

    // Handle Active user access directly
    const getMenuIdByPath = () => {
      for (const item of menuItems) {
        for (const sub of item.subMenu) {
          const subSlug = sub.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "");
          const subLink = `${item.link}/${subSlug}`;
          if (currentPath === subLink) {
            return item.id;
          }
        }
      }
      return null;
    };

  const [activeMenu, setActiveMenu] = useState(null);
  // const [activeMainMenu, setActiveMainMenu] = useState(null);
  const [activeMainMenu, setActiveMainMenu] = useState(getMenuIdByPath());
  const subMenuRef = useRef(null);
  const signUpRef = useRef(null);
  const arrowRef = useRef(null);
  const currencyRef = useRef(null);
  const logoRef = useRef(null);
  const itemsMenuRef = useRef([]); 
  const personOptionRef = useRef([]);
  const detailsItemsRef = useRef([]);


  const handleMenuClick = (id, event) => {
    event.stopPropagation(); // Ngăn sự kiện lan ra ngoài
    setActiveMenu(activeMenu === id ? null : id); // Toggle menu
    setActiveMainMenu(id); // mark as active
  };


  const isMainMenuActive = (item) => {
    return currentPath.startsWith(item.link);
  };

  const isSubMenuActive = (parentLink, subItem) => {
    const subSlug = subItem.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "");
    const subPath = `${parentLink}/${subSlug}`;
    return currentPath === subPath;
  };

  useEffect(() => {
    gsap.from(signUpRef.current, {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "elastic.out(1, 0.5)"
    });

    gsap.from(arrowRef.current, {
        rotation: 360,
        scale: 0,
        duration: 1.2,
        ease: "back.out(1.7)"
    });

    gsap.from(currencyRef.current, {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: "bounce.out"
    });

    gsap.from(logoRef.current, {
        scale: 0,
        duration: 1,
        ease: "power4.out"
    });

    if (itemsMenuRef.current.length > 0) {
      gsap.fromTo(
        itemsMenuRef.current,
        { opacity: 0, y: 20, scale: 0.8 }, // Trạng thái ban đầu
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2, // Delay giữa các item
          ease: "power3.out"
        }
      );
    }

    gsap.from(personOptionRef.current, {
        y: 30,
        opacity: 0,
        stagger: 0.3,
        duration: 1,
        ease: "expo.out"
    });

    gsap.from(detailsItemsRef.current, {
        rotationY: 180,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "circ.out"
    });

    const handleClickOutside = (event) => {
      if (subMenuRef.current && !subMenuRef.current.contains(event.target)) {
        setActiveMenu(null);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  
  return (
    <>
      <div className="TopHeader">
            <div className='FirstInfo'>Get early access on launches and offers.
                <Link className='SignUpFirst' to={"/"} ref={signUpRef}>Sign Up For Texts</Link>
                <FaArrowRight ref={arrowRef}/>
            </div>
            <div className='TopCurrency' ref={currencyRef}>
                <img src={cur} alt=''/>USD
            </div>
      </div>
     
      <div className="Header d-flex justify-content-center">
          <Col xs={12} md={4}>
              <ul className="menuHeader">
                {menuItems.map((item, index) => (
                  <li
                    key={item.id}
                    className="itemsMenu"
                    onClick={(event) => handleMenuClick(item.id, event)} 
                    ref={(el) => (itemsMenuRef.current[index] = el)}
                  >
                    <Link
                       to={item.link}
                      className={`itemChildrens ${activeMainMenu === item.id ? "active" : ""}`}
                      onClick={(e) => handleMenuClick(item.id, e)}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
          </Col>
          <Col xs={12} md={4}>
            <div className="LogoHeader" ref={logoRef}>
                <Link to={"/"} className="LogoLink">
                    <img src={logo} alt='' />
                </Link>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <div className="PersonalHeader d-flex justify-content-end">
                {[IoSearch, MdOutlinePerson, LuShoppingCart].map((Icon, index) => (
                    <div className="PersonOption" ref={el => personOptionRef.current[index] = el} key={index}>
                        <button className='DetailsItems'
                            ref={el => detailsItemsRef.current[index] = el}
                            onClick={() => {
                              if (Icon === LuShoppingCart) {
                                setCartOpen(true);
                                document.body.style.overflow = "hidden"; // Vô hiệu scroll
                              }
                            }}>
                            <Icon />
                        </button>
                    </div>
                ))}
            </div>
          </Col>
             
      </div>
      
      {/* SubMenu - Nằm ngoài Header */}
      {activeMenu !== null && (
        <ul className={`subMenu show`} ref={subMenuRef} onClick={(e) => e.stopPropagation()}>
          {menuItems.find((item) => item.id === activeMenu)?.subMenu.map((sub, index) => {
               const parentLink = menuItems.find((item) => item.id === activeMenu)?.link || "";
               const subSlug = sub.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "");
               const subLink = `${parentLink}/${subSlug}`;
               return (
                <li key={index} className="subItems">
                  <Link 
                    to={subLink}
                    className={`subChildrens ${isSubMenuActive(parentLink, sub) ? "active" : ""}`}
                  >
                    {sub}
                  </Link>
                </li>
              );
            })}
        </ul>
      )}

    <CartSidebar isOpen={isCartOpen} onClose={() => {
      setCartOpen(false);
      document.body.style.overflow = "auto"; // Bật lại scroll
    }} />
    </>
  
    
  )
 
}

export default Headers