import React from 'react'
import Navbar from './navbar'
import '../styles/global.css'

export default function Layout({children}) {
    return (
        <div className="layout">
            <Navbar/>
            <div>
                {children}
            </div>
        </div>
    )
}
