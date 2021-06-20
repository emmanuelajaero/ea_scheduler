import React from 'react'
import './css/loader.css';


function Loader(props) {
    return <>
        {props.type !== "btn" && <div className="loader-container">
            <div className={`loader-custom ${props.className || "loader-sm"}`}></div>
        </div>}

        {props.type === "btn" && <div className={"loader-custom loader-sm"}></div>}
    </>
}

export default Loader
