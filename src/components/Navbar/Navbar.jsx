import Sidebar from "../Sidebar/Sidebar";
import "./Navbar.scss";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <div className='navbar'>

      <Sidebar />

      <div className="wrapper">
        <motion.span

          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}>

          Vivek Devkar</motion.span>

        <motion.div className="social" initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}>
          <a href="https://www.linkedin.com/in/vivekdevkar123/" target="__blank"><motion.img src="/linkedin.png" alt="" whileHover={{ scale: 1.5 }} /></a>
          <a href="https://github.com/vivekdevkar123" target="__blank"><motion.img src="/github.png" alt="" whileHover={{ scale: 1.5 }} /></a>
          <a href="https://leetcode.com/vivekdevkar123/" target="__blank"><motion.img src="/leetcode.png" alt="" whileHover={{ scale: 1.5 }} /></a>
          <a href="mailto:vivekmdevkar@gmail.com" target="__blank"><motion.img src="/email.png" alt="" whileHover={{ scale: 1.5 }} /></a>
        </motion.div>
      </div>
    </div>
  )
}
