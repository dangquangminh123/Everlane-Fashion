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

  const visibleItems = 5; // Số lượng item hiển thị mỗi lần
  const totalItems = ListItemOnYou.length;
  const totalSlides = Math.ceil(totalItems / visibleItems);
  const [currentIndex, setCurrentIndex] = useState(0);

  const speed = 1000; // Thời gian chuyển động (ms)
  const delay = 4000; // Độ trễ giữa mỗi lần chuyển đổi (ms)

  const slideNext = () => {
      setCurrentIndex((prev) => (prev + 1 < totalSlides ? prev + 1 : 0)); // Quay lại slide đầu nếu hết
  };

  const slidePrev = () => {
      setCurrentIndex((prev) => (prev - 1 >= 0 ? prev - 1 : totalSlides - 1)); // Quay lại slide cuối nếu đang ở đầu
  };

  useEffect(() => {
      const timer = setTimeout(() => {
          slideNext();
      }, delay);

      return () => clearTimeout(timer); 
  }, [currentIndex]); 

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
            <button className="OnYPreBtn" onClick={slidePrev}>
                <MdOutlineArrowBackIosNew />
            </button>
            <div className="SwiperContainer">
                {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                  <div 
                      className="SlidesOnYou"
                      style={{
                        transform: `translateX(-${currentIndex * 100}%)`, // Tránh dư thừa
                        transition: `transform ${speed}ms ease`,
                        display: "flex",
                        width: `${totalSlides * 100}%`, // Đảm bảo không tràn ra ngoài
                      }}>
                      {ListItemOnYou.slice(slideIndex * visibleItems, (slideIndex + 1) * visibleItems).map((item) => (
                          <div className="ItemsOnYou">
                              <div className="OnYouImages">
                                <img src={item.img} alt=''/>
                              </div>
                              <div className="CartOnYou">
                                <LuShoppingCart />
                              </div>
                          </div>
                      ))}
                  </div>
                ))}
            </div>

            <button className="OnYNextBtn" onClick={slideNext}>
                <MdOutlineArrowForwardIos />
            </button>
        </div>
      </div>
    </>
  )
}

export default Onyou