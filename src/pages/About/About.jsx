import React, { useState, useRef, useEffect }  from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import { useLocation, Outlet } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom'
import './About.css'
import intro1 from '../../assets/About/AboutIntro1.png'
import intro2 from '../../assets/About/AboutIntro2.png'
import intro3 from '../../assets/About/AboutIntro3.png'
import explore1 from '../../assets/About/explore1.png'
import explore2 from '../../assets/About/explore2.png'
import explore3 from '../../assets/About/explore3.png'
import AboutUs1 from '../../assets/About/AboutUs1.png'
import AboutUs2 from '../../assets/About/AboutUs2.png'
import CustomBarChart from '../../components/Chart/Companychart';


const listExplore  = [
  {name: "Our Products", img: explore1}, 
  {name: "Our Stores", img: explore2}, 
  {name: "Careers", img: explore3}, 

];
const About = () => {
  const isAboutPage = location.pathname === "/about";

  const [triggerAnimation, setTriggerAnimation] = useState(false);
  const [textColor, setTextColor] = useState("#000"); // Màu chữ ban đầu

  useEffect(() => {
    const startLoop = () => {
      // Đợi 3 giây trước khi chạy animation
      setTimeout(() => {
        setTriggerAnimation(true);
        setTextColor("#B38A6A"); // Đổi màu chữ khi bắt đầu animation

        // Sau khi animation chạy xong, reset về trạng thái ban đầu
        setTimeout(() => {
          setTriggerAnimation(false);
          setTextColor("#000"); // Trả về màu chữ ban đầu

          // Đợi đúng 7 giây rồi lặp lại vòng lặp animation
          setTimeout(() => {
            startLoop();
          }, 7000);
        }, 4000); // Animation kéo dài 2 giây
      }, 3000); // Đợi 3 giây trước khi chạy animation
    };

    startLoop();
  }, []);
  
  return (
    
   
    <>
      {isAboutPage && (
        <div className="AboutBox">
          <div className="AboutInfoOne">
              <motion.div 
                className="imagesAboutIntro"
                animate={triggerAnimation ? { rotateY: 360, opacity: 1 } : { rotateY: 0, opacity: 1 }}
                transition={{ duration: 4, ease: "easeInOut" }}
                style={{ transformOrigin: "center" }} // Đảm bảo xoay quanh trục giữa
              >
                <img src={intro1} alt="Intro 1" />
              </motion.div>

              {/* Nội dung */}
              <motion.div 
                className="ContentAbout"
                animate={triggerAnimation ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <motion.h4 
                  className="DetailContent"
                  animate={{ color: textColor }} // Chỉ đổi màu chữ chứ không mất chữ
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  At Everlane, we want the right choice to be as easy as putting on a great T-shirt. 
                  That’s why we partner with the best, ethical factories around the world. 
                  Source only the finest materials. And share those stories with you—down to the true cost of every product we make. 
                  It’s a new way of doing things. We call it Radical Transparency.
                </motion.h4>
              </motion.div>
          </div>
           <div className="AboutInfoTwo">
              <div className="AboutCompany">
                  <div className="ImagesDetails">
                    <img src={AboutUs2} alt='About Us' />
                  </div>
                  <div className="descriptionItems">
                    <p className='policyName'>OUR FACTORIES</p>
                    <h3 className='titlePolicy'>Our ethical approach.</h3>
                    <p className='contentPolicy'>
                    We spend months finding the best factories around the world—the same ones that produce your favorite designer labels.
                     We visit them often and build strong personal relationships with the owners. 
                     Each factory is given a compliance audit to evaluate factors like fair wages, reasonable hours, 
                    and environment. Our goal? A score of 90 or above for every factory.
                    </p>
                  </div>
              </div>
              <div className="imagesPolicy">
                <img src={intro2} alt='' />
              </div>
           </div>

           <div className="AboutInfoTwo">
              <div className="AboutCompany">
                  <div className="descriptionItems">
                    <p className='policyName'>OUR QUALITY</p>
                    <h3 className='titlePolicy'>Designed <br />to last.</h3>
                    <p className='contentPolicy'>
                    At Everlane, we’re not big on trends. We want you to wear our pieces for years, even decades, to come.
                     That’s why we source the finest materials and factories for our timeless products— like our Grade-A cashmere sweaters, 
                     Italian shoes, and Peruvian Pima tees.
                    </p>
                  </div>
                  <div className="ImagesDetails">
                    <img src={AboutUs1} alt='About Us 2' />
                  </div>
              </div>
              <div className="imagesPolicy">
                <img src={intro3} alt='' />
              </div>
           </div>

          <div className="aboutInfoThree">
              <CustomBarChart className="barInfo"/>
              <div className="AboutRadically">
                  <div className="descriptionRadically">
                    <p className='radicallyName'>OUR PRICES</p>
                    <h3 className='titleRadical'>Radically Transparent.</h3>
                    <p className='contentRadicall'>
                    We believe our customers have a right to know how much their clothes cost to make.
                     We reveal the true costs behind all of our products—from materials to labor to transportation—then offer them to you,
                      minus the traditional retail markup.
                    </p>
                  </div>
              </div>
          </div>

          <div className="moreExplore">
                  <h3 className='ExploreHeader'>More to Explore</h3>
                  <div className="listExplore">
                    {listExplore.map((item, index) => (
                      <div className="itemExplore" key={index}>
                          <div className="imagesItemsExplore">
                            <img src={item.img} alt='' />
                          </div>
                          <Link className='titleExplore'>{item.name}</Link>
                      </div>
                    ))}
                  </div>
          </div>
        </div>
      )}
     <Outlet />

    </>

  )
}

export default About