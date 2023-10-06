import { useState, useEffect } from 'react';
import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import {Col} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {ArrowRightCircle} from 'react-bootstrap';
import headerImg from "../assets/img/header-img.svg"

const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setisDeleting] = useState(false)
    const toRotate = [" a web developer", "a web designer", "an Hardware Engineer"];
    const [text, setText] = useState('');
    const [index, setIndex] = useState(1);
    const [delta, setDelta] = useState(300 - Math.random() * 100)
    const period = 2000;


    useEffect(() => {
        let ticker = setInterval(()=> {
            tick();

        }, delta)

        return() => {clearInterval(ticker)}
    }, [text]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length -1 ) : fullText.substring(0, text.length + 1)


        setText(updatedText);

        if(isDeleting){
            setDelta(prevDelta => prevDelta/2)
        }

        if(!isDeleting && updatedText === fullText) {
            setisDeleting(true);
            setIndex(prevIndex => prevIndex -1)
            setDelta(period);

        } else if(isDeleting && updatedText === ''){
            setisDeleting(false);
            setLoopNum(loopNum +1);
            setIndex(-1)
            setDelta(500)
        } else {
            setIndex(prevIndex => prevIndex +1)
        }


    }
    return(
    <section className='banner' id='home'>
        <Container>
            <Row className="align-items-center">
                <Col xs={12} md={6} xl={7}>
                    <span className='tagline'>My portfolio</span>
                    <h1>{'I am Habeeb Waliyu,  '}<span className='wrap'>{text}</span></h1>
                    <p>I'm a web developer. I develop various kind of websites such as  <br />
                    Blog,E-commerce,Portfolios etc. My stacks are Node js, django, python,
                     javascript, reactJs, tailwind css and boostrap, CSS and HTML</p>
                    <button onClick={() => console.log('connect')}>Let's connect </button>

                </Col>
                <Col xs={12} md={6} xl={7}>
                    <img src={headerImg} alt="Header img" />
                
                </Col>

            </Row>
            
        </Container>
    </section>
   
  )
}

export default Banner
