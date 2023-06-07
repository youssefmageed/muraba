import React from 'react'
import '../styles/Row.css';
import Pixel from './Pixel';

function Row(props) {
    let pixels = [];
    for(let i = 0; i < props.width; i++){
        pixels.push(<Pixel key={i} color={props.color} setColor={props.setColor} Tool={props.Tool} setTool={props.setTool} />)
    }
    return (
        <div className="panel-row" >
            {pixels}
        </div>
    )
}

export default Row
