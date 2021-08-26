import React from 'react';
import Container from 'react-bootstrap/Container';


function About() {
    const styleAbout = {
        width: "50%"
    }
    return (
        <Container style={styleAbout}>
            <p>Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies – such as screen readers. Ensure that information denoted by the color is either obvious from the content itself (e.g. the visible text), or is included through alternative means, such as additional text hidden with the .visually-hidden class.</p>
        </Container>
    )
}

export default About
