import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';


function Nav() {
    const styleNav = {
        textAlign: "right",
        fontFamily: "Optima, sans-serif",
        backgroundColor: "black"
    }

    return (
        <Container style={styleNav}>
            <ul className="list-inline">
                <li className="list-inline-item"><Link to="/">Home</Link></li>
                <li className="list-inline-item"><Link to="/about">About</Link></li>
            </ul>
        </Container>
    )
}

export default Nav
