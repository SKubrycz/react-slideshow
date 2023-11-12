import React from 'react';
import { useState } from 'react';

const Button = (props) => {
    return <button className={props.name}>{props.symbol}</button>
}

const Slide = () => {
    const [count, setCount] = useState(0);
    const reduceCount = () => setCount(count => count - 1);
    const increaseCount = () => setCount(count => count + 1);

    return (
        <>
            <img src="slide1.png" alt="slide1" className="img-class"/>
            <Button name={'prev'} symbol={'<'} onClick={() => reduceCount}/>
            <Button name={'next'} symbol={'>'} onClick={() => increaseCount}/>
            <p>Count: {count}</p>
        </>
    )
}

const App = () => {
    const [count, setCount] = useState(0);
    const reduceCount = () => setCount(count => count - 1);
    const increaseCount = () => setCount(count => count + 1);

    return (
        <>
            <header>Slideshow</header>
            <article id='slideshow'>
                <Slide/>
                <button onClick={() => reduceCount}>decrease</button>
                <button onClick={() => increaseCount}>increase</button>
                <p>count {count}</p>
            </article>
        </>
    )
}

export default App;
