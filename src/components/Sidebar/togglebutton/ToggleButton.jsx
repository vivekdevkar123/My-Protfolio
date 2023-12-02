import React from 'react'
import {motion} from "framer-motion";

export default function ToggleButton({setopen}) {
  return (
    <button onClick={() => setopen((prev) => !prev)}>
      <svg width="23" height="23" viewBox="0 0 23 23">
      <motion.path 
        strokeWidth="3"
        stroke="black"
        strokeLinecap="round"
        d="M4 18L20 18"
        variants={{
          closed:{d:"M 2 2.5 L 20 2.5"},
          open:{d:"M 3 16.5 L 17 2.5"}
        }}
      />


      <motion.path 
      strokeWidth="3"
      stroke="black"
      strokeLinecap="round"
      d="M4 6L20 6"
      variants={{
        closed:{d:"M 2 16.346 L 20 16.346"},
        open:{d:"M 3 2.5 L 17 16.346"}
      }}
      />

      </svg>
    </button>
  )
}
