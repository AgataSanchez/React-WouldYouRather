import React, {Component} from 'react'
import {connect} from 'react-redux'
import logo from '../logo.svg'
import Select from 'react-select'
import '../App.css'
import { handleLogin } from '../actions/shared'

class Login extends Component{
    state={
        user:null,
        error: false,
    }
    
    handleChange=(event)=>{
       const value=event.value
       this.setState({user:{value: value.id, 
        label: <div className='usersSign'><img src={value.avatarURL} alt=''width="20" height="20"/> {value.name}</div>},
        error:false})
       console.log(this.state)
    }

    handleSubmit(){
        
        if(this.state.user !==null){ 
            this.setState({error:false})
            this.props.dispatch(handleLogin(this.state.user.value))
           
        }else
            this.setState({error:true})
       
    }
    render(){
        const options=[]
        this.props.users.map((u)=>options.push({value: u, 
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
                <button value={this.state.user} onClick={e => this.handleSubmit(e, "value")}  >Sign in</button>
                {this.state.error ? alert('Failed to login. Try again') : null}
               
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