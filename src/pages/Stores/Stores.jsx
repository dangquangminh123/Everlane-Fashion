import React, { useState, useRef, useEffect }  from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import StoresImage from '../../assets/Stores/stores.png';
import StoresImage1 from '../../assets/Stores/stores_1.png';
import StoresImage2 from '../../assets/Stores/stores_2.png';
import StoresImage3 from '../../assets/Stores/stores_3.png';
import StoresImage4 from '../../assets/Stores/stores_4.png';
import StoresImage5 from '../../assets/Stores/stores_5.png';
import StoresImage6 from '../../assets/Stores/stores_6.png';
import StoresImage7 from '../../assets/Stores/stores_7.png';
import StoresImage8 from '../../assets/Stores/stores_8.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Stores.css';

const listExplore  = [
    {city: "SEATTLE", picture: StoresImage, address: "University Village"}, 
    {city: "SAN FRANCISCO", picture: StoresImage1, address: "Valencia Street, San Francisco"}, 
    {city: "PALO ALTO", picture: StoresImage2, address: "Stanford"}, 
    {city: "LOS ANGELES", picture: StoresImage3, address: "Abbot Kinney"}, 
    {city: "BOSTON", picture: StoresImage4, address: "Seaport"}, 
    {city: "NEW YORK", picture: StoresImage5, address: "Prince Street, New York"}, 
    {city: "BROOKLYN", picture: StoresImage6, address: "Williamsburg"}, 
    {city: "KING OF PRUSSIA", picture: StoresImage7, address: "King of Prussia"}, 
    {city: "GEORGETOWN", picture: StoresImage8, address: "Georgetown"}, 

  ];
const Stores = () => {
  return (
    <>
        <div className="StoresBox">
            <div className='BoxTitle'>
                <h1 className='TitleIntro'>Stores</h1>
                <span className='findOurStore'>Find one of our 11 stores nearest you.</span>
            </div>

            <div className="StoresBody">
              {listExplore.map((item, index) => (
                <Col xs={12} md={4}>
                    <div className="Itemstore" key={index}>
                        <div className="imageStore">
                            <img src={item.picture} alt="" />
                        </div> 
                        <div className="detailStore">
                            <span className='cityStore'>{item.city}</span>
                            <p className='addressStore'>{item.address}</p>
                        </div>
                    </div>
                </Col>
              ))}
            </div>
        </div>
    </>
  )
}

export default Stores