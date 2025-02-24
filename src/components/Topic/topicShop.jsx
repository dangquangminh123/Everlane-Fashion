import React, { useState, useRef, useEffect }  from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Topic1 from '../../assets/topic/Topic1.png'
import Topic2 from '../../assets/topic/Topic2.png'
import Topic3 from '../../assets/topic/Topic3.png'
import { Link } from 'react-router-dom'

import './topicShop.css';

const ListTopic = [
    { img: Topic1, title: "New Arrivals", button: "shop the latest"},
    { img: Topic2, title: "Best-Sellers", button: "shop your favorites"},
    { img: Topic3, title: "The Holiday Outfit", button: "shop occasion"},
];

const topicShop = () => {
  return (
    <>
        <div className="TopicBox">
            {ListTopic.map((item, index) => (
                <Col xs={12} md={4}>
                    <div key={index} className="ItemTopic">
                        <img src={item.img} alt='' />
                        <div className="InfoTopic">
                            <p className='TitleTopic'>{item.title}</p>
                            <button className='TopicBtn'>
                                {item.button}
                            </button>
                        </div>
                    </div>
                </Col>
            ))}
        </div>
    </>
  )
}

export default topicShop