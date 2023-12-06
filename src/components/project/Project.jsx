import React, { useRef } from 'react'
import "./Project.scss"
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
    {
        id: 1,
        title: "CodeCollab",
        img: "/code-collabe.jpg",
        desc: "CodeCollab is a real-time collaborative code editor that allows multiple users to code together simultaneously. It's a web-based platform where developers can create and join coding rooms, write, edit, and execute code in various programming languages, and see real-time updates from their collaborators. CodeCollab is designed to streamline remote pair programming, facilitate coding interviews, and enhance collaborative coding experiences.",
    },
    {
        id: 2,
        title: "Data Visualization Platform",
        img: "/visudata.jpg",
        desc: "The goal of this project is to build a web application that allows users to visualize and interact with large datasets in real-time. The application will utilize Django as the backend framework, focusing on providing users with an intuitive and dynamic interface to explore, analyze, and manipulate data visually.",
    },
    {
        id: 3,
        title: "My Portfolio",
        img: "/my-portfolio.jpg",
        desc: "Built on the robust React.js framework and enhanced with captivating animations powered by the Framer Motion library, this portfolio website redefines the way you present your skills and projects online. With a focus on seamless interactivity and dynamic visuals, our React.js and Framer Motion-based portfolio ensures an engaging and memorable user experience.",
    },
    {
        id: 4,
        title: "CrimiNet",
        img: "/crimenet.jpg",
        desc: "CrimeNet is an innovative web-based platform built on Django, dedicated to revolutionizing the crime investigation process. Our platform serves as a centralized hub for storing and managing crime-related data, providing seamless access to case information anytime, anywhere. With CrimeNet, law enforcement agencies and investigators can streamline their workflow, enhance collaboration, and optimize the efficiency of their investigative efforts.",
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
