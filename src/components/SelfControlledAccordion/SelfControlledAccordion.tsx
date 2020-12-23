import React, {useReducer} from "react";
import {reducer, TOGGLE_COLLAPSED} from "./reducer";

type AccordionPropsType = {
    titleValue: string,
}



export function SelfControlledAccordion(props: AccordionPropsType) {
    console.log("Accordion Rendering");

    // let [collapsed,setCollapsed] = useState(false);
    let [state, dispatch] = useReducer(reducer, {collapsed: true});

    return (
        <div>
            {/*<AccordionTitle onClick={()=> (setCollapsed(!collapsed))}  title={props.titleValue}/>*/}
            <AccordionTitle onClick={() => (dispatch({type: TOGGLE_COLLAPSED}))} title={props.titleValue}/>
            {!state.collapsed && <AccordionBody/>}
        </div>
    );
}


type AccordionTitlePropsType = {
    title: string,
    onClick: () => void
}


function AccordionTitle(props: AccordionTitlePropsType) {
    debugger
    console.log("AccordionTitle Rendering");
    return (
        <h3 onClick={() => {
            props.onClick()
        }}>{props.title}</h3>
    );
}


function AccordionBody(props: any) {
    debugger
    console.log("AccordionBody Rendering");
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
    </ul>
}


