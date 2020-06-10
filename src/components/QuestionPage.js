import React, {Component} from 'react'
import {connect} from 'react-redux'
import {formatQuestion} from '../utils/helpers.js'
import {handleToggleQuestion} from '../actions/questions.js'
import {handleSaveAnswer} from '../actions/users.js'
import ProgressBar from './ProgressBar.js'

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
        const vOne=this.props.question.votesOne
        const vTwo=this.props.question.votesTwo
        const sumVotes=vOne+vTwo
        return(
            <div className='container'>
            <div className='tabcontent2'>
                <div className='question'>
                <div className='pQuestion'>
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
                            <div key={this.state.vote}>
                                <label><input type='radio' value='optionOne' onChange={this.handleChange} checked={this.state.opt==='optionOne'}/>{this.props.question.optionOne}</label>
                                <br/>
                                <label><input type='radio' value='optionTwo' onChange={this.handleChange} checked={this.state.opt==='optionTwo'}/>{this.props.question.optionTwo}</label>
                                <br/>
                                <button onClick={this.handleSubmit} className='btnSubmitQ'>Submit</button>
                            </div>
                        ]
                        :
                        [
                            
                            <p className='pResults' key='2'>Results:</p>,
                                <div key={this.state.vote} className='divR'>
                                    <div className='imgR'>{this.state.vote==='optionOne' && (<div><img src="https://img.icons8.com/flat_round/64/000000/vote-badge.png" alt='' width='30'/></div>)}<p className='pResults'>{this.props.question.optionOne}</p></div>
                                    <div key='progress1'><ProgressBar completed={ ((vOne/sumVotes)*100).toFixed(2)} label={(vOne/sumVotes)*100} /></div>
                                    <p className='pResults'>{vOne} out of {sumVotes}</p>
                                </div>,
                                <div key={this.state.vote + '2'} className='divR'>
                                  <div className='imgR'>{this.state.vote==='optionTwo' && (<div><img src="https://img.icons8.com/flat_round/64/000000/vote-badge.png" alt='' width='30'/></div>)}<p className='pResults'>{this.props.question.optionTwo}</p></div>
                                    <div key='progress2'><ProgressBar completed={((vTwo/sumVotes)*100).toFixed(2)} label={(vTwo/sumVotes)*100}/></div>
                                    <p className='pResults'>{vTwo} out of {sumVotes}</p>
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