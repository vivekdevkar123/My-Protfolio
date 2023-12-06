import React from 'react'
import { motion } from "framer-motion";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },

};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },

}
export default function Links() {

  return (
    <motion.div className='links' variants={variants}>
      <motion.a href={`#Home`} key="Home" variants={itemVariants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>Home</motion.a>

      <motion.a href={`#Skills`} key="Skills" variants={itemVariants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>Skills</motion.a>

      <motion.a href={`#Projects`} key="Projects" variants={itemVariants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>Projects</motion.a>

      <motion.a href={`#Contact`} key="Contact" variants={itemVariants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>Contact</motion.a>
    </motion.div>
  )
}
