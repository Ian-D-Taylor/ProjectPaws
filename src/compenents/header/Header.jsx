
import React from 'react'
import { Link } from 'react-router-dom'

import './header.css'


export default function Header() {
    return (
        <div className='header'>
                <Link to= "/" className="headerTitleLarge">
                    <a href="/">Project Paw Melbourne</a>
                </Link>
                {/* <span className='headerTitleSmall'>Melbourne</span> */}
        </div>
        
    )
    
}