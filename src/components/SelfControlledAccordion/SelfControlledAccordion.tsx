import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string,
}


export function SelfControlledAccordion(props: AccordionPropsType) {
    console.log("Accordion Rendering");

    let [collapsed,setCollapsed] = useState(false);

        return (
            <div>
                <AccordionTitle onClick={()=> (setCollapsed(!collapsed))}  title={props.titleValue}/>
                {collapsed === true && <AccordionBody/>}
            </div>
        );
}

//
// function Accordion2(props: AccordionPropsType) {
//     console.log("Accordion Rendering");
//     if(props.collapsed === true){
//         return (
//             <div>
//
//                 <AccordionTitle title={props.titleValue}/>
//                 <AccordionBody/>
//             </div>
//         );
//     }
//         return (
//             <div>
//                 <AccordionTitle title={props.titleValue}/>
//             </div>
//         );
//
//
// }

type AccordionTitlePropsType = {
    title: string,
    onClick: ()=>void
}


function AccordionTitle(props: AccordionTitlePropsType) {
    debugger
    console.log("AccordionTitle Rendering");
    return (
        <h3 onClick={()=> { props.onClick() }}>{props.title}</h3>
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


