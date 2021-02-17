import {Clock} from "./Clock";
import React from "react";

export default {
    title: "Clock",
    component: Clock
}


export const BaseExample = () => {
    return <Clock mode={"analog"}/>
};


export const BaseDigital = () => {
    return <Clock mode={"digital"}/>
};