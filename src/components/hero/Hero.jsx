import React from 'react'
import "./Hero.scss";
import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';

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
                    <motion.h1 variants={textVariants}>VIVEK DEVKAR</motion.h1>
                    <motion.h2 variants={textVariants}>
                        Proficient in
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed once, initially
                                ' Python',
                                1000,
                                ' Django',
                                1000,
                                ' React',
                                1000,
                                ' Docker',
                                1000,
                            ]}
                            speed={50}
                            style={{ color: 'orange' }}
                            repeat={Infinity}
                        />
                    </motion.h2>
                    <motion.div className="buttons" variants={textVariants}>
                        <motion.button variants={textVariants} whileHover={{ scale: 1.2 }}>See the Latest Works</motion.button>
                        <motion.button variants={textVariants} whileHover={{ scale: 1.2 }} > <a href="https://linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=vivekdevkar123">Let's Connect</a> </motion.button>
                    </motion.div>
                    <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="" />
                </motion.div>
            </div>

            <div className="imageContainer">
                <motion.img src="/hero.png" alt="" whileHover={{ scale: 1.1 }} />
            </div>

            <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate" >
                Python Django React Javascript
            </motion.div>
        </div>
    )
}
