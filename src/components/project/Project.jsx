import React, { useRef } from 'react'
import "./Project.scss"
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
    {
        id: 1,
        title: "React Commerce",
        img: "https://source.unsplash.com/random/?Cryptocurrency&1",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi cupiditate iste nesciunt repellendus unde incidunt error, vitae similique porro officiis voluptatum quae architecto illo laboriosam! Totam repellat quibusdam voluptate assumenda?",
    },
    {
        id: 2,
        title: "Next js Commerce",
        img: "https://source.unsplash.com/random/?mobile&1",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi cupiditate iste nesciunt repellendus unde incidunt error, vitae similique porro officiis voluptatum quae architecto illo laboriosam! Totam repellat quibusdam voluptate assumenda?",
    },
    {
        id: 3,
        title: "Django Commerce",
        img: "https://source.unsplash.com/random/?cars&1",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi cupiditate iste nesciunt repellendus unde incidunt error, vitae similique porro officiis voluptatum quae architecto illo laboriosam! Totam repellat quibusdam voluptate assumenda?",
    },
    {
        id: 4,
        title: "porfolio",
        img: "https://source.unsplash.com/random/?Cryptocurrency&1",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi cupiditate iste nesciunt repellendus unde incidunt error, vitae similique porro officiis voluptatum quae architecto illo laboriosam! Totam repellat quibusdam voluptate assumenda?",
    },
];

const Single = ({ item }) => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        // offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

    return (
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} alt="" />
                    </div>
                    <motion.div className="textContainer" style={{ y }}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button>See Demo</button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};


export default function Project() {

    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"],
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });

    return (
        <div className='project' ref={ref}>
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            </div>
            {items.map((item) => (
                <Single item={item} key={item.id} />
            ))}
        </div>

    )
}
