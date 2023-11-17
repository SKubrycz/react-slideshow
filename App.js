import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const Slide = () => {
    const [counter, setCounter] = useState(1);
    const reduceCounter = () => setCounter(c => Math.max(c - 1, 1));
    const increaseCounter = () => setCounter(c => Math.min(c + 1, 5));

    return (
        <>
            <img src={`slide${counter}.png`} alt={`slide${counter}`} className="img-class"/>
            <button className="prev" onClick={reduceCounter}>{'<'}</button>
            <button className="next" onClick={increaseCounter}>{'>'}</button>
            <div>Counter: {`\n${counter}`}</div>
        </>
    )
}

const App = () => {
    useEffect(() => {
        document.title = 'Slideshow';
    }, []);

    return (
        <>
            <header>Slideshow</header>
            <article id='slideshow'>
                <Slide/>
            </article>
        </>
    )
}
export default App;
