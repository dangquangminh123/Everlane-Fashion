import React, { useState, useRef, useEffect }  from 'react';
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
        
        if (sliderRef.current) {
            console.log("Slider Instance:", sliderRef.current);
            console.log("Available Methods:", Object.keys(sliderRef.current)); // Xem các phương thức có hoạt động không
        }
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        // slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        arrows: true,
        autoplaySpeed: 1000,
    }

  return (
    <>

        <div className="Banner d-flex justify-content-between"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
           <button 
                className={`PrevBtn ${isHovered ? "show" : ""}`} 
                onClick={() => sliderRef.current?.slickPrev()}
            >
                <GrLinkPrevious />
            </button>
            <Slider ref={sliderRef} {...settings} className="BannerBody">
                {banners.map((item, index) => (
                <div key={index} className="slick-slide">
                    <img src={item.img} alt="Banner Images" />
                    <Container> 
                        <Row className='InfoImagesSlider'>
                            <div className="TitleSlider">
                                <h2 className="TitleName">{item.title}</h2>
                            </div>
                            <div className="DescriptionsTitle">
                                <p className="DetailDesc">{item.desc}</p>
                            </div>
                            <div className="BtnSlider">
                                <Link to="" className="BtnDonateSlider">{item.button}</Link>
                                <Link to="" className="BtnMoreSlider">Know More</Link>
                            </div>
                        </Row>
                    </Container>
                </div>
                ))}
            </Slider>
            <button 
               className={`NextBtn ${isHovered ? "show" : ""}`} 
               onClick={() => sliderRef.current?.slickNext()} 
            >
                <GrLinkNext />
            </button>
        </div>
    </>
  )
}

export default Banner