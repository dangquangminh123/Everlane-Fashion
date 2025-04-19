import React, { useState, useRef, useEffect }  from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom'
import './DetailBlog.css';
import thumb1 from '../../assets/Post/thumbnail.png';
import thumb2 from '../../assets/Post/thumbnail2.png';
import thumb3 from '../../assets/Post/thumbnail3.png';
import detailPost1 from '../../assets/Post/detailPost1.png';
import detailPost2 from '../../assets/Post/detailPost2.png';
import detailPost3 from '../../assets/Post/detailPost3.png';
import detailPost4 from '../../assets/Post/detailPost4.png';
import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import Blogever from '../../assets/BlogEver/blogever.png';
import Blogever1 from '../../assets/BlogEver/blogever_1.png';
import Blogever2 from '../../assets/BlogEver/blogever_2.png';
const ListClothes = [
    { id: 1, img: detailPost1, name: "The Waffle Long-Sleeve Crew", color: "Bone", price: "60"},
    { id: 2, img: detailPost2, name: "The Bomber Jacket | Uniform", color: "Canvas", price: "148"},
    { id: 3, img: detailPost3, name: "The Slim 4-Way Stretch Organic Jean | Uniform", color: "Canvas", price: "98"},
    { id: 4, img: detailPost4, name: "The Essential Organic Crew", color: "Off-White", price: "30"},
    
    { id: 5, img: thumb1, name: "The Waffle Long-Sleeve Crew", color: "Bone", price: "60"},
    { id: 6, img: thumb2, name: "The Bomber Jacket | Uniform", color: "Canvas", price: "148"},
    { id: 7, img: thumb3, name: "The Slim 4-Way Stretch Organic Jean | Uniform", color: "Canvas", price: "98"},
    { id: 8, img: detailPost4, name: "The Essential Organic Crew", color: "Off-White", price: "30"},
];

const blogEverworld  = [
    {name: "How To Style Winter Whites", image: Blogever, category: "style"}, 
    {name: "We Won A Glossy Award", image: Blogever1, category: "Transparency"}, 
    {name: "Coordinate Your Style: Matching Outfits for Everyone", image: Blogever2, category: "style"}, 
  ];

const detailBlog = () => {
    const visibleItems = 4; // Số lượng item hiển thị mỗi lần
    const totalItems = ListClothes.length;
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

    // 🔥 Tự động chuyển slide mỗi 4 giây
    useEffect(() => {
        const timer = setTimeout(() => {
            slideNext();
        }, delay);

        return () => clearTimeout(timer); // Dọn dẹp khi component unmount hoặc index thay đổi
    }, [currentIndex]); // Gọi lại mỗi khi currentIndex thay đổi
  return (
    <>
        <div className="DetailBox">
            <div className="Detail_thumbs">
                <img src={thumb1} alt='' />
            </div>

            <div className="detailBlogContent">
                <div className="headerDetail"></div>

                <div className="firstSpeak">
                  <div className="iconfirst">
                      <li className='itemIcon'>
                          <FaTwitterSquare />
                      </li>
                      <li className='itemIcon'>
                          <FaFacebookSquare />
                      </li>
                      <li className='itemIcon'>
                          <BsLinkedin />
                      </li>
                  </div>
                  <div className="contentSpeak">
                    <p className='contentDetail'>In a season dominated by dark hues, redefine your winter wardrobe with the timeless elegance of winter whites.
                       Whether top-to-toe white outfits, tonal mixing-and-matching, or a key white piece (or two), give your style a breath of fresh air with this list of winter white closet essentials.</p>
                  </div>
                </div>

                <div className="secondSpeak">
                    <div className="secondThumbnail">
                        <img src={thumb3} alt='' />
                    </div>
                    <div className="secondContent">
                       <h2 className="titleItem">Nail the Classics</h2>
                        <div className="textItems">
                            Do pure winter chic with <span className="hightLight"> a classic cashmere white sweater.</span> Made in the softest cashmere, it’s a sweater that will last season after season.
                            Effortlessly elevating any winter outfit, a white sweater is a must for any capsule collection. Just make <span className="hightLight">sure you keep it clean and stain free,</span>
                             to maintain that clean, polished look. Pair it with dark jeans or  <span className="hightLight">Utility Barrel</span> pants for a casual yet refined ensemble,
                              or layer it over a collared shirt for a preppy touch.
                        </div>
                        <h2 className="titleItem">Monochromatic Magic</h2>
                        <div className="textItems">
                        Nothing feels more luxe than an all-white winter outfit. And the best part? You don’t have to break the bank to create a super chic top-to-toe look. Pair classic  <span className="hightLight">corduroy pants </span>in a modern wide-legged 
                        silhouette with a relaxed  <span className="hightLight">Oxford style white shirt </span>for a mix-and-match texture play. Extra points if you add a <span className="hightLight">white blazer,</span> <span className="hightLight">cardigan,</span> or <span className="hightLight">sweater.</span> Accessorize with subtle
                         metallic accents or a bold red lip for a pop of color, letting your outfit take center stage.
                        </div>
                        <h2 className="titleItem">Keep Warm in White</h2>
                        <div className="textItems">
                        Stay warm all winter long with a <span className="hightLight">white puffer jacket </span>puffer jacket. This durable, cold weather jacket is puffed-up for extra warmth, giving an on-point blown out silhouette. A white coat
                         not only stands out against the sea of dark winter jackets but also provides a fun canvas for experimenting with textures and patterns. Throw on a white coat over a neutral-toned outfit 
                         for an easy elegant look.
                        </div>
                    </div>
                </div>

                <div className="secondSpeak">
                    <div className="secondThumbnail">
                        <img src={thumb2} alt='' />
                    </div>
                    <div className="secondContent">
                       <h2 className="titleItem">Textures and Layers</h2>
                        <div className="textItems">
                        Winter fashion is all about layering, and white outfits provide the perfect base for playing with textures and layers. 
                        Start with your <span className="hightLight">white turtleneck</span> and experiment with different fabrics like wool, 
                        cashmere, and silk to add depth and interest to your look. A  <span className="hightLight">white silk blouse </span>layered under a chunky
                         knit sweater or a white wool skirt  paired with a  <span className="hightLight">turtleneck</span> creates a textural look that's both cozy and chic.
                        </div>
                        <h2 className="titleItem">Accessorize with Neutrals</h2>
                        <div className="textItems">
                        When working with a predominantly white palette, neutrals become your best friends. From <span className="hightLight"> white leather Chelsea boots</span> to 
                        <span className="hightLight">off-white</span> beanies mix in plenty of winter-ready accessories and shoes for those finishing outfit tonal touches. So, step 
                        into the season with confidence , and let your winter whites make a bold and beautiful statement. Shop our <span className="hightLight">winter white edit here. </span>               
                         </div>
                    </div>
                </div>

            </div>

            <div className="Clothes">
                <div className="ClothesHeader">
                    <h3 className="TitleClothes">The White Fashion Edit</h3>
                </div>
                <div className="ClothesBody">
                    <button className="FavPreBtn" onClick={slidePrev}>
                        <GrPrevious />
                    </button>
                    <div className="SwiperContainer">
                        <div
                            className="ListClothes"
                            style={{
                                transform: `translateX(-${currentIndex * 100}%)`, // Tránh dư thừa
                                transition: `transform ${speed}ms ease`,
                                display: "flex",
                                width: `${totalSlides * 100}%`, // Đảm bảo không tràn ra ngoài
                            }}
                        >
                            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                                <div key={slideIndex} className="SlideClothes">
                                    {ListClothes.slice(slideIndex * visibleItems, (slideIndex + 1) * visibleItems).map((item) => (
                                        <div key={item.id} className="ItemsClothes">
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

                    {/* Pagination Dots */}
                    <div className="PaginationDots">
                        {Array.from({ length: totalSlides }).map((_, index) => (
                            <span
                                key={index}
                                className={`dot ${currentIndex === index ? "active" : ""}`}
                                onClick={() => setCurrentIndex(index)} // Click vào dot để chuyển slide
                            />
                        ))}
                    </div>
                    
                </div>
            </div>

            <div className="shopNowWrapper">
                <button className="shopNowBtn">
                    Shop now
                </button>
            </div>

            <div className="blogProduct">
                <Row className="blogBody">
                    {blogEverworld.map((item, index) => (
                        <Col xs={12} md={4} key={index}>
                            <div className="Itemsever">
                                <div className="imagesItems">
                                    <Link to='/detail_blog' className="imageEver">
                                        <img src={item.image} alt="" />
                                    </Link> 
                                </div>
                                <div className="detailEver">
                                    <Link className='titleEver'>{item.name}</Link>
                                    <div className="detailCategory">
                                        <p className='categoryEver'>{item.category}</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    </>
  )
}

export default detailBlog