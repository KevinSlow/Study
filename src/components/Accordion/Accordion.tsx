import React, {useState} from "react";

type ItemType = {
    title: string,
    value: any
}

type AccordionPropsType = {
    titleValue: string,
    collapsed: boolean,
    onClick: (collapsed: boolean) => void
    items: ItemType[]
    onChange: (value: any) => void
}


export function Accordion(props: AccordionPropsType) {



    console.log("Accordion Rendering");
    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={()=> (props.onClick(!props.collapsed))}/>
            {props.collapsed === true && <AccordionBody items={props.items} onChange={props.onChange}/>}
        </div>
    );
}


// function Accordion2(props: AccordionPropsType) {
//     console.log("Accordion Rendering");
//     return props.collapsed ? (
//         <div>
//             <AccordionTitle title={props.titleValue}/>
//             <AccordionBody/>
//         </div>
//     ) : (
//         <div>
//             <AccordionTitle title={props.titleValue}/>
//         </div>
//     );
// }

type AccordionTitlePropsType = {
    title: string,
    onClick: () => void,
}
type AccordionBodyPropsType = {
    titleValue: string,
    collapsed: boolean,
    onClick: (collapsed: boolean) => void
    items: ItemType[]
    onChange: (value: any) => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    debugger
    console.log("AccordionTitle Rendering");
    return (
        <h3 onClick={(e)=> { props.onClick() }}>{props.title}</h3>
    );
}


function AccordionBody(props: AccordionBodyPropsType) {
    console.log("AccordionBody Rendering");
    return (<ul>
        {props.items.map((item, id) => (
            <li onClick={()=> props.onChange(item.value)} key={id}>{item.title}</li>
        ))}
    </ul>)
}


