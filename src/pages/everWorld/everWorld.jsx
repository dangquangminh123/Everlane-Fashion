import React, { useState, useRef, useEffect }  from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Link } from "react-router-dom"; 
import Col from 'react-bootstrap/Col';
import Blogever from '../../assets/BlogEver/blogever.png';
import Blogever1 from '../../assets/BlogEver/blogever_1.png';
import Blogever2 from '../../assets/BlogEver/blogever_2.png';
import Blogever3 from '../../assets/BlogEver/blogever_3.png';
import Blogever4 from '../../assets/BlogEver/blogever_4.png';
import Blogever5 from '../../assets/BlogEver/blogever_5.png';
import TrustZone from '../../assets/BlogEver/trustzone.png';
import Progress1 from '../../assets/BlogEver/Progress.png';
import Progress2 from '../../assets/BlogEver/Progress_1.png';
import Progress3 from '../../assets/BlogEver/Progress_2.png';
import './everWorld.css';


const blogEverworld  = [
    {name: "How To Style Winter Whites", image: Blogever, category: "style"}, 
    {name: "We Won A Glossy Award", image: Blogever1, category: "Transparency"}, 
    {name: "Coordinate Your Style: Matching Outfits for Everyone", image: Blogever2, category: "style"}, 
    {name: "Black Friday Fund 2023", image: Blogever3, category: "Transparency"}, 
    {name: "What to Wear this Season: Holiday Outfits & Ideas", image: Blogever4, category: "style"}, 
    {name: "Thanksgiving Outfit Ideas", image: Blogever5, category: "style"}, 

    {name: "How To Style Winter Whites", image: Blogever, category: "style"}, 
    {name: "We Won A Glossy Award", image: Blogever1, category: "Transparency"}, 
    {name: "Coordinate Your Style: Matching Outfits for Everyone", image: Blogever2, category: "style"}, 
    {name: "Black Friday Fund 2023", image: Blogever3, category: "Transparency"}, 
    {name: "What to Wear this Season: Holiday Outfits & Ideas", image: Blogever4, category: "style"}, 
    {name: "Thanksgiving Outfit Ideas", image: Blogever5, category: "style"}, 
  ];

const ProgressList = [
    {image: Progress1, description: "Carbon Commitment"},
    {image: Progress2, description: "Environmental Initiatives"},
    {image: Progress3, description: "Better Factories"},
]
const everWorld = () => {
    const [visibleCount, setVisibleCount] = useState(6); // Ban đầu 6 bài

    const totalBlogs = blogEverworld.length;
    const visibleBlogs = blogEverworld.slice(0, visibleCount);

    const handleToggle = () => {
        // Nếu đang hiển thị hết -> bắt đầu thu gọn 6 cái
        if (visibleCount >= totalBlogs) {
        const newCount = Math.max(6, visibleCount - 6);
        setVisibleCount(newCount);
        } else {
        // Chưa hiển thị hết → Load thêm 6 cái
        const newCount = Math.min(totalBlogs, visibleCount + 6);
        setVisibleCount(newCount);
        }
    };

    // Xác định nút đang ở trạng thái nào
    const isExpanded = visibleCount >= totalBlogs;

  return (
    <>
        <div className="everWorldBox">
            <div className='everWorldBoxBody'>
                <div className="everworldHeader">
                </div>
                <div className="everworlTitle">
                    <h1 className='everworldFirst'>everworld</h1>
                    <span className='everworldDescription'>We’re on a mission to clean up a dirty industry. <br />
                    These are the people, stories, and ideas that will help us get there.</span>
                </div>

                {/* body */}
                <div className="everworldBody">
                    <div className='newLatest'>
                        <h3 className='titleLatest'>The Latest</h3>
                    </div>
                    <Row className="blogBody">
                        {visibleBlogs.map((item, index) => (
                            <Col xs={12} md={4} key={index}>
                                <div className="Itemsever">
                                <div className="imagesItems">
                                        <Link to='/detail_blog' className="imageEver">
                                            <img src={item.image} alt="" />
                                        </Link> 
                                </div>
                                    <div className="detailEver">
                                        <Link className='titleEver'>{item.name}</Link>
                                        <div className="detailCategory">
                                            <p className='categoryEver'>{item.category}</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>

                    <div className="loadMoreWrapper">
                        <button className="loadMoreBtn" onClick={handleToggle}>
                        {isExpanded ? "Collapse articals" : "Load more Articcals" }
                        </button>
                    </div>
                </div>
            </div>

            {/* Trust Us */}
            <div className="Trustzone">
                <img src={TrustZone} alt='trustzone' className='trustzoneImage'/>
            </div>
            {/* End Trust Us */}

            {/* Progress */}
            <div className="ProgressContent">
                <div className="ContentTitle">
                    <h3 className='HeaderContent'>
                        Our Progress
                    </h3>
                </div>
                <ul className="ListProgress">
                    {ProgressList.map((item, index) => (
                    <li className="itemProgress" key={index}>
                        <Link to="/detail_blog" className="itemProgressLink">
                            <img src={item.image} alt="" />
                        </Link>
                        <span className='descriptionTitle'>
                            {item.description}
                        </span>
                    </li>
                    ))}
                </ul>
            </div>
            {/* End Progress */}

            
            {/* follow us */}
            <div className="FollowUs">
                <h2 className='titleFollow'>Follow us on social for more</h2>
                <div className="backgroundBtn">
                    <button className='BtnFollow'>
                        @Everlane Instagram
                    </button>
                </div>
            </div>
            {/* End follow us */}
        </div>
    </>
  )
}

export default everWorld