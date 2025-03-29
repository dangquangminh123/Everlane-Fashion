import React, { useState, useRef, useEffect }  from 'react';
import { motion } from 'framer-motion';
import Banner1 from '../../assets/banner/banner1.png'
import Banner2 from '../../assets/banner/banner2.jpg'
import Banner3 from '../../assets/banner/banner3.jpg'
import Banner4 from '../../assets/banner/banner4.png'
import Banner5 from '../../assets/banner/banner5.png'
import Container from 'react-bootstrap/Container';
import Slider from "react-slick";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Form, Link } from 'react-router-dom'
import { GrLinkPrevious } from "react-icons/gr";
import { GrLinkNext } from "react-icons/gr";
import './banner.css';

const banners = [
    { img: Banner1, title: "Your Cozy Era", desc: "Get peak comfy-chic with new winter essentials", button: "Shop now" },
    { img: Banner2, title: "Stores Georgetown", desc: "Luxury store branch, convenient for shoppers", button: "Shop now" },
    { img: Banner3, title: "Beauty store", desc: "The exterior beauty of the shop in the middle of the lane", button: "Shop now" },
    { img: Banner4, title: "Style how to style winter whites", desc: "Redefine your winter wardrobe with the timeless elegance of winter whites with this style guide.", button: "Explore now" },
    { img: Banner5, title: "SEATTLE University Village", desc: "The current prominent shoe styles of the young generation", button: "Explore now" }
];

const Banner = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const sliderRef = useRef(null);


    useEffect(() => {
        
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        // arrows: true,
        autoplaySpeed: 1200,
    }

  return (
    <>

        <div className="Banner d-flex justify-content-between"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
             <motion.button
                className={`PrevBtn ${isHovered ? "show" : ""}`}
                onClick={() => sliderRef.current?.slickPrev()}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -50 }}
                transition={{ duration: 0.3 }}
                whileTap={{ scale: 0.9 }}
            >
                <GrLinkPrevious />
            </motion.button>

             <Slider ref={sliderRef} {...settings} className="BannerBody">
                {banners.map((item, index) => (
                    <div key={index} className="slick-slide">
                        <img src={item.img} alt="Banner Images" />
                        <Container>
                            <Row className='InfoImagesSlider'>
                                <motion.div 
                                    className="TitleSlider"
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3, duration: 0.6 }}
                                >
                                    <h2 className="TitleName">{item.title}</h2>
                                </motion.div>
                                <motion.div 
                                    className="DescriptionsTitle"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5, duration: 0.6 }}
                                >
                                    <p className="DetailDesc">{item.desc}</p>
                                </motion.div>
                                <motion.div 
                                    className="BtnSlider"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.7, duration: 0.5 }}
                                >
                                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                                        <Link to="" className="BtnDonateSlider">{item.button}</Link>
                                         <Link to="" className="BtnMoreSlider">Know More</Link>
                                    </motion.div>
                                </motion.div>
                            </Row>
                        </Container>
                    </div>
                ))}
            </Slider>
             <motion.button
                className={`NextBtn ${isHovered ? "show" : ""}`}
                onClick={() => sliderRef.current?.slickNext()}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : 50 }}
                transition={{ duration: 0.3 }}
                whileTap={{ scale: 0.9 }}
            >
                <GrLinkNext />
            </motion.button>
        </div>
    </>
  )
}

export default Banner