import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from 'react-bootstrap'
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
import gsap from "gsap";
import { motion } from "framer-motion";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './Onyou.css'

gsap.registerPlugin(ScrollTrigger);


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

const serviceData = [
  {
    icon: <TfiPackage />,
    title: "Complimentary Shipping",
    content: "Enjoy free shipping on U.S. orders over $100.",
  },
  {
    icon: <HiMiniArrowPathRoundedSquare />,
    title: "Consciously Crafted",
    content: "Designed with you and the planet in mind.",
  },
  {
    icon: <RiMapPinLine />,
    title: "Come Say Hi",
    content: "We have 11 stores across the U.S.",
  },
];


const Onyou = () => {
  const sliderRef = useRef(null);
  const itemsRef = useRef([]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemWidth = 18; // Đơn vị em
  const gap = 1;
  const visibleItems = 5;
  const totalItems = ListItemOnYou.length;
  const autoScrollInterval = 3000; 
  const autoScrollRef = useRef(null);

  const handleNext = () => {
    setCurrentIndex(prevIndex => (prevIndex >= totalItems - visibleItems ? 0 : prevIndex + 1));
  };

  const handlePrev = () => {
    setCurrentIndex(prevIndex => (prevIndex <= 0 ? totalItems - visibleItems : prevIndex - 1));
  };


   // Tự động chạy
   useEffect(() => {
    const ctx = gsap.context(() => {
      if (!sliderRef.current) return;

      ScrollTrigger.create({
        trigger: sliderRef.current,
        start: "top 80%", // Kích hoạt khi component cuộn đến 80% chiều cao màn hình
        onEnter: () => startAnimations(), // Chỉ chạy animation khi vào viewport
      });

      const startAnimations = () => {
        // Animation tiêu đề & mô tả
        const tl = gsap.timeline({ delay: 0.5 });
        tl.from(".OnYouTitle", {
          opacity: 0,
          y: -50,
          duration: 1,
          ease: "power3.out",
        })
          .from(".OnYouDescription", {
            opacity: 0,
            y: -30,
            duration: 1,
            ease: "power3.out",
          })
          .from(".OnYourAdd", {
            opacity: 0,
            scale: 0.5,
            rotation: 10,
            duration: 1,
            ease: "elastic.out(1, 0.5)",
          });

        // Animation tổng thể cho slide
        gsap.fromTo(
          ".SlidesOnYou",
          { x: "100%", opacity: 0 },
          {
            x: "0%",
            opacity: 1,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".SwiperContainer",
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );

        // Animation từng item khác nhau
        itemsRef.current.forEach((item, index) => {
          if (item) {
            const tl = gsap.timeline({ delay: index * 0.2 });

            // Animation cho hình ảnh
            tl.from(item.querySelector(".OnYouImages img"), {
              opacity: 0,
              scale: index % 2 === 0 ? 0.5 : 1.2,
              rotate: index % 3 === 0 ? -10 : 10,
              duration: 1,
              ease: "power3.out",
            });

            // Animation cho Cart Icon
            tl.from(
              item.querySelector(".CartOnYou"),
              {
                opacity: 0,
                y: index % 2 === 0 ? 20 : -20,
                scale: index % 3 === 0 ? 0.8 : 1.2,
                duration: 1,
                ease: "elastic.out(1, 0.5)",
              },
              "-=0.5"
            );
          }
        });

        // Bắt đầu auto-scroll khi animation hoàn tất
        startAutoScroll();
      };
    }, sliderRef);


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
      ctx.revert(); // Cleanup GSAP animations
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
                            transition: "transform 0.5s ease-in-out",
                            transform: `translateX(-${currentIndex * (itemWidth + gap)}em)`
                        }}>
                         {ListItemOnYou.map((item, index) => (
                            <div className="ItemsOnYou" key={index} ref={(el) => (itemsRef.current[index] = el)}
                             style={{
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

        <div className="OurServices">
          {serviceData.map((service, index) => (
            <Col xs={12} md={4} key={index}>
              <motion.div
                className="ItemsOurServices"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="ImagesServices"
                  whileHover={{ rotate: 10, scale: 1.2 }}
                >
                  {service.icon}
                </motion.div>
                <span className="TitleServices">{service.title}</span>
                <p className="ContentServices">{service.content}</p>
              </motion.div>
            </Col>
          ))}
        </div>
      </div>
    </>
  )
}

export default Onyou