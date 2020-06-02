import React, {Component} from 'react'
import {connect} from 'react-redux'
import logo from '../logo.svg'
import Select from 'react-select'
import '../App.css'

class Login extends Component{
    state={
        user:''
    }
    handleSubmit(){}
    handleChange=(event)=>{
       const value=event.value
       this.setState({user:value})
    }
    render(){
        const options=[]
        this.props.users.map((u)=>options.push({value: u.id, 
            label: <div className='usersSign'><img src={u.avatarURL} alt=''width="20" height="20"/> {u.name}</div>}
        ))
        return(
            <div className='container'>
                <div>
                    Welcome to the Would You Rather App!
                    <p>Please sign in to continue</p>
                
                </div> 
                <img src={logo} className="App-logo" alt="logo" width="80" height="90"/> 
                <p>Sign in</p>
                <Select options={options} value={this.state.user} onChange={this.handleChange}/>
                <button onSubmit={this.handleSubmit}>Sign in</button>
            </div>
        )
    }
}

function mapStateToProps({users}){
    return {
        users:Object.values(users)
    }
}

export default connect(mapStateToProps)(Login)