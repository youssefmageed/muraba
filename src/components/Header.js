import React, { useEffect } from 'react';
import '../styles/header.css';
import island from "../imgs/island.png";
import KUTE from "kute.js"



function Header() {
    useEffect(()=>{
        const tween =  KUTE.fromTo(
            '#blob1',
            { path: '#blob1' },
            { path : '#blob2' },
            {repeat: 999, duration : 3000 , yoyo: true}
        )
        tween.start()
    }, )
    return (
        <div className="cover">
            <div className="row ">
                <div className="col-md-7 order-md-2">
                    <div className="art-area">
                        <img src={island} alt="" />
                        <svg id="visual"
                         viewBox="0 0 800 800"
                          version="1.1">
                            <g transform="translate(438.94998843528566 407.2479019946753)"><path id="blob1" d="M260 -272.9C312.1 -207.9 312.3 -103.9 309.9 -2.4C307.6 99.2 302.6 198.5 250.5 259.1C198.5 319.8 99.2 341.9 -9.3 351.2C-117.9 360.5 -235.7 357 -303.9 296.4C-372 235.7 -390.5 117.9 -388.4 2.1C-386.3 -113.6 -363.6 -227.2 -295.4 -292.2C-227.2 -357.2 -113.6 -373.6 -4.8 -368.8C103.9 -363.9 207.9 -337.9 260 -272.9" fill="#00dcff"></path></g>
                            <g transform="translate(479.8986814304336 413.2751703983217)"style={{visibility: "hidden"}} ><path id="blob2" d="M156 -283.4C202.1 -243.7 239.2 -201.6 264.7 -154C290.2 -106.3 304.1 -53.2 308.9 2.7C313.6 58.7 309.2 117.3 283.6 164.8C258.1 212.3 211.3 248.6 160.5 282.6C109.7 316.6 54.8 348.3 2.4 344.1C-50 339.9 -100 299.9 -151.1 266C-202.2 232.2 -254.4 204.6 -296 161.3C-337.7 118 -368.9 59 -370.3 -0.8C-371.7 -60.7 -343.5 -121.3 -309.2 -177.5C-275 -233.6 -234.7 -285.3 -182.2 -321.3C-129.7 -357.3 -64.8 -377.6 -4.9 -369.1C55 -360.6 110 -323.2 156 -283.4" fill="#00ddff"></path></g>
                            </svg>
                    </div>
                </div>
                <div className="col-md-5 order-md-1 ">
                    <div className="text-area">
                        <h2>Muraba <br /> Pixel Art Creator</h2>
                        <h4>Fully Free - Mobile Compatible <br /> Web-Based - Open source</h4>
                        <p>Make your Own Pixel art World </p>
                        <a href='#editor' className="btn btn-primary start-btn">Start NOW</a>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Header
