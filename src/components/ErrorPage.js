import React from 'react'
import Container from 'react-bootstrap/Container';


function ErrorPage() {
    return (
        <> 
            <Container>
                <Container className="aboutContainer">
                    <div className="text-center">
                        <h2>Error!</h2>
                        <p>Sorry, it doesn't seem like that route is working. Try again!</p>
                    </div>
                </Container>
            </Container>
        </>
    )
}

export default ErrorPage
