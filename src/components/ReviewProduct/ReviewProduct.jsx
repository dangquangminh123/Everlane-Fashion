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
import { FaStarHalfAlt } from "react-icons/fa";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import TransparentPricing from "../Transparent/transparent";

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

  const reviews = [
    {
      id: 1,
      guestName: "ElizabethRBklyn",
      isVerified: true,
      starRating: 3, 
      sizePurchased: "L", 
      usualSize: "L",
      colorSelected: "#FF0000", 
      bodyType: "Petite",
      title: "Warm and very attractive on",
      content:
        "Got this to keep my husband warm on those chilly late fall days. He loves it as it not only is pretty warm but he looks good in it and he knows it.",
      createdAt: "2025-04-18T14:30:00Z",
    },
    {
      id: 2,
      guestName: "Broadhaven",
      isVerified: true,
      starRating: 4,
      sizePurchased: "L",
      usualSize: "L",
      colorSelected: "#FF0000",
      bodyType: "Petite",
      title: "Perfect pants for any occasion",
      content:
        "The athletic fit is outstanding..great fabric and the color is perfect",
      createdAt: "2025-03-18T18:10:00Z",
    },
    {
      id: 3,
      guestName: "Sa keay",
      isVerified: true,
      starRating: 4.5,
      sizePurchased: "XL",
      usualSize: "XL",
      colorSelected: "#0000FF",
      bodyType: "Average",
      title: "Super trousers",
      content: "Lovely material, these look really smart and feel like they will last.",
      createdAt: "2024-07-18T20:10:00Z",
    },
    // thêm nhiều review khác...
  ];

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

  function renderStars(rating) {
    const totalStars = 5;
    const stars = [];
  
    for (let i = 0; i < totalStars; i++) {
      if (i + 1 <= rating) {
        stars.push(<FaStar key={`star-full-${i}`} />);
      } else if (i + 0.5 <= rating) {
        stars.push(<FaStarHalfAlt key={`star-half-${i}`} />);
      } else {
        stars.push(<FaRegStar key={`star-empty-${i}`} />);
      }
    }
  
    return <div className="starProduct">{stars}</div>;
  }

  function formatRelativeTime(dateString) {
    const now = new Date();
    const createdDate = new Date(dateString);
    const diffInMs = now - createdDate;
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
  
    if (diffInDays === 0) return "Today";
    if (diffInDays === 1) return "Yesterday";
    if (diffInDays <= 7) return `${diffInDays} days ago`;
  
    const diffInWeeks = Math.floor(diffInDays / 7);
    if (diffInWeeks <= 4) return `${diffInWeeks} week${diffInWeeks > 1 ? 's' : ''} ago`;
  
    const diffInMonths = Math.floor(diffInDays / 30); // gần đúng, không cần quá chính xác
    return `${diffInMonths} month${diffInMonths > 1 ? 's' : ''} ago`;
  }
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
        
        {reviews.map((review) => (
        <div className="reviewGuest" key={review.id}>
            <div className="reviewInfo">
                <h3 className="nameGuest">{review.guestName}</h3>
                {review.isVerified && (
                  <span className="authenticateGuest">
                    <IoCheckmarkCircleSharp />
                    <p className="is_authen">Verified</p>
                  </span>
                )}
                <div className="sizeOpinion">
                    <small className="nameSize">Size Purchased:</small>
                    <p className="typeSize">{review.sizePurchased}</p>
                </div>
                <div className="sizeOpinion">
                    <small className="nameSize">Usual Size:</small>
                    <p className="typeSize">{review.usualSize}</p>
                </div>
                <div className="colorOpinion">
                    <small className="nameColor">Color Selected:</small>
                    <p className="circleColorReview" style={{ background: review.colorSelected }}></p>
                </div>
                <div className="sizeOpinion">
                    <small className="nameSize">Body Type:</small>
                    <p className="typeSize">{review.bodyType}</p>
                </div>
            </div>

            <div className="contentReview">
                <div className="quantityStar">
                {renderStars(review.starRating)}
                  <span className="timeReview">
                    {formatRelativeTime(review.createdAt)}
                  </span>
                </div>
                <div className="contentWrapper">
                    <span className="expressProduct">{review.title}</span>
                    <span className="contentDetailProduct">{review.content}</span>
                </div>
            </div>
            <hr className="lineitemReview"/>
        </div>
        ))}

            <div className="readMoreReview">
                <button className="reviewMoreBtn">
                      read more review
                </button>
            </div>
        

            <TransparentPricing />
        </div>
    
    </>
  )
}

export default ReviewProduct