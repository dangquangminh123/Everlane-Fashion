import React, { useRef } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { IoIosArrowRoundForward } from "react-icons/io";
import './Footer.css'
import { Link } from 'react-router-dom'
import { motion, useInView } from "framer-motion";

// Định nghĩa animation fadeInUp
const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

const Footer = () => {

  return (
        <motion.div
        className="FooterBox"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }} // Hiển thị khi lăn chuột tới
        variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
        }}
        >
        <div className="FooterBody">
            {[
            {
                title: "Account",
                links: ["Log In", "Sign Up", "Redeem a Gift Card"],
            },
            {
                title: "Company",
                links: [
                "About",
                "Environmental Initiatives",
                "Factories",
                "DEI",
                "Careers",
                "International",
                "Accessibility",
                ],
            },
            {
                title: "Get Help",
                links: ["Help Center", "Return Policy", "Shipping Info", "Bulk Orders"],
            },
            {
                title: "Connect",
                links: ["Facebook", "Instagram", "Twitter", "Affiliates", "Out Stores"],
            },
            ].map((section, index) => (
            <Col xs={12} md={2} key={index}>
                <motion.span
                className="TopicFooter"
                variants={fadeInUp}
                >
                {section.title}
                </motion.span>
                <ul className="listCompany">
                {section.links.map((link, i) => (
                    <motion.li
                    key={i}
                    className="ItemCompany"
                    variants={fadeInUp}
                    whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                    >
                    <Link className="DetailItems" to={"/"}>
                        {link}
                    </Link>
                    </motion.li>
                ))}
                </ul>
            </Col>
            ))}

            {/* Giữ nguyên phần EmailContact */}
            <Col xs={12} md={4}>
            <motion.div className="EmailContact" variants={fadeInUp}>
                <form method="" action="" className="FormContact">
                <input
                    type="email"
                    className="EmailInput"
                    placeholder="Email Address"
                />
                <motion.button
                    type="submit"
                    className="EmailBtn"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <IoIosArrowRoundForward />
                </motion.button>
                </form>
            </motion.div>
            </Col>
        </div>

        {/* GIỮ NGUYÊN FooterContent */}
        <div className="FooterContent">
            <ul className="listContent">
            {[
                "Privacy Policy",
                "Terms of Service",
                "Do Not Sell or Share My Personal Information",
                "CS Supply Chain Transparency",
                "Vendor Code of Conduct",
                "Sitemap Pages",
                "Sitemap Products",
            ].map((item, i) => (
                <motion.li key={i} className="ItemContent" variants={fadeInUp}>
                <p className="DetailContent">{item}</p>
                </motion.li>
            ))}
            </ul>
            <motion.span className="coppy_right" variants={fadeInUp}>
            © 2023 All rights reserved by Dang Quang Minh
            </motion.span>
        </div>
        </motion.div>
  )
}

export default Footer