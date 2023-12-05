import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const Navbar = () => {
    const [font, setStyle] = useState('italic');
    const changeStyle = () => {
        if (font === 'italic') {
            setStyle('normal');
        } else {
            setStyle('italic')
        }
    }

    return (
        <>
            <nav className="navbar">
            <header onClick={changeStyle} style={{fontStyle: `${font}`}}>Slideshow</header>
            </nav>
        </>
    )
}

const Slide = () => {
    const [counter, setCounter] = useState(1);
    const reduceCounter = () => setCounter(c => Math.max(c - 1, 1));
    const increaseCounter = () => setCounter(c => Math.min(c + 1, 5));

    let text = '';
    let prevgradient = '';
    let nextgradient = '';

    switch(counter) {
        case 1:
            text = `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`;
            prevgradient = `linear-gradient(90deg, rgba(15,31,102,0.8) 0%, rgba(0,0,0,0) 100%);`;
            nextgradient = `linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(15,31,102,0.8) 100%);`;
            break;
        case 2:
            text = `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.`;
            prevgradient = `linear-gradient(90deg, rgba(103,27,196, 0.8) 0%, rgba(0,0,0,0) 100%);`;
            nextgradient = `linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(103,27,196, 0.8) 100%);`;
            break;
        case 3:
            text = `Contrary to popular belief, Lorem Ipsum is not simply random text.`;
            prevgradient = `linear-gradient(90deg, rgba(82, 3, 72,0.8) 0%, rgba(0,0,0,0) 100%);`;
            nextgradient = `linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(82, 3, 72,0.8) 100%);`;
            break;
        case 4:
            text = `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`;
            prevgradient = `linear-gradient(90deg, rgba(2, 50, 64,0.8) 0%, rgba(0,0,0,0) 100%);`;
            nextgradient = `linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(2, 50, 64,0.8) 100%);`;
            break;
        case 5:
            text = `The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`;
            prevgradient = `linear-gradient(90deg, rgba(0, 77, 48,0.8) 0%, rgba(0,0,0,0) 100%);`;
            nextgradient = `linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0, 77, 48,0.8) 100%);`;
            break;
        default:
            text = '';
    }

    /* const [color, changeColor] = useState(1);
    const setId = () => changeColor(); */

    let setId = (dots) => {
        {dots.map((dot) => {dot.id})}
    }

    const dots = [
        { title: '• ', id: 1 },
        { title: '• ', id: 2 },
        { title: '• ', id: 3 },
        { title: '• ', id: 4 },
        { title: '•', id: 5 }
      ];

    const highlightDot = dots.map(dot =>
        <div
            key={dot.id}
            style={{
                color: (dot.id === counter) ? 'black' : '#d9e6fc'
            }}
            onClick={() => setId(dot.id)}
        >
            {dot.title}
        </div>
    
    );
    return (
        <>
            <img src={`slide${counter}.png`} alt={`slide${counter}`} className="img-class"/>
            <button className="prev" style={{
                background: {prevgradient}}
                } onClick={reduceCounter}>{'<'}</button>
            <button className="next" style={{
                background: {nextgradient}}
                } onClick={increaseCounter}>{'>'}</button>
            <div className="dots">
                {highlightDot}
            </div>
            <div>Counter: {`\n${counter}`}</div>
            <pre>
                <div className="desc">{`slide no.${counter} desc: \n\n`}{text}</div>
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
