import React from 'react';
import Container from 'react-bootstrap/Container';

function Home() {
    return (
        <Container className="parentContainer">
            <Container className="imgContainer">
                <a href="/work"><img src="./images/img2.png" alt="" /></a>
            </Container>

            <Container className="imgContainer">
                <a href="/about"><img src="./images/img1.png" alt="" /></a>
            </Container>

            <Container className="imgContainer">
                <a href="/contact"><img src="./images/img3.png" alt="" /></a>
            </Container>
        </Container>
    )
}

export default Home
