import React, {useState} from "react";
import {RaringValueType} from "../Rating/Rating";


type RatingPropsType = {
    defaultValue?: RaringValueType,
    onChange: (value: RaringValueType) => void
}

export function UncontrolledRating(props: RatingPropsType) {
    console.log("UncontrolledRating")

    let [value, setValue] = useState<RaringValueType>(props.defaultValue ? props.defaultValue : 0);


    return (
        <div>
            <Star setValue={()=> {setValue(1); props.onChange(1)}} selected={value > 0} value={1}/>
            <Star setValue={()=> {setValue(2); props.onChange(2)}} selected={value > 1} value={2}/>
            <Star setValue={()=> {setValue(3); props.onChange(3)}} selected={value > 2} value={3}/>
            <Star setValue={()=> {setValue(4); props.onChange(4)}} selected={value > 3} value={4}/>
            <Star setValue={()=> {setValue(5); props.onChange(5)}} selected={value > 4} value={5}/>
        </div>
    );
}

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