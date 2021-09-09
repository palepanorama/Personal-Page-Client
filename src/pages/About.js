import React from 'react';
import Container from 'react-bootstrap/Container';

function About() {
    return (
        <>
            <Container className="d-flex">
                <Container className="aboutContainer">
                        <div>
                            <h4 className="text-left">Who I Am</h4>
                            <p className="left-description">I am a twenty-eight year old aspiring developer living in Alabama with experience and competency in multiple languages including JavaScript, Ruby, HTML5, CSS3 along with frameworks and libraries such as ReactJS, Redux, Ruby on Rails and Bootstrap. Since completing Flatiron School's Software Engineering program in June, I have entered into a job search which has been both challenging and edifying. </p>
                        </div>
                </Container>

            </Container>

            <Container className="d-flex">
                <Container className="aboutContainer">
                    <div className="right-description">
                        <h4 className="text-center">How I Fit In</h4>
                        <p>I am in search of employment that will challenge me to constantly improve. I recognize my limitations and am cognizant of the fact that I still have much to learn. I work well with others and would prefer to work in a team environment while also comfortable working primarily alone. I am open to relocation or remote work, contract or regular employment. Please do not hesitate to <a href="/contact">contact me</a> if you have any further questions or comments!</p>
                    </div>
                </Container>
            </Container>


            <div class="right-image">
                <img src="./images/img4.jpeg" />
            </div>

            <div>
                <img className="left-image" src="./images/img6.jpg" />
            </div> 
        </>
    )
}

export default About
