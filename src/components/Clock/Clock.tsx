import React, {useEffect, useState} from "react";
import {DigitalClockView} from "./DigitalClockView";
import {AnalogClockView} from "./AnalogClockView";

type PropsType = {
    mode?: "digital" | "analog"
}



export const Clock: React.FC<PropsType> = (props) => {

    const [date, setDate] = useState(new Date())
    const [switchState,setSwitch] = useState<boolean>(false)
    useEffect(() => {
        const intervalID =  setInterval(() => {
            setDate(new Date())
        },1000)

        return () => {
            clearInterval(intervalID)
        }
    },[])
    const buttonHandler = () => {
        setSwitch(current => !current)
    }

    let view;

    switch (props.mode) {
        case "analog":
            view = <AnalogClockView date={date}/>
            break;
        case "digital":
        default: {
          view =  <DigitalClockView date={date}/>
        }
    }

    return <div>

        {view}

        {/*<button onClick={buttonHandler}>Switch</button>*/}
        {/*{*/}
        {/*    switchState ?*/}
        {/*        <Backdrop>*/}
        {/*            <OuterClock>*/}
        {/*                <SecondHand />*/}
        {/*                <MinuteHand />*/}
        {/*                <HourHand />*/}
        {/*            </OuterClock>*/}
        {/*        </Backdrop> : <>*/}
        {/*            <span>{get2digitString(date.getHours())}</span>*/}
        {/*            :*/}
        {/*            <span>{get2digitString(date.getMinutes())}</span>*/}
        {/*            :*/}
        {/*            <span>{get2digitString(date.getSeconds())}</span>*/}
        {/*        </>*/}

        {/*}*/}
    </div>
}

export type ClockViewType = {
    date: Date
}

