import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

import './Postpopular.css'
import Post1 from '../../assets/Post/Popular1.png'
import Post2 from '../../assets/Post/Popular2.png'


const PostPopular = [
    { img: Post1, title: "Your Holiday Gift Picks", desc: "The best presents for everyone on your list.", button: "Read More" },
    { img: Post2, title: "Cleaner Fashion", desc: "See the sustainability efforts behind each of our products.", button: "Learn More" },

];



const Postpopular = () => {
    const containerRef = useRef();

    useGSAP(() => {
        const posts = containerRef.current.querySelectorAll('.PostLeft');

        posts.forEach((post, index) => {
            const title = post.querySelector('.TitlePost');
            const image = post.querySelector('img');
            const desc = post.querySelector('.DescShort');
            const button = post.querySelector('.ReadBtn');

            // Tạo timeline cho các hoạt ảnh tuần tự
            const tl = gsap.timeline({ delay: index * 0.5 });

            tl.fromTo(title, { y: -50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 });
            tl.fromTo(image, { rotation: 0, scale: 0 }, { rotation: 360, scale: 1, duration: 1 }, '-=0.2');
            tl.fromTo(desc, { y: -30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, '-=0.5');
            tl.fromTo(button, { x: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5 }, '-=0.3');

           // Thêm sự kiện hover cho hình ảnh
           const handleMouseEnter = () => {
            gsap.to(image, { scale: 1.05, duration: 0.5 });
            };

            const handleMouseLeave = () => {
                gsap.to(image, { scale: 1, duration: 0.5 });
            };

            image.addEventListener('mouseenter', handleMouseEnter);
            image.addEventListener('mouseleave', handleMouseLeave);

            // Cleanup sự kiện khi component unmount
            return () => {
                image.removeEventListener('mouseenter', handleMouseEnter);
                image.removeEventListener('mouseleave', handleMouseLeave);
            };
        });
    }, containerRef);

  return (
    <>
        <div className="PopularPost" ref={containerRef}>
            <div className="PostBody">
                {PostPopular.map((item, index) => (
                <div className="PostLeft" key={index}>
                    <h4 className='TitlePost'>{item.title}</h4>
                    <img src={item.img} alt=''/>
                    <span className='DescShort'>{item.desc}</span>
                    <button className='ReadBtn' >{item.button}</button>
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