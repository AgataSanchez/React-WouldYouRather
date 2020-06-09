import React, {Component} from 'react'
import {connect} from 'react-redux'
import {formatQuestion} from '../utils/helpers.js'
import { Progress } from 'semantic-ui-react'
import {handleToggleQuestion} from '../actions/questions.js'
import {handleSaveAnswer} from '../actions/users.js'

class QuestionPage extends Component{
    state={
        opt:'',
        vote:this.props.vote,
    }
    handleChange =(event)=>{
        const op=event.target.value;
        this.setState({opt:op})
    }
    handleSubmit =()=>{
        const {dispatch, authedUser,id}=this.props
      
        dispatch(handleToggleQuestion({
            authedUser,
            id,
            answer:this.state.opt
        })).then((option=this.state.opt)=>dispatch(handleSaveAnswer({authedUser, answer:{id,option}})))
        .then(()=>{this.setState({ vote:this.state.opt})})
    }
    render(){
             
        return(
            <div className='container'>
            <div className='tabcontent2'>
                <div className='question'>
               <div>
                    <p className='asks'>{this.props.question.name} asks:</p>
                </div>
                <div className='grid-container'>
                    <div className='item1'>
                        <img src={this.props.question.avatarURL} alt='' width='150' height='150'/>
                    </div>
                    <div className='item2'>
                        {this.state.vote==='Unanswered' ? 
                        [
                            <p key='1'>Would You Rather..</p>,
                            <div key={this.state.vote} className='contentQ'>
                                <input type='radio' value='optionOne' onChange={this.handleChange} checked={this.state.opt==='optionOne'}/><label>{this.props.question.optionOne}</label>
                                <br/>
                                <input type='radio' value='optionTwo' onChange={this.handleChange} checked={this.state.opt==='optionTwo'}/><label>{this.props.question.optionTwo}</label>
                                <br/>
                                <button onClick={this.handleSubmit} className='btnSubmitQ'>Submit</button>
                            </div>
                        ]
                        :
                        [
                            <p className='pResults' key='2'>Results:</p>,
                                <div key={this.state.vote} className='divR'>
                                    <p className='pResults'>{this.props.vote==='optionOne' && ('Your vote: ')}{this.props.question.optionOne}</p>
                                    <div><Progress percent={(this.props.question.votesOne)/(this.props.question.votesOne+this.props.question.votesTwo)*100} progress /></div>
                                    <p className='pResults'>{this.props.question.votesOne} out of {this.props.question.votesOne+this.props.question.votesTwo}</p>
                                </div>,
                                <div key={this.state.vote + '2'} className='divR'>
                                    <p className='pResults'>{this.props.vote==='optionTwo' && ('Your vote: ')}{this.props.question.optionTwo}</p>
                                    <div><Progress percent={(this.props.question.votesTwo)/(this.props.question.votesOne+this.props.question.votesTwo)*100} progress /></div>
                                    <p className='pResults'>{this.props.question.votesTwo} out of {this.props.question.votesOne+this.props.question.votesTwo}</p>
                                </div>
                        ]   
                        }
                    </div>
                </div>
            </div>
            </div>
            </div>
        )
    }
}
function mapStateToProps({authedUser, questions, users},props){
    const {id, vote}=props.location.state
    const question=questions[id]
    return{
        id,
        vote,
        question:formatQuestion(question, users[question.author]),
        authedUser
    }
}
export default connect(mapStateToProps)(QuestionPage)