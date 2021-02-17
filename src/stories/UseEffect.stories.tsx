import React, {useEffect, useMemo, useState} from 'react';


export default {
    title: "useEffect Demo",
}


export const SetInvervalExample = () => {
    const [counter, setCounter] = useState(1)
    console.log("Example1")


    // useEffect(() => {
    //     console.log("UseEffect every render");
    //     document.title = counter.toString()
    // })
    useEffect(() => {
            console.log("useEffect")
        const intervalId = setInterval(() => {
            setCounter(state => state + 1)
        },1000)
            document.title = counter.toString()

        return () => {
                clearInterval(intervalId)
        }
    }, [])

    return <>
        Hello {counter}
        <button onClick={() => setCounter((counter + 1))}>+</button>
    </>
}


export const ResetEffectExample = () => {
    const [counter, setCounter] = useState(1)
    console.log("Example1")

    console.log("Component rendered: " + counter)
    // useEffect(() => {
    //     console.log("UseEffect every render");
    //     document.title = counter.toString()
    // })
    useEffect(() => {
        console.log("useEffect Occurred: " + counter)

        return () => {
            console.log("RESET EFFECT: " + counter)
        }
    }, [counter])

    const Increase = () => {
        setCounter((counter + 1))
    };
    return <>
        Hello {counter}
        <button onClick={Increase}>+</button>
    </>
}

export const KeysTrackerExample = () => {
    const [text, setText] = useState("")

    console.log("Component rendered: " + text)
    // useEffect(() => {
    //     console.log("UseEffect every render");
    //     document.title = counter.toString()
    // })
    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            console.log(e.key)
            setText(state =>  {
                return state + e.key
            })
        };
        window.addEventListener("keypress", handler)
        return () => {
            window.removeEventListener("keypress",handler )
        }
    }, [text])


    return <>
        Typed text: {text}
    </>
}

export const SettTimeOutExample = () => {
    const [text, setText] = useState("")

    console.log("Component rendered: " + text)
    // useEffect(() => {
    //     console.log("UseEffect every render");
    //     document.title = counter.toString()
    // })
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            console.log("TIMEOUT EXPIRED")
            setText("3 seconds passed")
        },3000)
        return () => {
            clearTimeout(timeoutId)
        }
    }, [text])


    return <>
        Typed text: {text}
    </>
}