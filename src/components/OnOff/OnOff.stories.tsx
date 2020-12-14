import React, {useState} from 'react';
import {OnOff} from "./OnOff";
import {action} from "@storybook/addon-actions";




export default {
    title: 'OnOff Story',
    component: OnOff,
}

const callback = action("on or off changed")

export const OnMode = () => <OnOff onChange={callback} on={true} />;
export const OffMode = () => <OnOff onChange={callback} on={false} />;
export const BugMode = () => {
    //Unsync when change defaultValue when already rendered
    return <OnOff onChange={callback} on={false}/>
};

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true);
    return <OnOff on={value} onChange={setValue} />
};