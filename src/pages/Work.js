import React from 'react'
import Container from 'react-bootstrap/Container';


function Work() {
    return (
        <>
            <Container className="d-flex">
                <Container className="aboutContainer">
                        <div>
                            <h4>Legal Aid Project</h4>
                            <p className="left-description">An application I designed for my final project at Flatiron School. The app uses a React front-end with a Rails API to allow individuals to find legal representation that is offered either pro bono or at low-cost. Utilizes state management through Redux and asynchronous fetch calls to the internal API.</p>
                        </div>
                </Container>
            </Container>

            {/* <Container className="d-flex">
                <Container className="aboutContainer">
                    <div className="right-description">
                        <h4>Some Other Project</h4>
                        <p>This is some other project.</p>
                    </div>
                </Container>
            </Container>

            <Container className="d-flex">
                <Container className="aboutContainer">
                        <div className="left-description">
                            <h4>Third Project</h4>
                            <p>Here's a third one</p>
                        </div>
                </Container>
            </Container> */}

            <div className="right-image">
                <a href="https://github.com/palepanorama/legal-aid-client" target="_blank"><img src="./images/img5.png" /></a>
            </div>
{/* 
            <div className="left-image">
                <img src="./images/img4.jpeg" />
            </div>

            <div class="right-image-low">
                <img src="./images/img4.jpeg" />
            </div> */}


        </>
    )
}

export default Work
