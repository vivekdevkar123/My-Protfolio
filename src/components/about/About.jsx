import React from 'react'
import "./About.scss";
import { motion } from "framer-motion";

export default function About() {

    const textVariants = {
        initial: {
            x: -500,
            y: 100,
            opacity: 0,
        },
        animate: {
            x: 0,
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                staggerChildren: 0.1,
            },
        }
    };


    return (
        <motion.div className='about' variants={textVariants} initial="initial" whileInView="animate">
            <motion.div className="textContainer" variants={textVariants}>
                <p>I focus on helping your brand grow <br /> and move forward</p>
                <hr />
            </motion.div>
            <motion.div className="titleContainer" variants={textVariants}>
                <div className="title">
                    <img src="/people.webp" alt="" />
                    <h1>
                        <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
                    </h1>
                </div>
                <div className="title">
                    <h1>
                        <motion.b whileHover={{ color: "orange" }}>For Your</motion.b> Business.
                    </h1>
                    <button>WHAT WE DO?</button>
                </div>

            </motion.div>
            <motion.div className="listContainer" variants={textVariants}>
                <motion.div className="box" whileHover={{ background: "lightgrey", color: "black" }}>
                    <h2>Branding</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque inventore, cupiditate et nulla repellat veniam eveniet quod reprehenderit hic, quidem eligendi temporibus! Id harum autem libero at nihil necessitatibus reiciendis odio hic consectetur labore. Eius cum architecto veniam esse consectetur!</p>
                    <button>Go</button>
                </motion.div>
                <motion.div className="box" whileHover={{ background: "lightgrey", color: "black" }}>
                    <h2>Branding</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque inventore, cupiditate et nulla repellat veniam eveniet quod reprehenderit hic, quidem eligendi temporibus! Id harum autem libero at nihil necessitatibus reiciendis odio hic consectetur labore. Eius cum architecto veniam esse consectetur!</p>
                    <button>Go</button>
                </motion.div>
                <motion.div className="box" whileHover={{ background: "lightgrey", color: "black" }}>
                    <h2>Branding</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque inventore, cupiditate et nulla repellat veniam eveniet quod reprehenderit hic, quidem eligendi temporibus! Id harum autem libero at nihil necessitatibus reiciendis odio hic consectetur labore. Eius cum architecto veniam esse consectetur!</p>
                    <button>Go</button>
                </motion.div>
                <motion.div className="box" whileHover={{ background: "lightgrey", color: "black" }}>
                    <h2>Branding</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque inventore, cupiditate et nulla repellat veniam eveniet quod reprehenderit hic, quidem eligendi temporibus! Id harum autem libero at nihil necessitatibus reiciendis odio hic consectetur labore. Eius cum architecto veniam esse consectetur!</p>
                    <button>Go</button>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}
