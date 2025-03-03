import React, {useRef} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import './ReviewRate.css'
import review1 from '../../assets/Favorites/review.png'
import review2 from '../../assets/Favorites/review2.png'
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";
import { TiStar } from "react-icons/ti";

// Danh sách sản phẩm yêu thích
const ListReviews = [
    { id: 1, img: review1, numstar: 5, content: "“Love this shirt! Fits perfectly and the fabric is thick without being stiff.”", auth: "JonSnSF", product: "The Heavyweight Overshirt"},
    { id: 2, img: review2, numstar: 4, content: "“Love this shirt! Fits perfectly and the fabric is thick without being stiff.”", auth: "JonSnSF", product: "The Heavyweight Overshirt"},
];
const ReviewRate = () => {
    const swiperRef = useRef(null); // Tạo tham chiếu đến Swiper

  return (
    <>
        <div className="Reviews">
            <button
                className="RevPevtBtn"
                onClick={() => swiperRef.current?.slidePrev()} // Điều khiển Swiper khi bấm Previous
            >
                <GrFormPrevious />
            </button>
            <Swiper
                 modules={[Autoplay, Pagination]} // Đảm bảo Pagination có trong modules
                 spaceBetween={0}
                 slidesPerView={1}
                 onSwiper={(swiper) => (swiperRef.current = swiper)}
                //  loop={true}
                //  autoplay={{ delay: 3000, disableOnInteraction: false }}
                //  speed={900}
                 pagination={{ clickable: true, el: ".custom-pagination" }} // Chỉ định phần tử pagination bên ngoài
            >
                {ListReviews.map((item, index) => (
                    <SwiperSlide key={item.id}>
                        <div className="ReviewsBody">
                            <div className="DetailsReviews">
                                    <span className='PeopleSay'>People are talking</span>
                                    <div className="GeneraReview">
                                            <span className='NumberStar'>
                                            {[...Array(+item.numstar)].map((_, i) => <TiStar key={i} />)}
                                            </span>
                                            <p className='DetailsContent'>
                                                {item.content}
                                            </p>
                                            <div className='AuthProduct'>
                                                <p className='NameAuth'>--{item.auth}</p>
                                                <p className='ProductName'>{item.product}</p>
                                            </div>
                                    </div>
                            </div>
                            <div className="DetailsAuth">
                                    <div className="ImagesAuth">
                                        <img src={item.img} alt='' />
                                    </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
             <button
                className="RevNextBtn"
                onClick={() => swiperRef.current?.slideNext()} // Điều khiển Swiper khi bấm Next
            >
                <GrFormNext />
            </button>
            <div className="ReviewFooter"></div>
            <div className="custom-pagination"></div>
        </div>
    </>
  )
}

export default ReviewRate