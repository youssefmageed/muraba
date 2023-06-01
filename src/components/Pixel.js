import React, {useState} from 'react'
import '../styles/Pixel.css';

function Pixel (props) {
    const [pixelColor, setPixelColor] = useState('');
    const [intColor, setIntColor] = useState(pixelColor);
    const [changeable, setChangeable] = useState(true);

    function initTool(){
        props.setTool(!props.Tool)
    }

    function applyColor(){
        if(props.Tool === true){
            props.setColor(intColor)
            initTool()
        }
        else{
            setPixelColor(props.color)
            setChangeable(false)
        }
    }
    function changeColor(){
        setIntColor(pixelColor);
        setPixelColor(props.color)
    }
    function restColor(){
        if(changeable){ setPixelColor(intColor)}
        setChangeable(true)
    }
    
    return (
        <div className="pixel" onClick={applyColor} onMouseEnter={changeColor} onMouseLeave={restColor} style={{backgroundColor : pixelColor}}>
            
        </div>
    )
}
export default Pixel 
