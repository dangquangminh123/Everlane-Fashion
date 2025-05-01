import React, { useState, useEffect, useRef } from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { MdOutlineArrowBackIosNew } from "react-icons/md";import './DetailProduct.css'
import image1 from '../../assets/DetailProduct/Image_detail1.png'
import image2 from '../../assets/DetailProduct/Image_detail2.png'
import image3 from '../../assets/DetailProduct/Image_detail3.png'
import image4 from '../../assets/DetailProduct/Image_detail4.png'
import image5 from '../../assets/DetailProduct/Image_detail6.png'
import image6 from '../../assets/DetailProduct/Image_detail5.png'
import { Link } from "react-router-dom"; 
import policy from '../../assets/DetailProduct/policy.png'
import policy2 from '../../assets/DetailProduct/policy_1.png'
import policy3 from '../../assets/DetailProduct/policy_2.png'
import Sustainability from '../../assets/DetailProduct/Sustainability.png'
import photoYou1 from '../../assets/DetailProduct/photoYou.png'
import photoYou2 from '../../assets/DetailProduct/photoYou2.png'
import photoYou3 from '../../assets/DetailProduct/photoYou3.png'
import photoYou4 from '../../assets/DetailProduct/photoYou4.png'
import photoYou5 from '../../assets/DetailProduct/photoYou5.png'
import Recommends from "../../components/Recommend/recommend";
import ReviewProduct from "../../components/ReviewProduct/ReviewProduct";
import { MdOutlineStar } from "react-icons/md";

const DetailProduct = () => {
  const imagesDetail = [
    {id: 1, image: image1},
    {id: 2, image: image2},
    {id: 3, image: image3},
    {id: 4, image: image4},
    {id: 5, image: image5},
    {id: 6, image: image6},
  ]
  const colors = [
    { name: "Blue", code: "#0000FF" },
    { name: "Brown", code: "#8C7058" },
    // sau này thêm thoải mái
    { name: "Red", code: "#FF0000" },
    { name: "Green", code: "#00FF00" },
  ];

  const policyList = [
    {id: 1, title: 'Free Shipping', image: policy, content: 'On all U.S. orders over $100', linkpolicy: 'Learn more.'},
    {id: 2, title: 'Easy Returns', image: policy2, content: 'Extended returns through January 31. ', linkpolicy: 'Returns Details.'},
    {id: 3, title: 'Send It As A Gift', image: policy3, content: 'Add a free personalized note during checkout.', linkpolicy: ''},
  ]

  const sizedetail = [
    {id: 1, size: "S"},
    {id: 2, size: "M"},
    {id: 3, size: "L"},
    {id: 4, size: "XL"},
    {id: 5, size: "XXL"},
    {id: 6, size: "XS"},

  ] 

  const ListItemOnYou = [
    { id: 1, img: photoYou1 },
    { id: 2, img: photoYou2 },
    { id: 3, img: photoYou3 },
    { id: 4, img: photoYou4 },
    { id: 5, img: photoYou5 },
  ];

   const sliderRef = useRef(null);
    const itemsRef = useRef([]);
  
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemWidth = 10; // Đơn vị em
    const gap = 1;
    const visibleItems = 3;
    const totalItems = ListItemOnYou.length;
    const autoScrollInterval = 3000; 
    const autoScrollRef = useRef(null);
  
    const handleNext = () => {
      setCurrentIndex(prevIndex => (prevIndex >= totalItems - visibleItems ? 0 : prevIndex + 1));
    };
  
    const handlePrev = () => {
      setCurrentIndex(prevIndex => (prevIndex <= 0 ? totalItems - visibleItems : prevIndex - 1));
    };

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
      <div className="detailContainer">
          <div className="detailBox">
              <div className="detailImage">
                {imagesDetail.map((image, index) => (
                  <div className="detailImageItem" key={index}>
                    <img src={image.image} alt="" />
                  </div>
                ))}
              </div>
              <div className="infoProduct">
                  <div className="breadcrumb">Men / Outerwear - Jackets & Coats</div>
                  
                    <div className="detail-info">
                        <h3 className="detail-title">The ReWool® Oversized Shirt Jacket</h3>
                        <div className="detailPrice">
                          <span className="detail-old">$238</span>
                          <span className="detail-new">$167</span>
                        </div>
                    </div>
                    <div className="reviewDetail">
                          <span className="totalRating">
                              <MdOutlineStar />
                              <MdOutlineStar />
                              <MdOutlineStar />
                              <MdOutlineStar />
                              <MdOutlineStar />
                          </span>
                          <div className="pointReview">
                            <span className="totalReview">4.8 ( 2 Reviews )</span>
                          </div>
                    </div>
                    <hr className="view-more-line" />

                    <div className="detailColor">
                      <div className="nameColor">
                          <p className='titleColor'>Color</p>
                          <div className="listItemColor">
                            {colors.map((color, index) => (
                             <span className="itemName" key={index}>
                              {color.name}
                              {index < colors.length - 1 && <span className="separator"> / </span>}
                            </span>
                            ))}
                          </div>
                      </div>
                      <div className="detailOption">
                          {colors.map((color, index) => (
                            <span
                              className="itemCircle"
                              key={index}
                              style={{ background: color.code }}
                            ></span>
                          ))}
                      </div>
                    </div>

                    <div className="sizeInfo">
                        <div className="titleSize">
                          <span className="nameSize">Size</span>
                          <button className="sizeBtn">Size Guide</button>
                        </div>
                        <div className="listSize">
                            {sizedetail.map((size, index) => (
                            <div className="itemSize">
                              <button className="sizeBox" key={index}>{size.size}</button>
                            </div>
                            ))}
                        </div>
                    </div>

                    <div className="addCartWrapper">
                        <button className="addCartBtn">
                          Add to cart
                        </button>
                    </div>
                    <hr className="view-more-line" />
                    <div className="policyWrapper">
                      {policyList.map((policy, index) => (
                        <div className="policyItem" key={index}>
                            <div className="pictureItem">
                                <img src={policy.image} alt="" />
                            </div>
                            <div className="infoPolicyitem">
                                <span className="titlePolicy">
                                    {policy.title}
                                </span>
                                <p className='contentPolicy'>
                                   {policy.content} <Link className='detailPolicy'>{policy.linkpolicy}</Link>
                                </p>
                            </div>
                        </div>
                         ))}
                    </div>
                    <hr className="view-more-line" />

                    <div className="detailDescription">
                        <h5 className='titleName'>Part shirt, part jacket, all style.</h5>
                        <span className="productDescription">
                            <p className='contentProduct'>
                            Meet your new chilly weather staple. 
                            The ReWool® Oversized Shirt Jacket has all the classic shirt detailing—collar,
                             cuffs with buttons, and a shirttail hem, along with two front chest flap pockets 
                             and on-seam pockets. The sleeves are fully lined for added warmth and it’s made with 
                             a GRS-certified recycled Italian Wool and GRS-certified recycled nylon blend. Think cozy,
                              comfy, and oh-so easy to layer. With the goal of increasing the use of recycled materials 
                              and reducing the harmful impacts of production, the Global Recycled Standard (GRS) sets requirements for third-party 
                              certification of  recycled input in products—including chain of custody, social and environmental 
                              practices, and chemical restrictions.
                            </p>
                        </span>
                    </div>

                    <div className="suitableModel">
                         <div className="listModel">
                            <h5 className="nameModel">Model</h5>
                            <span className='descModel'>
                              <p className='descItem'>Model is 6′2″, wearing a size M</p>
                            </span>
                         </div>
                         <hr className="view-more-line" />
                         <div className="listModel">
                            <h5 className="nameModel">Fit</h5>
                            <span className='descModel'>
                                <p className='descItem'>Questions about fit?</p>
                                <p className='descItem'>Contact Us</p>
                                <p className='descItem'>Size Guide</p>
                            </span>
                        </div>
                    </div>
                    <hr className="view-more-line" />

                    <div className="sustainability">
                      <h5 className="nameSustainability">Sustainability</h5>
                      <div className="sustainabiImage">
                        <img src={Sustainability} alt='' />
                      </div>
                    </div>

                    <hr className="view-more-line" />

                    <div className="EverAddphoto">
                         <div className="EverlaneTitle">
                              <span className='AddphotoYou'>
                                Everlane On You <button className='uploadPhoto'>Add Your Photo</button>
                              </span>
                         </div>

                         <div className="AddYourPhoto">
                              <button className="AddPhotoPrev" onClick={handlePrev}>
                                  <MdOutlineArrowBackIosNew />
                              </button>
                                <div className="SwiperContainer" ref={sliderRef} style={{ 
                                      overflow: "hidden", 
                                      width: `${(itemWidth + gap) * visibleItems}em`
                                  }}>
                                          <div className="slidesAddPhoto" style={{
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
                                      
                                              </div>
                                            ))}
                                          </div>
                                </div>
                          
                              <button className="AddPhotoNext" onClick={handleNext}>
                                  <MdOutlineArrowForwardIos />
                              </button>
                         </div>
                    </div>
                    
                   
              </div>
          </div>

          <Recommends />
          <ReviewProduct />
          
      </div>
    </>
  )
}

export default DetailProduct