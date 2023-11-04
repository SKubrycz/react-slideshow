import React from 'react';


const Button = (props) => {
    return <button class="slide-btn">{props.symbol}</button>
}

const Slide = () => {
    return (
        <>
            <div id="slide-div">Slide</div>
        </>
    )
}

const App = () => {
    return (
        <>
            <header>Slideshow</header>
            <article id='slideshow'>
                <Button symbol={'<'}/>
                <Slide/>
                <Button symbol={'>'}/>
            </article>
        </>
    )
}

export default App;
