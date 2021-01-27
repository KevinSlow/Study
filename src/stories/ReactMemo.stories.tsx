import React, {useEffect, useMemo, useState} from 'react';


export default {
    title: "useState Demo"
}

function generateData() {
    //difficult counting
    console.log("Difficult")
    return 1;
}

export const Example = () => {
    console.log("Example1")
    // const initValue = useMemo(generateData,[])
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(generateData)

    useEffect(() => {
        console.log("UseEffect every render");
        document.title = counter.toString()
    })
    useEffect(() => {
        console.log("UseEffect only first render(ComponentDidMount)");
        document.title = counter.toString()
    }, [])
    useEffect(() => {
        console.log("UseEffect first render and every counter change");
        document.title = counter.toString()
    }, [counter])


    return <>
        Hello there,
        <button onClick={() => setFake(fake + 1)}>fake+</button>
        <button onClick={() => setCounter(counter + 1)}>counter+</button>
        {counter}{fake}
    </>
}
export const SetTimeoutExample = () => {
    console.log("Example1")
    // const initValue = useMemo(generateData,[])
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(generateData)

    // useEffect(() => {
    //     console.log("UseEffect every render");
    //     document.title = counter.toString()
    // })
    useEffect(() => {
        setInterval(() => {
            console.log("setTimeout")

            const seconds = new Date().getSeconds()
            setCounter(seconds  + 1);
        }, 1000)
    }, [])
    const hours = new Date().getHours()
    const minutes = new Date().getMinutes()
    return <>
        Hello counter, {hours}:{minutes}:{counter} - fake: {fake}
        {/*<button onClick={() => setFake(fake + 1)}>fake+</button>*/}
        {/*<button onClick={() => setCounter(counter + 1)}>counter+</button>*/}
        {counter}{fake}
    </>
}
