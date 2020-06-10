import React from 'react'
import {NavLink} from 'react-router-dom'
import {setAuthedUser} from '../actions/authedUser.js'

export default function Nav(props){
    const {authedUser,users,dispatch}=props
    let user=undefined
   

    if(users.length>0){
        user= users.filter((u)=>u.id===authedUser)
    }
    
    function isLogin(page, match, location) {        
        if (!match) {
            return false;
        }
        return location.pathname===page && authedUser!==null ;
    }
    function handleLogout(){
        return dispatch(setAuthedUser(null));
    }
    return(
        
        <nav className='topnavBar'>
            <div className='divnavBar'>
            <NavLink to={authedUser!==null ? '/home' : '/'}
             isActive={(match, location)=>isLogin('/home', match,location)} 
             activeStyle={{ backgroundColor: 'darkcyan', color: 'white'}} 
             activeClassName='link'> Home </NavLink>

            <NavLink to={authedUser!==null ? '/new' : '/'} 
            isActive={(match, location)=>isLogin('/new', match, location)} 
            activeStyle={{ backgroundColor: 'darkcyan', color: 'white'}} 
            activeClassName='link'> New Question </NavLink>

            <NavLink to={authedUser!==null ? '/leader' : '/'} 
            isActive={(match, location)=>isLogin('/leader', match, location)}
            activeStyle={{ backgroundColor: 'darkcyan', color: 'white'}} 
            activeClassName='link'> Leader Board </NavLink>
            
            {authedUser!==null && user.length>0 ?(
            <div className='topLogout'> 
                Hello, {user[0].name}
                <div className='imgLogout'><img src={user[0].avatarURL} alt='' width="30" height="30"/></div>
                <NavLink to='/' exact activeClassName='link' onClick={handleLogout}>Logout</NavLink>
            </div>
            ): null
            }
            </div>
        </nav>
    )
}