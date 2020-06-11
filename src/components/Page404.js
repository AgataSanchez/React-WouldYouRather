import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'


class Page404 extends Component{
    render(){
        return(
            <div>
                <div className='container'> 
                ERROR 404:  Page not found,
                    {this.props.question ? ([
                        ' the question is not exist, please go to home page =>',
                         <NavLink key='navLogin' to= '/'
                        activeStyle={{ backgroundColor: 'darkcyan', color: 'white'}} 
                        activeClassName='link'> Home </NavLink>
                    ]):([
                        ' please go to login page =>',
                        <NavLink key='navLogin' to= '/login'
                        activeStyle={{ backgroundColor: 'darkcyan', color: 'white'}} 
                        activeClassName='link'> Login </NavLink>
                    ])
                    }
               
                 </div>
            </div>
        )
    }

}

export default connect()(Page404)