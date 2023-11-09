import React from 'react';
import { useState } from 'react';

const Button = (props) => {
    return <button className={props.name}>{props.symbol}</button>
}

const Slide = () => {
    return (
        <>
            <img src="slide1.png" alt="slide1" className="img-class"/>
            <Button name={'prev'} symbol={'<'}/>
            <Button name={'next'} symbol={'>'}/>
        </>
    )
}

const App = () => {
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
