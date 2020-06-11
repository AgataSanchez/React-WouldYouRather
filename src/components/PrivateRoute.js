import React from 'react'
import {Route, Redirect} from 'react-router'
import {connect} from 'react-redux'

const PrivateRoute=({component: Component, authedUser, ...rest})=>{
      return(
      
        <Route {...rest} 
        render={props=>
            authedUser!==null 
            ? (<Component {...props}/>)
            : (<Redirect to={{
                pathname: '/login',
                state:{from: props.location},
            }
            }/>)
    }/>)
}

const mapStateToProps = ({authedUser})=>({
    
    authedUser,
  
})

export default connect(mapStateToProps)(PrivateRoute)