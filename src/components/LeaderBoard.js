import React, {Component} from 'react'
import {connect} from 'react-redux'
import User from './User.js'

class LeaderBoard extends Component{

    render(){
        const {usersId}=this.props
        return(
            <div className='container'>
                {usersId.map((id, index)=>(
                    <li key={id}>
                        <User id={id} index={index}/>
                    </li>
                ))}
            </div>
        )
    }
}

function mapStateToProps({users}){
    return{
        usersId: Object.keys(users).sort((a,b)=>(users[b].questions.length + Object.keys(users[b].answers).length)-(users[a].questions.length + Object.keys(users[a].answers).length)) 
    }
}
export default connect(mapStateToProps)(LeaderBoard)