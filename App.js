import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';


/* const Button = (props) => {
    return <button className={props.name}>{props.symbol}</button>
} */

const Slide = () => {
    const [counter, setCounter] = useState(0);
    const reduceCounter = () => setCounter(counter => counter - 1);
    const increaseCounter = () => setCounter(counter => counter + 1);

    return (
        <>
            <img src="slide1.png" alt="slide1" className="img-class"/>
            <button className="prev" onClick={reduceCounter}>{'<'}</button>
            <button className="next" onClick={increaseCounter}>{'>'}</button>
            <p>Counter: {counter}</p>
        </>
    )
}

const App = () => {
    useEffect(() => {
        document.title = 'Slideshow';
      }, []);
    
    /* const [count, setCount] = useState(0);
    const reduceCount = () => setCount(count => count - 1);
    const increaseCount = () => setCount(count => count + 1); */

    return (
        <>
            <header>Slideshow</header>
            <article id='slideshow'>
                <Slide/>
                {/* <button onClick={reduceCount}>decrease</button>
                <button onClick={increaseCount}>increase</button>
                <p>count {count}</p> */}
            </article>
        </>
    )
}
export default App;
