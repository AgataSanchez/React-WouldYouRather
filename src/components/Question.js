import React, {Component} from 'react'
import {connect} from 'react-redux'
import {formatQuestion} from '../utils/helpers.js'
import {Redirect} from 'react-router-dom'

class Question extends Component{

    state={
        toQuestion:false,
        path:'',
    }
    viewPoll = (e, question)=>{
        const path='/questions/'+question.id
        this.setState({toQuestion:true, path:path})
        this.props.history.push('/')
    }
    render(){
        
        if(this.state.toQuestion){
            return <Redirect to={{pathname:this.state.path, state:{id:this.props.question.id}}}/>
        }
        return(
            <div className='question'>
                <div className='pQuestion'>
                    <p className='asks'>{this.props.question.name} asks:</p>
                </div>
                <div className='grid-container'>
                    <div className='item1'>
                        <img src={this.props.question.avatarURL} alt='' width='150' height='150'/>
                    </div>
                    <div className='item2'>
                        <p>Would you rather</p>
                        <div className='contentQ'>{this.props.question.optionOne}</div>
                        <button className='buttonPoll' onClick={(e)=>this.viewPoll(e,this.props.question)}>View Poll</button>
                    </div>
                </div>

            </div>
        )
    }
}

function mapStateToProps({authedUser, users, questions}, {questionId, history}){
    const question=questions[questionId]

    return{
        authedUser,
        users,
        history,
        question:formatQuestion(question, users[question.author])
    }
}
export default connect(mapStateToProps)(Question)