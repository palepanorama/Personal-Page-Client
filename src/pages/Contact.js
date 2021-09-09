import React from 'react'
import Container from 'react-bootstrap/Container';


function Contact() {
    return (
        <>
        <Container className="parentContainer">
            <Container className="imgContainer">
                <a href="https://github.com/palepanorama" target="_blank"><img src="./images/img7.png"></img></a>
            </Container>        

            <Container className="imgContainer">
                <a href="https://www.linkedin.com/in/matt-thomas-57b153207/" target="_blank"><img src="./images/img8.png"></img></a>
            </Container> 
    
           <Container className="imgContainer">
                <a href="mailto: matthew.keith.thomas@gmail.com"><img src="./images/img9.png"></img></a>
            </Container>
        </Container>
        </>
    )
}

export default Contact
