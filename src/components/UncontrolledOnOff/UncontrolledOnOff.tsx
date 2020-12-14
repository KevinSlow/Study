import React, {useState} from "react";
import s from './UncontrolledOnOff.module.css'


type OnOffPropsType = {
    on: boolean,
    setOn: (on: boolean) => void
}



export function UncontrolledOnOff(props:OnOffPropsType) {
    console.log("UncontrolledOnOff Rendering");




    console.log("On:" + props.on)
    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        background: props.on ? "green" : "white",
    };
    const offStyle= {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "2px",
        padding: "2px",
        background: props.on ? "white" : "red",
    };
    const indicatorStyle = {
        width: "30px",
        height: "30px",
        borderRadius: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        background: props.on ? "green" : "red",
    };

    return (
        <div>
            {/*{<On/>&&<Off/>}*/}

            <div style={onStyle} onClick={()=> {props.setOn(true)}}>on</div>
            <div style={offStyle} onClick={() => {props.setOn(false)}}>off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
}
//
// function On() {
//     return(
//         <div>
//             <div className={s.on}>
//                 on
//             </div>
//             <div  style={{background: "green"}}  className={s.circle}>
//             </div>
//         </div>
//
//     );
// }
//
//
// function Off() {
//     return(
//         <div>
//             <div  className={s.off}>
//                 off
//             </div>
//             <div style={{background: "red"}} className={s.circle}>
//             </div>
//         </div>
//
//     );
// }

