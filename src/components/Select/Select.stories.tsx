import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Select} from "./Select"


export default {
    title: 'Select Story',
    component: Select,
}

const callback = action("accordion mode change event fired")
const onChangeCallback = action("some item has been clicked")

export const CollapsedMode = () => <Select value={undefined} items={[{title: "Dimich", value: 1}, {
    title: "Sergey",
    value: 2
}, {title: "Artem", value: 3}]} onChange={callback}/>;
export const UnCollapsedMode = () => <Select items={[{title: "Dimich", value: 1}, {
    title: "Sergey",
    value: 2
}, {title: "Artem", value: 3}]} onChange={onChangeCallback} value={2}/>;

export const ModeChanging = () => {
    const [parentValue, setParentValue] = useState<number | undefined>(1)
    const onChangeHandler = (i:any) => {
        setParentValue(i.value)
    }
    return (
        <div>
            <div>{parentValue}</div>
            <Select value={parentValue} items={[{title: "Dimich", value: 1}, {
                title: "Sergey",
                value: 2
            }, {title: "Artem", value: 3}]}
                    onChange={onChangeHandler}/>
        </div>
    )
};