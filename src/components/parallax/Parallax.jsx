import React, { useRef } from 'react';
import "./Parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Parallax({ type }) {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const Ytext = useTransform(scrollYProgress, [0, 1], ["0%", "300%"]);
    const Ybg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <div className='parallax' ref={ref}>
            <motion.h1 style={{ y: Ytext }}>{type}</motion.h1>
            <motion.div className="mountains"></motion.div>
            <motion.div style={{ y: Ybg }} className="planets"></motion.div>
            <motion.div style={{ x: Ytext }} className="stars"></motion.div>
        </div>
    );
}
