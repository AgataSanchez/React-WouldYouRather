import React, {Component} from 'react'
import {connect} from 'react-redux'
import {formatQuestion} from '../utils/helpers.js'
import {handleToggleQuestion} from '../actions/questions.js'
import ProgressBar from './ProgressBar.js'
import Page404 from './Page404.js'

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
        }))
        .then(()=>{this.setState({ vote:this.state.opt})})
        
    }
    render(){
        if(this.props.error)
            return (<Page404 question={true}/>)
        
      //Consts to use in divs
        const vOne=this.props.question.votesOne
        const vTwo=this.props.question.votesTwo 
        const vOptions=[vOne,vTwo]
        const sumVotes=vOne+vTwo
        const options=['optionOne', 'optionTwo']
        const optionsText=[this.props.question.optionOne, this.props.question.optionTwo]
        
        //Create the diferents divs
        let divs=[]
       
        for(let i=0; i < 2; ++i){
            divs.push(
            <div key={i} className='divR'>
                <div className='imgR' key={`divImgR${i}`}>
                    {this.state.vote===options[i] && 
                    (<div key='imgVote'><img src="https://img.icons8.com/flat_round/64/000000/vote-badge.png" alt='' width='30'/></div>)}
                    <p className='pResults'>{optionsText[i]}</p>
                </div>
                <div key='progress1'><ProgressBar completed={ ((vOptions[i]/sumVotes)*100).toFixed(2)} label={(vOptions[i]/sumVotes)*100} /></div>
                <p className='pResults'>{vOptions[i]} out of {sumVotes}</p>
            </div>)
        }

       
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
                                <button disabled={this.state.opt===''}onClick={this.handleSubmit} className='btnSubmitQ'>Submit</button>
                            </div>
                        ]
                        :
                        [
                            <p className='pResults' key='2'>Results:</p>,
                                divs                                
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
    let id
   
    if(props.location.state===undefined ){ 
        let idPath=props.location.pathname.split('/')
        id=idPath[2]
    }else{
        id=props.location.state.id
    }

    const question=questions[id]
    
    if(question===undefined)
        return {error:true}
    
    const vote=question.optionOne.votes.includes(authedUser) ? 'optionOne' : question.optionTwo.votes.includes(authedUser) ? 'optionTwo' :'Unanswered'    
    return{
        id,
        vote,
        question:formatQuestion(question, users[question.author]),
        authedUser
    }
}
export default connect(mapStateToProps)(QuestionPage)