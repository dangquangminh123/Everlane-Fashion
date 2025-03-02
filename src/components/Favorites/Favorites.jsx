import React, { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom'
import favorites1 from '../../assets/Favorites/Favorites3.png';
import favorites2 from '../../assets/Favorites/Favorites4.png';
import favorites3 from '../../assets/Favorites/Favorites5.png';
import favorites4 from '../../assets/Favorites/Favorites6.png';
import favorites5 from '../../assets/Favorites/Favorites7.png';
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import './Favorites.css'

// Danh sách sản phẩm yêu thích
const ListFavorites = [
    { id: 1, img: favorites1, name: "The Waffle Long-Sleeve Crew", color: "Bone", price: "60", sold: "14"},
    { id: 2, img: favorites2, name: "The Bomber Jacket | Uniform", color: "Toasted Coconut", price: "148", sold: "10"},
    { id: 3, img: favorites3, name: "The Slim 4-Way Stretch Organic Jean | Uniform", color: "Dark Indigo", price: "98", sold: "16"},
    { id: 4, img: favorites4, name: "The Essential Organic Crew", color: "Vintage Black", price: "30", sold: "20"},
    { id: 5, img: favorites5, name: "The Waffle Long-Sleeve Crew", color: "Bone", price: "60", sold: "11"},
];

const Favorites = () => {
    
    const visibleItems = 4; // Số lượng item hiển thị mỗi lần
    const totalItems = ListFavorites.length;
    const totalSlides = Math.ceil(totalItems / visibleItems);
    const [currentIndex, setCurrentIndex] = useState(0);
    // Next button - trượt sang phải
    const slideNext = () => {
        setCurrentIndex((prev) => (prev + 1 < totalSlides ? prev + 1 : 0)); // Quay lại slide đầu nếu hết
    };

    // Previous button - trượt sang trái
    const slidePrev = () => {
        setCurrentIndex((prev) => (prev - 1 >= 0 ? prev - 1 : totalSlides - 1)); // Quay lại slide cuối nếu đang ở đầu
    };

    return (
        <div className="Favorites">
            <div className="FavoritesHeader">
                <h3 className="TitleFavorites">Everlane Favorites</h3>
                <span className="DescriptionFavorites">
                    Beautifully Functional. Purposefully Designed. Consciously Crafted.
                </span>
            </div>
            <div className="FavoritesBody">
                <button className="FavPreBtn" onClick={slidePrev}>
                    <GrPrevious />
                </button>
                <div className="SwiperContainer">
                    <div
                        className="ListFavorites"
                        style={{
                            transform: `translateX(-${currentIndex * 100}%)`, // Tránh dư thừa
                            transition: "transform 0.5s ease",
                            display: "flex",
                            width: `${totalSlides * 100}%`, // Đảm bảo không tràn ra ngoài
                        }}
                    >
                        {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                            <div key={slideIndex} className="SlideFavorites">
                                {ListFavorites.slice(slideIndex * visibleItems, (slideIndex + 1) * visibleItems).map((item) => (
                                    <div key={item.id} className="ItemsFavorites">
                                        <div className="ImagesItems">
                                            <Link to={"/"} className="OneImages">
                                                <img src={item.img} alt={item.name} />
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
                <button className="FavNextBtn" onClick={slideNext}>
                    <GrNext />
                </button>
            </div>
        </div>
    );
};

export default Favorites;