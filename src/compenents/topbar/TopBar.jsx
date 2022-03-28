import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom'; 
import React from 'react'
import './topbar.css'

export default function TopBar() {
    return (
        <div className='top'>
            <div className='topLeft'>
                <i className="topIcon fab fa-facebook-square"></i>
                <i className="topIcon fab fa-instagram"></i>
                <i className="topIcon fab fa-linkedin"></i>
                <i className="topIcon fas fa-paw"></i>
            </div>
            <div className='topCenter'>
              <ul className='topList'>
                <li className='topListItem'>
                  <NavLink to='/'className='link'>HOME</NavLink>
                </li>
            <li className='topListItem'><Link to='/' className='link'></Link>PRODUCTS</li>
            <li className='topListItem'><Link to='/single' className='link'></Link>BLOG</li>
            <li className='topListItem'><Link to='/' className='link'></Link>CONTACT US</li>
              </ul>
            </div>
            <div className='topRight'>
             <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}