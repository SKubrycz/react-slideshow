import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const Navbar = () => {

    return (
        <>
            <nav className="navbar">
            <header>Slideshow</header>
            </nav>
        </>
    )
}

const Slide = () => {
    const [counter, setCounter] = useState(1);
    const reduceCounter = () => setCounter(c => Math.max(c - 1, 1));
    const increaseCounter = () => setCounter(c => Math.min(c + 1, 5));

    let text = '';

    switch(counter) {
        case 1:
            text = `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`;
            break;
        case 2:
            text = `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.`;
            break;
        case 3:
            text = `Contrary to popular belief, Lorem Ipsum is not simply random text.`;
            break;
        case 4:
            text = `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`;
            break;
        case 5:
            text = `The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`;
            break;
        default:
            text = '';
    }

    return (
        <>
            <img src={`slide${counter}.png`} alt={`slide${counter}`} className="img-class"/>
            <button className="prev" onClick={reduceCounter}>{'<'}</button>
            <button className="next" onClick={increaseCounter}>{'>'}</button>
            <div>Counter: {`\n${counter}`}</div>
            <pre>
                <div className="desc">{`slide${counter} desc: \n\n`}{text}</div>
            </pre>
        </>
    )
}

const CurrTime = () => {
    const [date,setDate] = useState(new Date());
    
    useEffect(() => {
        const timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });

    return (
        <>
            <pre>
                Time: {date.toLocaleTimeString()}
                {'\t'}Date: {date.toLocaleDateString()}
            </pre>
        </>
    )
}

const Footer = () => {

    

    return (
        <>
            <footer className="footer">
                Some footer content <CurrTime></CurrTime>
            </footer>
        </>
    )
}

const App = () => {
    useEffect(() => {
        document.title = 'Slideshow';
    }, []);

    return (
        <>
            <Navbar></Navbar>
            <article id='slideshow'>
                <Slide/>
            </article>
            <Footer></Footer>
        </>
    )
}
export default App;
