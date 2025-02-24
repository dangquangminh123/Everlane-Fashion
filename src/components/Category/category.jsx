import React, { useState, useRef, useEffect }  from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Category1 from '../../assets/category/category.png'
import Category2 from '../../assets/category/category2.png'
import Category3 from '../../assets/category/category3.png'
import Category4 from '../../assets/category/category4.png'
import Category5 from '../../assets/category/category5.png'
import Category6 from '../../assets/category/category6.png'
import { Link } from 'react-router-dom'

import './category.css';

const ListCategory = [
    { img: Category1, title: "Shirts"},
    { img: Category2, title: "Denim"},
    { img: Category3, title: "Tees" },
    { img: Category4, title: "Pants" },
    { img: Category5, title: "Sweaters" },
    { img: Category6, title: "Outerwear" }
];

const category = () => {
  return (
    <>
        <div className="CategoryBox">
            <div className="CategoryHeader">
                <h3 className="CategoryTitle">Shop by category</h3>
            </div>
            <div className="CategoryBody">
                <div className="ListCategory">
                    {ListCategory.map((item, index) => (
                    <Col xs={12} md={2}>
                        <div key={index} className="ItemCategory">
                            <Link className="PictureCategory">
                                <img src={item.img} alt='' />
                            </Link>
                            <Link className="NameCategory">
                                <p className='TitleCategory'>{item.title}</p>
                            </Link>
                        </div>
                    </Col>
                    ))}
                </div>
            </div>
        </div>
    </>
  )
}

export default category