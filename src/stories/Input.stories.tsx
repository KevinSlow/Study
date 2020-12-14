import React, {ChangeEvent, useRef, useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story, Meta} from '@storybook/react/types-6-0';
import {action} from "@storybook/addon-actions";


export default {
    title: 'Input',
}

export const UncontrolledInput = () => <input/>
export const TrackValueUncontrolledInput = () => {
    const [value, setValue] = useState("");
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const actualValue = e.currentTarget.value
        setValue(actualValue)
    }

    return <> ---- <input onChange={onChange}/> -- {value} --</>
}

export const GetValueUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);

    const save = () => {
        const el = inputRef.current as HTMLInputElement;
        setValue(el.value)
    }

    return <> ---- <input ref={inputRef} id={"id"}/>
        <button onClick={save}>Save</button>
        -- actual value: {value} --</>
}


export const ControlledInput = () => {
    debugger
    const [parentValue,setParentValue] = useState("")
const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    };
    return <input value={parentValue} onChange={onChange}/>
}

export const ControlledCheckBox = () => {
    debugger
    const [parentValue,setParentValue] = useState(true)

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    };
    return <input type="checkbox" checked={parentValue}  onChange={onChange}/>
}

export const ControlledSelect = () => {
    const [parentValue,setParentValue] = useState<string|undefined>(undefined)

    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        // setParentValue(e.currentTarget.checked)
    };
    return <select value={parentValue} onChange={onChange}>
        <option>none</option>
        <option value={"1"}>Minsk</option>
        <option value={"2"}>Moscow</option>
        <option value={"3"}>Kiev</option>
    </select>

}


export const ControlledInputWithFixedValue = () => <input value={"it-incubator.by"}/>