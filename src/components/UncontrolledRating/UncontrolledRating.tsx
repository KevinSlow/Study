import React, {useState} from "react";
import {RaringValueType} from "../Rating/Rating";



export function UncontrolledRatingMemo(props: any) {
    console.log("UncontrolledRating")

    let [value, setValue] = useState<RaringValueType>(props.defaultValue ? props.defaultValue : 0);


    return (
        <div>
            <Star setValue={()=> {setValue(1)}} selected={value > 0} value={1}/>
            <Star setValue={()=> {setValue(2)}} selected={value > 1} value={2}/>
            <Star setValue={()=> {setValue(3)}} selected={value > 2} value={3}/>
            <Star setValue={()=> {setValue(4)}} selected={value > 3} value={4}/>
            <Star setValue={()=> {setValue(5)}} selected={value > 4} value={5}/>
        </div>
    );
}
export const UncontrolledRating = React.memo(UncontrolledRatingMemo)
type StarPropsType = {
    selected: boolean,
    setValue: (value: 1 | 2 | 3 | 4 | 5) => void,
    value: 1 | 2 | 3 | 4 | 5,
}

function Star(props: any) {
    console.log("Star Rendering");
    // return props.selected  ?
    //     <span onClick={()=>{props.setValue(false)}}><b>star </b></span> :
    //     <span>star </span>;

    return <span onClick={() => {
        props.setValue()
    }}>{props.selected ? <b>star </b> : "star "}</span>
}