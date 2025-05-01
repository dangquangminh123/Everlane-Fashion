import React, { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom'
import recommend1 from '../../assets/DetailProduct/recommend1.png'
import recommend2 from '../../assets/DetailProduct/recommend2.png'
import recommend3 from '../../assets/DetailProduct/recommend3.png'
import recommend4 from '../../assets/DetailProduct/recommend4.png'
import recommend5 from '../../assets/DetailProduct/recommend5.png'
import recommend6 from '../../assets/DetailProduct/recommend6.png'
import recommend7 from '../../assets/DetailProduct/recommend7.png'
import recommend8 from '../../assets/DetailProduct/recommend8.png'
import recommend9 from '../../assets/DetailProduct/recommend1_1.png'
import recommend10 from '../../assets/DetailProduct/recommend2_2.png'
import recommend11 from '../../assets/DetailProduct/recommend3_3.png'
import recommend12 from '../../assets/DetailProduct/recommend4_4.png'
import recommend13 from '../../assets/DetailProduct/recommend5_5.png'
import recommend14 from '../../assets/DetailProduct/recommend6_6.png'
import recommend15 from '../../assets/DetailProduct/recommend7_7.png'
import recommend16 from '../../assets/DetailProduct/recommend8_8.png'
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";

import './recommend.css'

// Danh sách sản phẩm yêu thích
const ListRecommend = [
    { id: 1, img: recommend1, img2: recommend9, name: "The Waffle Long-Sleeve Crew", color: "Bone", price: "60", sold: "14"},
    { id: 2, img: recommend2, img2: recommend10, name: "The Waffle Long-Sleeve Crew", color: "Bone", price: "60", sold: "14"},
    { id: 3, img: recommend3, img2: recommend11, name: "The Waffle Long-Sleeve Crew", color: "Bone", price: "60", sold: "14"},
    { id: 4, img: recommend4, img2: recommend12, name: "The Waffle Long-Sleeve Crew", color: "Bone", price: "60", sold: "14"},
    { id: 5, img: recommend5, img2: recommend13, name: "The Waffle Long-Sleeve Crew", color: "Bone", price: "60", sold: "11"},
    { id: 6, img: recommend6, img2: recommend14, name: "The Waffle Long-Sleeve Crew", color: "Bone", price: "60", sold: "14"},
    { id: 7, img: recommend7, img2: recommend15, name: "The Waffle Long-Sleeve Crew", color: "Bone", price: "60", sold: "14"},
    { id: 8, img: recommend8, img2: recommend16, name: "The Waffle Long-Sleeve Crew", color: "Bone", price: "60", sold: "14"},

];

const Recommends = () => {
    const [hoveredItem, setHoveredItem] = useState(null);

    const visibleItems = 4; // Số lượng item hiển thị mỗi lần
    const totalItems = ListRecommend.length;
    const totalSlides = Math.ceil(totalItems / visibleItems);
    const [currentIndex, setCurrentIndex] = useState(0);

    const speed = 1000; // Thời gian chuyển động (ms)
    const delay = 4000; // Độ trễ giữa mỗi lần chuyển đổi (ms)
  
    // Next button - trượt sang phải
    const slideNext = () => {
        setCurrentIndex((prev) => (prev + 1 < totalSlides ? prev + 1 : 0)); // Quay lại slide đầu nếu hết
    };

    // Previous button - trượt sang trái
    const slidePrev = () => {
        setCurrentIndex((prev) => (prev - 1 >= 0 ? prev - 1 : totalSlides - 1)); // Quay lại slide cuối nếu đang ở đầu
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            slideNext();
        }, delay);

        return () => clearTimeout(timer); // Dọn dẹp khi component unmount hoặc index thay đổi
    }, [currentIndex]); // Gọi lại mỗi khi currentIndex thay đổi
   
    return (
        <div className="Recommends">
            <div className="RecommendHeader">
                <h3 className="TitleFavorites">Recommend products</h3>
            </div>
            <div className="RecommendBody">
                <button className="RecPreBtn" onClick={slidePrev}>
                    <GrPrevious />
                </button>
                <div className="SwiperContainer">
                    <div
                        className="ListRecommend"
                        style={{
                            transform: `translateX(-${currentIndex * 100}%)`, // Tránh dư thừa
                            transition: `transform ${speed}ms ease`,
                            display: "flex",
                            width: `${totalSlides * 100}%`, // Đảm bảo không tràn ra ngoài
                        }}
                    >
                        {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                            <div key={slideIndex} className="SlideRecommend">
                                {ListRecommend.slice(slideIndex * visibleItems, (slideIndex + 1) * visibleItems).map((item) => (
                                    <div key={item.id} className="ItemsRecommend">
                                        <div className="ImagesItems">
                                            <Link to={"/"} className="OneImages">
                                                {/* <img 
                                                    src={hoveredItem === item.id ? item.img : item.img2}
                                                    alt={item.name}
                                                    onMouseEnter={() => setHoveredItem(item.id)}
                                                    onMouseLeave={() => setHoveredItem(null)}
                                                    style={{
                                                        opacity: hoveredItem === item.id ? 1 : 0.9,
                                                        transition: 'opacity 1s ease-in-out',
                                                    }}
                                                /> */}
                                                <img 
                                                    src={item.img} 
                                                    alt={item.name}
                                                    className="ImageMain"
                                                />
                                                <img 
                                                    src={item.img2} 
                                                    alt={item.name}
                                                    className={`ImageHover ${hoveredItem === item.id ? "fadeIn" : ""}`}
                                                    onMouseEnter={() => setHoveredItem(item.id)}
                                                    onMouseLeave={() => setHoveredItem(null)}
                                                />
                                            </Link>
                                        </div>
                                        <div className="InfoItems">
                                            <div className="NameColorItems">
                                                <Link className="NameItems">{item.name}</Link>
                                                <span className="ColorItems">{item.color}</span>
                                            </div>
                                            <div className="PriceSoldItems">
                                                <span className="PriceItems">${item.price}</span>
                                                <span className="SoldItems">{item.sold} Sold</span>
                                            </div>
                                        </div>
                                    </div>
                                 ))}
                            </div>
                        ))}
                    </div>
                </div>
                <button className="RecNextBtn" onClick={slideNext}>
                    <GrNext />
                </button>
                
            </div>
        </div>
    );
};

export default Recommends;