import React,{useRef} from 'react'
import '../styles/Panel.css';
import Row from './Row';
import {exportComponentAsPNG} from "react-component-export-image"

function Panel(props) {
    
    const panelRef = useRef()
    function exportcomponent(){

        exportComponentAsPNG(panelRef)
    }
    let rows = [];

     for(let i = 0; i < props.height; i++){
        rows.push(<Row key={i} width={props.width} color={props.color} setColor={props.setColor} Tool={props.Tool} setTool={props.setTool} />)
    }
    
    return (
        <div className="panel">
            <div ref={panelRef} id="drawingPanel" className="" > 
                {rows}
            </div>
            { <button onClick={exportcomponent}>export</button>}
        </div>
    )
}

export default Panel
