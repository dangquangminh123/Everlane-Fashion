import React, { useState, useRef, useEffect }  from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Topic1 from '../../assets/topic/Topic1.png'
import Topic2 from '../../assets/topic/Topic2.png'
import Topic3 from '../../assets/topic/Topic3.png'
import TopicMission from '../../assets/topic/Topic_Mission.png'
import { Canvas, useFrame } from "@react-three/fiber";
import { DirectionalLightHelper } from "three";
import { OrbitControls } from "@react-three/drei";
import { Link } from 'react-router-dom'

import './topicShop.css';

const ListTopic = [
    { img: Topic1, title: "New Arrivals", button: "shop the latest"},
    { img: Topic2, title: "Best-Sellers", button: "shop your favorites"},
    { img: Topic3, title: "The Holiday Outfit", button: "shop occasion"},
];


const LightAndShadow = () => {
    const lightRef = useRef();
  
    useEffect(() => {
      if (lightRef.current) {
        const helper = new DirectionalLightHelper(lightRef.current, 1);
        lightRef.current.parent.add(helper); // Thêm helper vào scene thay vì light
      }
    }, []);
  
    return (
      <>
        <ambientLight intensity={0.3} />
        <directionalLight ref={lightRef} position={[3, 5, 3]} intensity={0.8} castShadow />
      </>
    );
  };
  
const AnimatedBox = () => {
    const boxRef = useRef();
  
    useFrame(() => {
      if (boxRef.current) {
        boxRef.current.rotation.y += 0.01; // Xoay nhẹ
      }
    });
  
    return (
      <mesh ref={boxRef} castShadow receiveShadow>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="red" />
      </mesh>
    );
};
  
const Ground = () => {
    return (
      <mesh receiveShadow position={[0, -0.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[5, 5]} />
        <shadowMaterial opacity={0.3} />
      </mesh>
    );
};

const TopicCanvas = () => {
    return (
      <Canvas className="topicCanvas" shadows camera={{ position: [0, 2, 5] }}>
        <LightAndShadow />
        <Ground />
        <AnimatedBox />
      </Canvas>
    );
  };

const topicShop = () => {
    const Ground = () => {
        return (
            <mesh receiveShadow position={[0, -0.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[5, 5]} />
                <shadowMaterial opacity={0.3} />
            </mesh>
        );
    };
    
    const [extraTopic] = useState({
        img: TopicMission,
        title: "We’re on a Mission To Clean Up the Industry",
        description: "Read about our progress in our latest Impact Report.",
        button: "Learn More"
    });


    
  return (
    <>
        {/* <div className="TopicBox">
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
        </div> */}

    <div className="TopicBox">
      {ListTopic.map((item, index) => (
        <Col xs={12} md={4} key={index}>
          <div className="ItemTopic">
            <TopicCanvas /> {/* Thêm Three.js cho từng Item */}
            <img src={item.img} alt="" />
            <div className="InfoTopic">
              <p className="TitleTopic">{item.title}</p>
              <button className="TopicBtn">{item.button}</button>
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