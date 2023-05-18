import React , {useState} from 'react';
import '../styles/Editor.css';
import { ChromePicker } from 'react-color';
import Panel from './Panel';
import logo from "../imgs/logo.png"

function Editor() {
    const [width, setwidth] = useState(32);
    const [height, setheight] = useState(32);
    const [hideColor, sethideColor] = useState(false);
    const [buttonText, setbuttonText] = useState("Start");
    const [Color, setColor] = useState("#0AD2E4");
    const [Tool, setTool] = useState(false);

    const colorStyle = {
        background: '#262730',
        display: 'none'
      }

    function pickingColor(){
        setTool(!Tool)
    }

    function initializPanel() {
        sethideColor(!hideColor);

        buttonText === "Start" 
            ? setbuttonText("Reset")
            : setbuttonText("Start")
    }
    function handleChange(newColor){
        setColor(newColor.hex);
    }
    
    return (
        <div className="container-md">                
            <div className="title-bar">
                <a className="navbar-brand">
                    <img src={logo} width="50" height="30" alt=""></img>
                </a>
                <p>Pixel Editor</p>  
            </div> 
        <div id="editor"> 
            <div className="row">
            <div className="options">
                <p>Grid Size</p>
                <div className="option">
                    <input type="number" className="grid-size" defaultValue={width} onChange={(e) => {setwidth(e.target.value);}}/>
                    <span>Width</span>
                </div>
                <div className="option">
                    <input type="number" className="grid-size" defaultValue={height} onChange={(e) => {setheight(e.target.value);}}/>
                    <span>Height</span>
                </div>
                <div className="option">
                    <button onClick={initializPanel} className="color-select-btn" style={{backgroundColor : Color}}><i className="bi bi-brush"></i></button>
                    <span>Color</span>
                </div>
                <div className="option">
                    <button onClick={pickingColor} className="color-pickup-btn"><i className="bi bi-eyedropper"></i></button>
                    <span>Eyedropper</span>
                </div>
            </div>
            { hideColor &&
            <ChromePicker
                color={Color} 
                onChange={handleChange}
                disableAlpha={true}
                style={colorStyle}
                />
            }
            <Panel
                height={height}
                width={width}
                color={Color}
                setColor={setColor}
                Tool={Tool}
                setTool={setTool}
                />
        </div>
        </div>
        </div> 
    )
}

export default Editor
