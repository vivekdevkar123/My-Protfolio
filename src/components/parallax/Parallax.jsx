import React from 'react'
import "./Parallax.scss";

export default function Parallax({ type }) {
    return (
        <div className='parallax'>
            <h1>{type}</h1>
            <div className="mountains"></div>
            <div className="planets"></div>
            <div className="stars"></div>
        </div>
    )
}
