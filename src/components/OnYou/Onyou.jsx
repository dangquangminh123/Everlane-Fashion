import React, { useState, useEffect, useRef } from "react";
import './Onyou.css'
import { HiMiniArrowPathRoundedSquare } from "react-icons/hi2";
import { TfiPackage } from "react-icons/tfi";
import { RiMapPinLine } from "react-icons/ri";
import { LuShoppingCart } from "react-icons/lu";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import onyou1 from '../../assets/OnYour/Onyou1.png'
import onyou2 from '../../assets/OnYour/Onyou2.png'
import onyou3 from '../../assets/OnYour/Onyou3.png'
import onyou4 from '../../assets/OnYour/Onyou4.png'
import onyou5 from '../../assets/OnYour/Onyou5.png'


const ListItemOnYou = [
  { id: 1, img: onyou1 },
  { id: 2, img: onyou2 },
  { id: 3, img: onyou3 },
  { id: 4, img: onyou4 },
  { id: 5, img: onyou5 },
  { id: 6, img: onyou1 },
  { id: 7, img: onyou2 },
  { id: 8, img: onyou3 },
  { id: 9, img: onyou4 },
  { id: 10, img: onyou5 },
];


const Onyou = () => {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemWidth = 18; // Đơn vị em
  const gap = 1;
  const visibleItems = 5;
  const totalItems = ListItemOnYou.length;
  const autoScrollInterval = 3000; 
  let autoScrollRef = useRef(null);

  const handleNext = () => {
    setCurrentIndex(prevIndex => (prevIndex >= totalItems - visibleItems ? 0 : prevIndex + 1));
  };

  const handlePrev = () => {
    setCurrentIndex(prevIndex => (prevIndex <= 0 ? totalItems - visibleItems : prevIndex - 1));
  };

   // Tự động chạy
   useEffect(() => {
    const startAutoScroll = () => {
      if (autoScrollRef.current) clearInterval(autoScrollRef.current);
      autoScrollRef.current = setInterval(handleNext, autoScrollInterval);
    };

    startAutoScroll(); // Khởi động auto-scroll

    // Dừng khi hover
    const stopAutoScroll = () => {
      if (autoScrollRef.current) clearInterval(autoScrollRef.current);
    };

    sliderRef.current?.addEventListener("mouseenter", stopAutoScroll);
    sliderRef.current?.addEventListener("mouseleave", startAutoScroll);

    return () => {
      clearInterval(autoScrollRef.current);
      sliderRef.current?.removeEventListener("mouseenter", stopAutoScroll);
      sliderRef.current?.removeEventListener("mouseleave", startAutoScroll);
    };
  }, []);

  return (
    <>
      <div className="OnYouBox">
        <div className="OnYouHead">
            <h4 className='OnYouTitle'>Everlane On You</h4>
            <div className="IntroduceOnYou">
                <span className='OnYouDescription'>Share your latest look with #EverlaneOnYou for a chance to be featured.</span>
                <p className='OnYourAdd'>Add Your Photo</p>
            </div>
        </div>
        <div className="OnYouBody">
            <button className="OnYPreBtn" onClick={handlePrev}>
                <MdOutlineArrowBackIosNew />
            </button>
              <div className="SwiperContainer" ref={sliderRef} style={{ 
                    overflow: "hidden", 
                    width: `${(itemWidth + gap) * visibleItems}em`
                }}>
                        <div className="SlidesOnYou" style={{
                            display: "flex",
                            transition: "transform 0.3s ease-in-out",
                            transform: `translateX(-${currentIndex * (itemWidth + gap)}em)`
                        }}>
                         {ListItemOnYou.map((item, index) => (
                            <div className="ItemsOnYou" key={index} style={{
                                flex: "0 0 auto",
                                width: `${itemWidth}em`,
                                marginRight: `${gap}em`
                            }}>
                                <div className="OnYouImages">
                                    <img src={item.img} style={{ width: "100%", height: "auto" }} />
                                </div>
                                <div className="CartOnYou">
                                    <LuShoppingCart />
                                </div>
                            </div>
                        ))}
                          </div>
              </div>

            <button className="OnYNextBtn" onClick={handleNext}>
                <MdOutlineArrowForwardIos />
            </button>
        </div>
      </div>
    </>
  )
}

export default Onyou