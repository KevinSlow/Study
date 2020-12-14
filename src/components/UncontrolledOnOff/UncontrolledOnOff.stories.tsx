import React, {useState} from 'react';

import {action} from "@storybook/addon-actions";
import {UncontrolledOnOff} from "./UncontrolledOnOff";





export default {
    title: 'UncontrolledOnOff Story',
    component: UncontrolledOnOff,
}

const callback = action("on or off changed")

export const ActiveMode = () => <UncontrolledOnOff on={true} setOn={callback} />
export const NonActiveMode = () => <UncontrolledOnOff on={false} setOn={callback} />

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true);
    return <UncontrolledOnOff on={value} setOn={setValue} />
};