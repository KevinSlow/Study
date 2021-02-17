import React from "react";
import {ClockViewType} from "./Clock";
const get2digitString = (number: number) => {
    return number < 10 ? "0" + number : number
}
export const DigitalClockView: React.FC<ClockViewType> = ({date}) => {
    return <>
        <span>{get2digitString(date.getHours())}</span>
        :
        <span>{get2digitString(date.getMinutes())}</span>
        :
        <span>{get2digitString(date.getSeconds())}</span>
    </>
}