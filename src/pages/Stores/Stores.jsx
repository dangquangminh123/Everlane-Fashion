import React, { useState, useRef, useEffect }  from 'react';
import { Row, Col } from 'react-bootstrap';
import StoresImage from '../../assets/Stores/stores.png';
import StoresImage1 from '../../assets/Stores/stores_1.png';
import StoresImage2 from '../../assets/Stores/stores_2.png';
import StoresImage3 from '../../assets/Stores/stores_3.png';
import StoresImage4 from '../../assets/Stores/stores_4.png';
import StoresImage5 from '../../assets/Stores/stores_5.png';
import StoresImage6 from '../../assets/Stores/stores_6.png';
import StoresImage7 from '../../assets/Stores/stores_7.png';
import StoresImage8 from '../../assets/Stores/stores_8.png';
import StoresImage9 from '../../assets/Stores/stores_9.png';
import StoresImage10 from '../../assets/Stores/stores_10.png';
import StoresImage1_2 from '../../assets/Stores/stores1_2.png';
import StoresImage2_2 from '../../assets/Stores/stores2_2.png';
import StoresImage3_2 from '../../assets/Stores/stores3_2.png';
import StoresImage4_2 from '../../assets/Stores/stores4_2.png';
import StoresImage5_2 from '../../assets/Stores/stores5_2.png';
import StoresImage6_2 from '../../assets/Stores/stores6_2.png';
import StoresImage7_2 from '../../assets/Stores/stores7_2.png';
import StoresImage8_2 from '../../assets/Stores/stores8_2.png';
import StoresImage9_2 from '../../assets/Stores/stores9_2.png';
import StoresImage10_2 from '../../assets/Stores/stores10_2.png';
import StoresImage11_2 from '../../assets/Stores/stores11_2.png';
import StoresImage12_2 from '../../assets/Stores/stores12_2.png';
import StoresImage13_2 from '../../assets/Stores/stores13_2.png';
import StoresImage14_2 from '../../assets/Stores/stores14_2.png';
import StoresImage15_2 from '../../assets/Stores/stores15_2.png';
import StoresImage16_2 from '../../assets/Stores/stores16_2.png';
import StoresImage17_2 from '../../assets/Stores/stores17_2.png';
import StoresImage18_2 from '../../assets/Stores/stores18_2.png';
import StoresImage19_2 from '../../assets/Stores/stores19_2.png';
import StoresImage20_2 from '../../assets/Stores/stores20_2.png';
import { IoMdClose } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";
import { AnimatePresence, motion } from 'framer-motion';
import './Stores.css';
import { Link } from 'react-router-dom';

const listExplore  = [
    {id: 1, city: "SEATTLE", name: "University Village", picture: StoresImage, address: "University Village", 
      detailAddress: "2623 NE University Village St, Seattle, WA 98105", phone: "206-729-5350", directionLink: "/stores",
        images: [
          StoresImage1_2,
          StoresImage2_2
      ],
      openingHours: {
        weekdays: { day: "Monday - Saturday", time: "10 a.m - 8 p.m" },
        weekend: { day: "Sunday", time: "11 a.m. - 6 p.m." }
      },
      session: {
        available: true,
        title: "1-Hour Styling Sessions",
        description: "Need styling help? Book an in-store styling session to get one-on-one help.",
        time: "11am-6pm Monday - Friday",
        link: "/stores"
      }
    }, 
    {id: 2, city: "SAN FRANCISCO", name: "Valencia Street, San Francisco", picture: StoresImage1, address: "Valencia Street, San Francisco", 
      detailAddress: "461 Valencia Street San Francisco, CA 94103", phone: "415-209-5195", directionLink: "/stores",
        images: [
          StoresImage3_2,
          StoresImage4_2
      ],
      openingHours: {
        weekdays: { day: "Monday - Saturday", time: "10 a.m - 8 p.m" },
        weekend: { day: "Sunday", time: "11 a.m. - 7 p.m." }
      },
      session: {
        available: true,
        title: "1-Hour Styling Sessions",
        description: "Give us a call or text, an ambassador will will be happy to help!",
        time: "11am - 6pm Monday - Friday",
        link: "/stores"
      }
    }, 
    {id: 3, city: "PALO ALTO", name: "Stanford", picture: StoresImage2, address: "Stanford", 
      detailAddress: "Stanford Shopping Center Palo Alto, CA 94304", phone: "650-206-8429", directionLink: "/stores",
        images: [
          StoresImage5_2,
          StoresImage6_2
      ],
      openingHours: {
        weekdays: { day: "Monday - Saturday", time: "10 a.m - 8 p.m" },
        weekend: { day: "Sunday", time: "11 a.m. - 6 p.m." }
      },
      session: {
        available: true,
        title: "1-Hour Styling Sessions",
        description: "We are currently seeking Everlane Ambassadors! If you enjoy serving others and are passionate about our product, please apply below. Currently seeking all year round Part Time Ambassadors, and Seasonal Part Time Ambassadors.",
        time: "11am - 6pm Monday - Friday",
        link: "/stores"
      }
    }, 
    {id: 4, city: "LOS ANGELES", name: "Abbot Kinney", picture: StoresImage3, address: "Abbot Kinney", 
      detailAddress: "1101 Abbot Kinney Blvd Los Angeles, CA 90291", phone: "424-529-0291", directionLink: "/stores",
        images: [
          StoresImage7_2,
          StoresImage8_2
      ],
      openingHours: {
        weekdays: { day: "Monday - Saturday", time: "10 a.m - 8 p.m" },
        weekend: { day: "Sunday", time: "11 a.m. - 7 p.m." }
      },
      session: {
        available: true,
        title: "1-Hour Styling Sessions",
        description: "Need styling help? Book an in-store style session to get one-on-one help.",
        time: "11am - 6pm Monday - Friday",
        link: "/stores"
      }
    }, 
    {id: 5, city: "BOSTON", name: "Seaport", picture: StoresImage4, address: "Seaport", 
      detailAddress: "125 Seaport Blvd Boston, MA 02210", phone: "508-319-9748", directionLink: "/stores",
        images: [
          StoresImage9_2,
          StoresImage10_2
      ],
      openingHours: {
        weekdays: { day: "Monday - Saturday", time: "10 a.m - 8 p.m" },
        weekend: { day: "Sunday", time: "11 a.m. - 7 p.m." }
      },
      session: {
        available: true,
        title: "1-Hour Styling Sessions",
        description: "Send us a text and an ambassador will respond when available.",
        time: "11am - 6pm Monday - Friday",
        link: "/stores"
      }
    }, 
    {id: 6, city: "NEW YORK", name: "Prince Street, New York", picture: StoresImage5, address: "Prince Street, New York", 
      detailAddress: "28 Prince St.New York, NY 10012", phone: "917-275-7943", directionLink: "/stores",
        images: [
          StoresImage11_2,
          StoresImage12_2
      ],
      openingHours: {
        weekdays: { day: "Monday - Saturday", time: "10 a.m - 8 p.m" },
        weekend: { day: "Sunday", time: "11 a.m. - 7 p.m." }
      },
      session: {
        available: true,
        title: "Have a question?",
        description: "Send us an email and an ambassador will respond when available.",
        time: "11am - 6pm Monday - Friday",
        link: "/stores"
      }
    }, 
    {id: 7, city: "BROOKLYN", name: "Williamsburg", picture: StoresImage6, address: "Williamsburg", 
      detailAddress: "104 N 6th St Brooklyn, NY 11249", phone: "347-201-2308", directionLink: "/stores",
        images: [
          StoresImage13_2,
          StoresImage14_2
      ],
      openingHours: {
        weekdays: { day: "Monday - Saturday", time: "10 a.m - 8 p.m" },
        weekend: { day: "Sunday", time: "11 a.m. - 7 p.m." }
      },
      session: {
        available: true,
        title: "Have a question?",
        description: "Send us an email and an ambassador will respond when available.",
        time: "11am - 6pm Monday - Friday",
        link: "/stores"
      }
    }, 
    {id: 8, city: "BROOKLYN", name: "King of Prussia", picture: StoresImage7, address: "King of Prussia", 
      detailAddress: "160 N Gulph Rd King of Prussia, PA 19406", phone: "(610) 466-5595", directionLink: "/stores",
        images: [
          StoresImage15_2,
          StoresImage16_2
      ],
      openingHours: {
        weekdays: { day: "Monday - Saturday", time: "10 a.m - 9 p.m" },
        weekend: { day: "Sunday", time: "11 a.m. - 6 p.m." }
      },
      session: {
        available: true,
        title: "1-Hour Styling Sessions",
        description: "Need styling help? Book an in-store styling session to get one-on-one help.",
        time: "11am - 6pm Monday - Friday",
        link: "/stores"
      }
    }, 
     {id: 9, city: "Georgetown", name: "Georgetown", picture: StoresImage8, address: "Georgetown", 
      detailAddress: "3259 M St NW Georgetown, DC 20007-3616", phone: "301-541-8432", directionLink: "/stores",
        images: [
          StoresImage17_2,
          StoresImage18_2
      ],
      openingHours: {
        weekdays: { day: "Monday - Saturday", time: "10 a.m - 8 p.m" },
        weekend: { day: "Sunday", time: "11 a.m. - 7 p.m." }
      },
      session: {
        available: true,
        title: "1-Hour Styling Sessions",
        description: "Need styling help? Book an in-store styling session to get one-on-one help.",
        time: "11am - 6pm Monday - Friday",
        link: "/stores"
      }
    }, 
    {id: 10, city: "Austin", name: "Austin", picture: StoresImage9, address: "Austin", 
      detailAddress: "1011 S Congress Ave. Bldg 1, Suite 140 Austin, TX 78704", phone: "512-843-2217", directionLink: "/stores",
        images: [
          StoresImage19_2,
          StoresImage20_2
      ],
      openingHours: {
        weekdays: { day: "Monday - Saturday", time: "10 a.m - 8 p.m" },
        weekend: { day: "Sunday", time: "11 a.m. - 7 p.m." }
      },
      session: {
        available: true,
        title: "1-Hour Styling Sessions",
        description: "Need styling help? Book an in-store styling session to get one-on-one help.",
        time: "11am - 6pm Monday - Friday",
        link: "/stores"
      }
    }, 
    {id: 11, city: "MCLEAN", name: "Tysons Corner", picture: StoresImage10, address: "Tysons Corner", 
      detailAddress: "1961 Chain Bridge Rd. McLean, VA 22102", phone: "512-843-2217", directionLink: "/stores",
        images: [
          StoresImage10,
          StoresImage17_2
      ],
      openingHours: {
        weekdays: { day: "Monday - Saturday", time: "10 a.m - 9 p.m" },
        weekend: { day: "Sunday", time: "11 a.m. - 7 p.m." }
      },
      session: {
        available: true,
        title: "1-Hour Styling Sessions",
        description: "Need styling help? Book an in-store styling session to get one-on-one help.",
        time: "11am - 6pm Monday - Friday",
        link: "/stores"
      }
    }, 
  ];

const Stores = () => {
  const [selectedStoreId, setSelectedStoreId] = useState(null);

  const handleSelectStore = (store) => {
    if (selectedStoreId === store.id) {
      setSelectedStoreId(null); // Click lại chính nó thì đóng
    } else {
      setSelectedStoreId(store.id); // Mở mới
    }
  };

  const handleCloseBranch = () => {
    setSelectedStoreId(null);
  };

  const rows = [];
  for (let i = 0; i < listExplore.length; i += 3) {
    rows.push(listExplore.slice(i, i + 3));
  }

  return (
    <div className="StoresBody">
      {rows.map((rowItems, rowIndex) => {
        return (
          <React.Fragment key={`row-${rowIndex}`}>
            {/* Row chứa 3 item */}
            <Row>
              {rowItems.map((item, colIndex) => (
                <Col xs={12} md={4} key={`item-${rowIndex}-${colIndex}`}>
                  <div
                    className="Itemstore"
                    onClick={() => handleSelectStore(item)}
                  >
                    <div className="imageStore">
                      <img src={item.picture} alt="" />
                    </div>
                    <div className="detailStore">
                      <span className="cityStore">{item.city}</span>
                      <p className="addressStore">{item.address}</p>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>

            {/* Detail branch nằm dưới đúng hàng đang chọn */}
            <AnimatePresence>
              {rowItems.some((s) => s.id === selectedStoreId) && (
                <Row>
                  <Col xs={12}>
                    <motion.div
                      className="detailBranch"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      {(() => {
                        const selectedStore = listExplore.find(
                          (s) => s.id === selectedStoreId
                        );
                        if (!selectedStore) return null;

                        return (
                          <>
                            {selectedStore.images.map((img, i) => (
                              <div className="detailsImage" key={i}>
                                <img src={img} alt="" />
                              </div>
                            ))}

                            <div className="infoDetailBranch">
                              <div className="aboutsStore">
                                <div className="headerBranch">
                                  <h3 className="nameAddress">
                                    {selectedStore.name}
                                  </h3>
                                  <span
                                    className="closeBranch"
                                    onClick={handleCloseBranch}
                                  >
                                    <IoMdClose />
                                  </span>
                                </div>
                                <div className="gereralAddress">
                                  <div className="streetAddress">
                                    <span className="nameStreet">
                                      {selectedStore.detailAddress}
                                    </span>
                                    <span className="phoneAddress">
                                      {selectedStore.phone}
                                    </span>
                                    <Link
                                      to={selectedStore.directionLink}
                                      className="checkDirection"
                                    >
                                      Get Directions
                                    </Link>
                                  </div>
                                  <div className="calenderOpen">
                                    <div className="inweekend">
                                      <div className="dayOpen">
                                        {
                                          selectedStore.openingHours.weekdays
                                            .day
                                        }
                                      </div>
                                      <div className="timeOpen">
                                        {
                                          selectedStore.openingHours.weekdays
                                            .time
                                        }
                                      </div>
                                    </div>
                                    <div className="lastweekend">
                                      <div className="dayOpen">
                                        {
                                          selectedStore.openingHours.weekend
                                            .day
                                        }
                                      </div>
                                      <div className="timeOpen">
                                        {
                                          selectedStore.openingHours.weekend
                                            .time
                                        }
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {selectedStore.session.available && (
                                <div className="generalIn">
                                  <span className="timeMeeting">
                                    {selectedStore.session.title}
                                  </span>
                                  <div className="questionDetail">
                                    <span className="contentMeeting">
                                      {selectedStore.session.description}
                                    </span>
                                    <span className="timeOpenMeeting">
                                      {selectedStore.session.time}
                                    </span>
                                  </div>
                                  <Link
                                    to={selectedStore.session.link}
                                    className="checkDirection"
                                  >
                                    Book Here
                                  </Link>
                                </div>
                              )}
                            </div>
                          </>
                        );
                      })()}
                    </motion.div>
                  </Col>
                </Row>
              )}
            </AnimatePresence>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Stores;
