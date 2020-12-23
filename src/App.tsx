import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {RaringValueType, Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {SelfControlledAccordion} from './components/SelfControlledAccordion/SelfControlledAccordion';
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";

function App(): any {
    let [ratingValue, setRatingValue] = useState<RaringValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [on, setOn] = useState<boolean>(false);
    //  полезное
    // JSX возвращаем
    console.log("App Rendering")

    const arr = [
        {title: "One", value: 123123},
        {title: "One", value: 123123},
        {title: "One", value: 123123},
        {title: "One", value: 123123},
    ]
    return (
        <div className={"App"}>
            <PageTitle title={"This is App component"}/>
            <PageTitle title={"My Friends"}/>
            Article 1
            {/*<UncontrolledOnOff on={on} setOn={setOn}/>*/}
            <OnOff onChange={setOn}/> {on.toString()}

            {/*<Accordion collapsed={false} titleValue={"Menu"}/>*/}
            <SelfControlledAccordion titleValue={"Users123"}/>




            <UncontrolledRating/>
            <Accordion titleValue={"Menu11"}  items={arr} collapsed={accordionCollapsed} onChange={()=> {setAccordionCollapsed(!accordionCollapsed)}} onClick={setAccordionCollapsed}/>

            {/*<Rating value={0}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}

            <Rating onClick={setRatingValue} value={ratingValue}/>
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}

        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log("PageTitle Rendering")
    return <h1>{props.title}</h1>
}


function sum(a: number, b: number) { // потому что с маленькой буквы название
    debugger;
    alert(a + b)
}

// sum(23,12);
// sum(223,1122);

export default App;
