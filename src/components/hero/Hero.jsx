import React from 'react'
import "./Hero.scss";
import { motion } from "framer-motion";


const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity
        }
    }
};


const sliderVariants = {
    initial: {
        x: 0,
    },
    animate: {
        x: "-220%",
        opacity: 1,
        transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 20,
        },
    },
};

export default function Hero() {
    return (
        <div className='hero'>
            <div className="wrapper">
                <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
                    <motion.h2 variants={textVariants}>VIVEK DEVKAR</motion.h2>
                    <motion.h1 variants={textVariants}>Full-Stack web Developer</motion.h1>
                    <motion.div className="buttons" variants={textVariants}>
                        <motion.button variants={textVariants}>See the Latest Works</motion.button>
                        <motion.button variants={textVariants}>Contact Me</motion.button>
                    </motion.div>
                    <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="" />
                </motion.div>
            </div>

            <div className="imageContainer">
                <img src="/hero.png" alt="" />
            </div>

            <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate" >
                Python Django React Javascript
            </motion.div>
        </div>
    )
}
