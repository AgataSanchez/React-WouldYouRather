import React from 'react'
import {NavLink} from 'react-router-dom'

export default function Nav(){
    return(
        <nav className='topnavBar'>
            <NavLink to='/' exact activeClassName='active' className='link'> Home </NavLink>
            <NavLink to='/new' activeClassName='active' className='link'> New Question </NavLink>
            <NavLink to='/leader' activeClassName='active' className='link'> Leader Board </NavLink>
        </nav>
    )
}