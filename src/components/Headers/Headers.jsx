import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from 'react-bootstrap'
import  './Headers.css'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { MdOutlinePerson } from "react-icons/md";
import { LuShoppingCart } from "react-icons/lu";
import cur from '../../assets/us 1.png'
import logo from '../../assets/Logo.png'
const Headers = () => {

  const [activeMenu, setActiveMenu] = useState(null);
  const subMenuRef = useRef(null);

  const menuItems = [
    { id: 1, name: "Woman", link: "/", subMenu: ["New Arrivals", "Best Sellers", "Clothing", "Tops & Sweaters", "Pants & Jeans", "Outerwear", "Shoes & Bags", "Sale"]},
    { id: 2, name: "Men", link: "/", subMenu: ["New Arrivals", "Best Sellers", "Clothing", "Tops & Sweaters", "Pants & Jeans", "Outerwear", "Shoes & Bags", "Sale"]},
    { id: 3, name: "About", link: "/", subMenu: ["Stores", "Factories", "Environmental Initiatives", "Our Carbon Commitment", "Annual Impact Report", "Cleaner Fashion"] },
    { id: 4, name: "Everworld Stories", link: "/", subMenu: [] }
  ];

  const handleMenuClick = (id, event) => {
    event.preventDefault(); // Ngăn điều hướng nếu có submenu
    event.stopPropagation(); // Ngăn sự kiện lan ra ngoài
    setActiveMenu(activeMenu === id ? null : id); // Toggle menu
  };

  useEffect(() => {
    // Khi click bên ngoài submenu, đóng submenu lại
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
                <Link className='SignUpFirst' to={"/"}>Sign Up For Texts</Link>
                <FaArrowRight />
            </div>
            <div className='TopCurrency'>
                <img src={cur} alt=''/>USD
            </div>
          
      </div>
     
      <div className="Header d-flex justify-content-center">
                <Col xs={12} md={4}>
                <ul className="menuHeader">
                     {menuItems.map((item) => (
                      <li key={item.id} className="itemsMenu">
                        <Link to={item.subMenu.length > 0 ? "#" : item.link}
                          className="itemChildrens"
                          onClick={(e) => handleMenuClick(item.id, e)}>
                            {item.name}
                        </Link>
                      </li>
                    ))}
                </ul>
                </Col>
                <Col xs={12} md={4}>
                    <div className="LogoHeader">
                        <img src={logo} alt='' />
                    </div>
                </Col>
                <Col xs={12} md={4}>
                    <div className="PersonalHeader d-flex justify-content-end">
                        <div className="PersonOption">
                          <button className='DetailsItems'>
                              <IoSearch />
                          </button>
                        </div>
                        <div className="PersonOption">
                          <button className='DetailsItems'>
                              <MdOutlinePerson />
                          </button>
                        </div>
                        <div className="PersonOption">
                          <button className='DetailsItems'>
                              <LuShoppingCart />
                          </button>
                        </div>
                        
                    </div>
                </Col>
             
      </div>
      
      {/* SubMenu - Nằm ngoài Header */}
      {activeMenu !== null && (
        <ul className={`subMenu show`} ref={subMenuRef} onClick={(e) => e.stopPropagation()}>
          {menuItems.find((item) => item.id === activeMenu)?.subMenu.map((sub, index) => (
            <li key={index} className="subItems">
              <Link to="/" className="subChildrens">{sub}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  )
}

export default Headers