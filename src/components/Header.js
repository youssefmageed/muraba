import React from 'react';
import '../styles/header.css';
import island from "../imgs/island.png";

function Header() {
    return (
        <div className="cover">
            <div className="row ">
                <div className="col-md-7 order-md-2">
                    <div className="art-area"> 
                        <img src={island} alt=""/>
                        <svg id="visual" viewBox="0 0 800 800" version="1.1"><g transform="translate(438.94998843528566 407.2479019946753)"><path d="M260 -272.9C312.1 -207.9 312.3 -103.9 309.9 -2.4C307.6 99.2 302.6 198.5 250.5 259.1C198.5 319.8 99.2 341.9 -9.3 351.2C-117.9 360.5 -235.7 357 -303.9 296.4C-372 235.7 -390.5 117.9 -388.4 2.1C-386.3 -113.6 -363.6 -227.2 -295.4 -292.2C-227.2 -357.2 -113.6 -373.6 -4.8 -368.8C103.9 -363.9 207.9 -337.9 260 -272.9" fill="#00dcff"></path></g></svg>
                    </div>
                </div>
                <div className="col-md-5 order-md-1 ">
                    <div className="text-area">
                    <h2>Muraba <br/> Pixel Art Creator</h2>
                    <h4>Fully Free - Mobile Compatible <br/> Web-Based - Open source</h4>
                    <p>Make your Own Pixel art World </p>
                    <button type="button" className="btn btn-primary"> Start NOW</button>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Header
