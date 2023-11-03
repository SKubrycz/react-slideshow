import React from 'react';


const Button = (props) => {
    return <button>{props.symbol}</button>
}

const Slide = () => {
    return (
        <>
            <div>Slide</div>
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