import React, { useState, useEffect } from "react";
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
  // const [hoveredItem, setHoveredItem] = useState(null);
  // const [menuPosition, setMenuPosition] = useState({ left: 0, top: 0 });

  // const menuItems = [
  //   { id: 1, name: "Woman", link: "/", subMenu: ["Áo", "Quần", "Giày"] },
  //   { id: 2, name: "Men", link: "/", subMenu: ["Áo sơ mi", "Quần jeans", "Giày thể thao"] },
  //   { id: 3, name: "About", link: "/", subMenu: ["Câu chuyện", "Lịch sử", "Đội ngũ"] },
  //   { id: 4, name: "Everworld Stories", link: "/", subMenu: [] }
  // ];

  const [activeMenu, setActiveMenu] = useState(null);

  const menuItems = [
    { id: 1, name: "Woman", link: "/", subMenu: ["Áo", "Quần", "Giày"] },
    { id: 2, name: "Men", link: "/", subMenu: ["Áo sơ mi", "Quần jeans", "Giày thể thao"] },
    { id: 3, name: "About", link: "/", subMenu: ["Câu chuyện", "Lịch sử", "Đội ngũ"] },
    { id: 4, name: "Everworld Stories", link: "/", subMenu: [] }
  ];

  const handleMouseEnter = (id) => {
      if (menuItems.find(item => item.id === id).subMenu.length > 0) {
        setHoveredItem(id);
      }
    };
  
    const handleMouseLeave = () => {
      setTimeout(() => setHoveredItem(null), 200); // Delay để tránh flicker
    };
  
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
                      {/* <li 
                        className="itemsMenu"
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setTimeout(() => setIsHovering(false), 200)}
                      >
                      <Link to="/" className="itemChildrens">
                          Woman
                      </Link>
                      
                      </li>

                      <li className='itemsMenu'>
                        <Link to={"/"} className='itemChildrens'>
                            Men
                        </Link>
                      </li>
                      <li className='itemsMenu'>
                        <Link to={"/"} className='itemChildrens'>
                            About
                        </Link>
                      </li>
                      <li className='itemsMenu'>
                        <Link to={"/"} className='itemChildrens'>
                            Everworld Stories
                        </Link>
                      </li> */}
                     {menuItems.map((item) => (
                      <li
                        key={item.id}
                        className="itemsMenu"
                        onMouseEnter={() => setActiveMenu(item.id)}
                        onMouseLeave={() => setActiveMenu(null)}
                      >
                        <Link to={item.link} className="itemChildrens">{item.name}</Link>
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
      <ul
        className={`subMenu ${activeMenu !== null ? "show" : ""}`}
        onMouseEnter={() => setActiveMenu(activeMenu)}
        onMouseLeave={() => setActiveMenu(null)}
      >
        {activeMenu !== null &&
          menuItems.find((item) => item.id === activeMenu)?.subMenu.map((sub, index) => (
            <li key={index} className="subItems">
              <Link to="/" className="subChildrens">{sub}</Link>
            </li>
          ))}
      </ul>
    </>
  )
}

export default Headers