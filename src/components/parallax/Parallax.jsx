import React, { useRef } from 'react';
import "./Parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Parallax({ type }) {
    // const ref = useRef();

    // const { scrollProgress } = useScroll({
    //     target: ref.current, // Use ref.current to get the DOM element
    //     offset: ["start start", "end start"]
    // });

    // Debugging: Check if scrollProgress is defined
    // console.log("scrollProgress:", scrollProgress);

    // const Ytext = useTransform(scrollProgress, [0, 1], ["0%", "500%"]);
    // const Ybg = useTransform(scrollProgress, [0, 1], ["0%", "100%"]);

    return (
        <div className='parallax'>
            <motion.h1>{type}</motion.h1>
            <motion.div className="mountains"></motion.div>
            <motion.div className="planets"></motion.div>
            <motion.div className="stars"></motion.div>
        </div>
    );
}
