import React from 'react'
import {NavLink} from 'react-router-dom'


export default function Nav(props){
    const {authedUser,users}=props
    let user=undefined
   

    if(users.length>0){
        user= users.filter((u)=>u.id===authedUser)
    }
    /*function isLogin(match, location) {
        if (!match) {
            return false;
        }if(authedUser===null)
            return false

        const eventID = parseInt(match.params.eventID);
        return !isNaN(eventID) && eventID % 2 === 1;
    }*/
    return(
        
        <nav className='topnavBar'>
            <NavLink to={authedUser!==null ? '/home' : '/'} /*isActive={isLogin}*/ className='link'> Home </NavLink>
            <NavLink to={authedUser!==null ? '/new' : '/'} /*isActive={isLogin}*/ className='link'> New Question </NavLink>
            <NavLink to={authedUser!==null ? '/leader' : '/'} /*isActive={isLogin}*/ className='link'> Leader Board </NavLink>
            {authedUser!==null && user.length>0 ?(
            <div className='topLogout'> 
                Hello, {user[0].name}
                <div className='imgLogout'><img src={user[0].avatarURL} alt='' width="30" height="30"/></div>
                <NavLink to='/' exact className='link'>Logout</NavLink>
            </div>
            ): null
            }
        </nav>
    )
}