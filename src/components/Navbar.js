import React from 'react'
import { Link } from 'gatsby'
import '../styles/global.css'

export default function Navbar() {
    return (
        <nav>
            <h1>Andy Samberg</h1>
            <div>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/projects'>Projects</Link>
            </div>
        </nav>
    )
}
