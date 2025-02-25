import React, { useState, useRef, useEffect }  from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Topic1 from '../../assets/topic/Topic1.png'
import Topic2 from '../../assets/topic/Topic2.png'
import Topic3 from '../../assets/topic/Topic3.png'
import TopicMission from '../../assets/topic/Topic_Mission.png'
import { Link } from 'react-router-dom'

import './topicShop.css';

const ListTopic = [
    { img: Topic1, title: "New Arrivals", button: "shop the latest"},
    { img: Topic2, title: "Best-Sellers", button: "shop your favorites"},
    { img: Topic3, title: "The Holiday Outfit", button: "shop occasion"},
];


const topicShop = () => {

    const [extraTopic] = useState({
        img: TopicMission,
        title: "We’re on a Mission To Clean Up the Industry",
        description: "Read about our progress in our latest Impact Report.",
        button: "Learn More"
    });

    
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

        {/* Extra */}
        <div className="ExtraTopic">
            <img src={extraTopic.img} alt="Topic" />
            <div className="DetailsExtra">
                 {/* Tách từng ký tự trong title và thêm hiệu ứng, \u00A0 ký tự khoảng trắng*/}
                <h2 className='titleExtra'>
                    {extraTopic.title.split("").map((char, index) => (
                        <span key={index} style={{ "--delay": `${index * 0.1}s` }}>
                            {char === " " ? "\u00A0" : char}
                        </span>
                    ))} 
                </h2>

                <p className='descriptionExtra'>
                    {extraTopic.description.split("").map((char, index) => (
                        <span key={index} style={{ "--delay": `${index * 0.05}s` }}>
                            {char === " " ? "\u00A0" : char}
                        </span>
                    ))}
                </p>
                <button className='ExtraBtn'>
                    {extraTopic.button.split("").map((char, index) => (
                        <span key={index} style={{ "--delay": `${index * 0.1}s` }}>
                            {char === " " ? "\u00A0" : char}
                        </span>
                    ))}
                </button>
            </div>
        </div>
    </>
  )
}

export default topicShop