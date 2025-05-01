import React, { useState, useEffect, useRef } from "react";
import { FaStar } from "react-icons/fa6";
import RatingBar from "../RatingBar/ratingBar";
import './ReviewProduct.css';
import { Link } from "react-router-dom"; 
import { FaBars } from "react-icons/fa";
import { RiArrowDownSFill } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { FaCirclePlus } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa6";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import symbol1 from '../../assets/DetailProduct/symbol1.png';
import symbol2 from '../../assets/DetailProduct/symbol2.png'
import symbol3 from '../../assets/DetailProduct/symbol3.png'
import symbol4 from '../../assets/DetailProduct/symbol4.png'
import symbol5 from '../../assets/DetailProduct/symbol5.png'

const ReviewProduct = () => {
  const ratings = [
    { stars: 5, count: 15 },
    { stars: 4, count: 10 },
    { stars: 3, count: 9 },
    { stars: 2, count: 5 },
    { stars: 1, count: 1 },
  ];
  const total = ratings.reduce((sum, r) => sum + r.count, 0);

  const reviewSize = [
    {id: 1, size: "S"},
    {id: 2, size: "M"},
    {id: 3, size: "L"},
    {id: 4, size: "XL"},
    {id: 5, size: "XXL"},
    {id: 6, size: "XS"},
  ];

  const colors = [
    { name: "Blue", code: "#0000FF" },
    { name: "Brown", code: "#8C7058" },
    { name: "Red", code: "#FF0000" },
    { name: "Green", code: "#00FF00" },
  ];

  const sortOrderByList = [
    { id: 1, name: "Most Relevant"},
    { id: 1, name: "Most helpful"},
    { id: 1, name: "Hightest to lowest rating"},
    { id: 1, name: "lowest to Hightest rating"},
    { id: 1, name: "Most Recently"},
  ]

  const [selected, setSelected] = useState("Most Recently");

  const handleSelect = (name) => {
    setSelected(name);
  };

  const [showFilter, setShowFilter] = useState(false);
  const filterRef = useRef(null);
  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setShowFilter(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleFilterClick = () => {
    setShowFilter((prev) => !prev);
  };
  return (
    <>
      <div className="reviewProduct">
        <h3 className="titleReview">Reviews</h3>

        <div className="overallReview">
            <div className="totalRating">
              <h5 className="nameRating">5.0 Overall Rating</h5>
              <div className="iconRating">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
            <div className="listRating">
                {ratings.map((r) => (
                  <div className="itemRating">
                    <span className="numberStar">{r.stars}</span>
                    <FaStar />
                    <RatingBar key={r.stars} value={r.count} total={total} />

                    {/* <span className="totalStar">{r.count}</ssspan> */}
                  </div>
                ))}
            </div>
            <div className="ratingLevel">
              <h5 className="runLevel">run slightly large</h5>
              <ul className="iconRating">
                <li className="rankRating"></li>
                <li className="rankRating"></li>
                <li className="rankRating active"></li>
                <li className="rankRating"></li>
                <li className="rankRating"></li>
              </ul>
              <div className="descriptionRank">
                <span className="runSmnall">Run small</span>
                <span className="runLarge">Run large</span>
              </div>
            </div>
        </div>

        <div className="sortFilter" ref={filterRef}>
          <div className="filterReview" onClick={handleFilterClick}>
            <h4 className="titleFilter">Filter</h4>
            <span className="barMenu">
                <FaBars />
            </span>
            {showFilter && (
            <div className="cateFiterRv">
              <ul className="listTypeReview">
                {/* Ratings */}
                <li className="itemTypeReview">
                  <hr className="lineitemType"/>
                    <div className="labelType">
                      <span className="nameType">Rating</span>
                      <IoIosArrowDown />
                    </div>
                    <ul className="childrenPopup">
                      {ratings.map((r) => (
                        <li className="itemChildrenPopup" key={r.stars}>
                          <FaCirclePlus />
                          <span className="descChilItem">{r.stars} star</span>
                        </li>
                      ))}
                    </ul>
                </li>

                {/* Size */}
                <li className="itemTypeReview">
                  <hr className="lineitemType"/>
                    <div className="labelType">
                      <span className="nameType">Size</span>
                      <IoIosArrowDown />
                    </div>
                    <ul className="childrenPopup">
                      {reviewSize.map((s) => (
                        <li className="itemChildrenPopup" key={s.id}>
                          <FaCirclePlus />
                          <span className="descChilItem">{s.size}</span>
                        </li>
                      ))}
                    </ul>
                </li>

                {/* Color */}
                <li className="itemTypeReview">
                  <hr className="lineitemType"/>
                    <div className="labelType">
                      <span className="nameType">Color</span>
                      <IoIosArrowDown />
                    </div>

                    <ul className="childrenPopup">
                      {colors.map((c, index) => (
                        <li className="itemChildrenPopup" key={index}>
                           <span
                              className="itemCircle"
                              key={index}
                              style={{ background: c.code }}
                            ></span>
                          <span className="descChilItem">{c.name}</span>
                        </li>
                      ))}
                    </ul>
                </li>
              </ul>
            </div>
             )}
          </div>
         
          <div className="sortByComment">
              <div className="cateSort">
                <span className="nameSort">Sort by:</span>
                <p className="typeName">{selected}</p>
              </div>
              <span className="cateDown">
                  <RiArrowDownSFill />
              </span>

              <ul className="sortOrderBy">
                {sortOrderByList.map((item, index) => (
                  <li className="OrderByItem" key={index} onClick={() => handleSelect(item.name)}>
                    <Link to={""} className="orderByDetail">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
          </div>
        </div>
        
        <div className="reviewGuest">
            <div className="reviewInfo">
                <h3 className="nameGuest">ElizabethRBklyn</h3>
                <span className="authenticateGuest">
                  <IoCheckmarkCircleSharp />
                  <p className="is_authen">Verified</p>
                </span>
                <div className="sizeOpinion">
                    <small className="nameSize">Size Purchased:</small>
                    <p className="typeSize">L</p>
                </div>
                <div className="sizeOpinion">
                    <small className="nameSize">Usual Size:</small>
                    <p className="typeSize">L</p>
                </div>
                <div className="colorOpinion">
                    <small className="nameColor">Color Selected:</small>
                    <p className="circleColorReview" style={{ background: "#FF0000" }}></p>
                </div>
                <div className="sizeOpinion">
                    <small className="nameSize">Body Type:</small>
                    <p className="typeSize">Petite</p>
                </div>
            </div>

            <div className="contentReview">
                <div className="quantityStar">
                  <div className="starProduct">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaRegStar />
                      <FaRegStar />
                  </div>
                  <span className="timeReview">
                    14 days ago
                  </span>
                </div>
                <div className="contentWrapper">
                    <span className="expressProduct">Warm and very attractive on</span>
                    <span className="contentDetailProduct">Got this to keep my husband warm on those chilly late fall days. He loves it as it not only 
                      is pretty warm but he looks good in it and he knows it.</span>
                </div>
            </div>
            <hr className="lineitemReview"/>

            <div className="reviewInfo">
                <h3 className="nameGuest">ElizabethRBklyn</h3>
                <span className="authenticateGuest">
                  <IoCheckmarkCircleSharp />
                  <p className="is_authen">Verified</p>
                </span>
                <div className="sizeOpinion">
                    <small className="nameSize">Size Purchased:</small>
                    <p className="typeSize">L</p>
                </div>
                <div className="sizeOpinion">
                    <small className="nameSize">Usual Size:</small>
                    <p className="typeSize">L</p>
                </div>
                <div className="colorOpinion">
                    <small className="nameColor">Color Selected:</small>
                    <p className="circleColorReview" style={{ background: "#FF0000" }}></p>
                </div>
                <div className="sizeOpinion">
                    <small className="nameSize">Body Type:</small>
                    <p className="typeSize">Petite</p>
                </div>
            </div>

            <div className="contentReview">
                <div className="quantityStar">
                  <div className="starProduct">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaRegStar />
                      <FaRegStar />
                  </div>
                  <span className="timeReview">
                    14 days ago
                  </span>
                </div>
                <div className="contentWrapper">
                    <span className="expressProduct">Warm and very attractive on</span>
                    <span className="contentDetailProduct">Got this to keep my husband warm on those chilly late fall days. He loves it as it not only 
                      is pretty warm but he looks good in it and he knows it.</span>
                </div>
            </div>
            <hr className="lineitemReview"/>

            <div className="readMoreReview">
                <button className="reviewMoreBtn">
                      read more review
                </button>
            </div>
        </div>
        

        <div className="transparent">
            <h4 className="titleTransparent">Transparent Pricing</h4>
            <span className="descTransparent">
            We publish what it costs us to make every one of our products. There are a lot of costs we can't neatly account for - 
            like design, fittings, wear testing, rent on office and retail space - but we believe you deserve to know what goes into making the products you love.
            </span>
            <div className="symbolList">
              <div className="itemSymbol">
                <img src={symbol1} alt="" />
                {/* <div className="contentSymbol"> */}
                    <span className="contentName">Materials</span>
                    <span className="priceSymbol">$47.96</span>
                {/* </div> */}
              </div>
              <div className="itemSymbol">
                <img src={symbol2} alt="" />
                {/* <div className="contentSymbol"> */}
                    <span className="contentName">Hardware</span>
                    <span className="priceSymbol">$5.74</span>
                {/* </div> */}
              </div>
              <div className="itemSymbol">
                <img src={symbol3} alt="" />
                {/* <div className="contentSymbol"> */}
                    <span className="contentName">Labor</span>
                    <span className="priceSymbol">$13.75</span>
                {/* </div> */}
              </div>
              <div className="itemSymbol">
                <img src={symbol4} alt="" />
                {/* <div className="contentSymbol"> */}
                    <span className="contentName">Duties</span>
                    <span className="priceSymbol">$8.09</span>
                {/* </div> */}
              </div>
              <div className="itemSymbol">
                <img src={symbol5} alt="" />
                {/* <div className="contentSymbol"> */}
                    <span className="contentName">Transport</span>
                    <span className="priceSymbol">$1.53</span>
                {/* </div> */}
              </div>
            </div>
        </div>
      </div>
      
    </>
  )
}

export default ReviewProduct