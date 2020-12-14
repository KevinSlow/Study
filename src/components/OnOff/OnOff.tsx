import React, {useState} from "react";
import s from './OnOff.module.css'


type OnOffPropsType = {
    on?: boolean
    onChange: (on: boolean) => void
}



export function OnOff(props:OnOffPropsType) {
    console.log("UncontrolledOnOff Rendering")

    let [on, setOn] = useState(props.on ? props.on : false);
    console.log("On:" + on)
    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        background: on ? "green" : "white",
    };
    const offStyle= {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "2px",
        padding: "2px",
        background: on ? "white" : "red",
    };
    const indicatorStyle = {
        width: "30px",
        height: "30px",
        borderRadius: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        background: on ? "green" : "red",
    };


    const onClicked = () => {
        setOn(true)
        props.onChange(true)
    }
    const offClicked = () => {
        setOn(false)
        props.onChange(false)
    }


    return (
        <div>
            {/*{<On/>&&<Off/>}*/}

            <div style={onStyle} onClick={onClicked}>on</div>
            <div style={offStyle} onClick={offClicked}>off</div>
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

