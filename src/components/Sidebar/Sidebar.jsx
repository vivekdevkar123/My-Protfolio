import { useState } from "react";
import "./Sidebar.scss";
import Links from "./links/Links"
import ToggleButton from "./togglebutton/ToggleButton"
import {motion} from "framer-motion";

const variants = {
    open:{
        clipPath:"circle(1200px at 50px 50px)",
        transition:{
            type:"spring",
            stiffness:400,
        }
    },
    close:{
        clipPath:"circle(30px at 50px 50px)",
        transition:{
            delay:0.5,
            type:"spring",
            stiffness:400,
            damping:40,
        }
    }
}

export default function Sidebar() {

    const [open,setopen] = useState(false);


  return (
    <motion.div className="sidebar" animate={open?"open":"close"}>
        <motion.div className="bg" variants={variants}>
            <Links/>
        </motion.div>
        <ToggleButton setopen = {setopen}/>
    </motion.div>
  )
}
