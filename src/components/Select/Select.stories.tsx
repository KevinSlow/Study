import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Select} from "./Select"


export default {
    title: 'MySelect Story',
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
}, {title: "Artem", value: 3}]} onChange={onChangeCallback} value={1}/>;

export const ModeChanging = () => {
    const arrayItems = [
        {title: "Alex", value: '1'},
        {title: "Andrew", value: '2'},
        {title: "Valera", value: '3'},
        {title: "LOL", value: '4'},
        {title: "LOL", value: '5'},
        {title: "LOL", value: '6'},]

    let [parentValue, setParentValue] = useState<number | undefined>(undefined)
    const onChangeHandler = (i:any) => {
        setParentValue(i)
    }
    return (
        <div>
            <Select value={parentValue} items={[{title: "Dimich", value: 1}, {
                title: "Sergey",
                value: 2
            }, {title: "Artem", value: 3}]}
                    onChange={onChangeHandler}/>
        </div>
    )
};


