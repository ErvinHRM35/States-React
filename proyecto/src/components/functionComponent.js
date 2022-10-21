import React from "react";
import {useState, useEffect}  from 'react';


function FunctComponent(){
    let [counter, setCounter] = useState(0)
    useEffect(()=>{
        const interval = setInterval(() => {
            setCounter(counter = counter + 1)
        }, 1000)
        return() => clearInterval(interval)
    }, [])

    return(
        <h1> functional State 4: {counter}</h1>
    )
}

function FunctComponent2 (){
    let [counter2, setCounter2] = useState(0)

    return(
        <div className="boton">
            <h1>{counter2}</h1>
            <button onClick={() => setCounter2(counter2 = counter2 + 1)}> Functional Component 2: </button>
        </div>
    )
}

export {FunctComponent, FunctComponent2};