import React from 'react'
import Nav from './Nav';
import Container from 'react-bootstrap/Container';



function Header() {
    const styleHead = {
        fontFamily: "Optima, sans-serif",
        color: "white",
        backgroundColor: "black"
    }

    return (
        <div style={styleHead}>
            <Nav />
            <h1 className="text-center">Matt's Super Awesome Resumé</h1>
        </div>
    )
}

export default Header
