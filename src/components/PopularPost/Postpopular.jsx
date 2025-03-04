import React, { useState, useRef, useEffect }  from 'react';
import './Postpopular.css'
import Post1 from '../../assets/Post/Popular1.png'
import Post2 from '../../assets/Post/Popular2.png'
const banners = [
    { img: Post1, title: "Your Holiday Gift Picks", desc: "The best presents for everyone on your list.", button: "Read More" },
    { img: Post2, title: "Cleaner Fashion", desc: "See the sustainability efforts behind each of our products.", button: "Learn More" },

];
const Postpopular = () => {
  return (
    <>
        <div className="PopularPost">
            <div className="PostBody">
                {banners.map((item, index) => (
                <div className="PostLeft" key={index}>
                    <h4 className='TitlePost'>{item.title}</h4>
                    <img src={item.img} alt='' />
                    <span className='DescShort'>{item.desc}</span>
                    <button className='ReadBtn'>{item.button}</button>
                </div>
                 ))}
            </div>

            <div className="PostFooter">

            </div>
        </div>
    </>
  )
}

export default Postpopular