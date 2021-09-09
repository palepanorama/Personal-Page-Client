import React from 'react'
import Nav from './Nav';
import Container from 'react-bootstrap/Container'; 
import '../App.css'



function Header() {
    return (
        <div>
            <Container className="header">
                <Nav className="nav-header d-flex" />
                <h1>Matthew Keith Thomas</h1>
                <h4>Software Engineer | Web Developer</h4>
            </Container>
        </div>
    )
}

export default Header
