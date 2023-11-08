import React from 'react';

const Button = (props) => {
    return <button className="slide-btn">{props.symbol}</button>
}

const Slide = () => {
    return (
        <>
            <div id="slide-div">
                <Button symbol={'<'}/>
                <Button symbol={'>'}/>
                <img src="slide1.png" alt="slide1" className="img-class"/>
            </div>
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
