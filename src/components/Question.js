import React, {Component} from 'react'
import {connect} from 'react-redux'
import {formatQuestion} from '../utils/helpers.js'

class Question extends Component{

    render(){
        console.log(this.props)
        return(
            <div className='question'>
                <div>
                    <p className='asks'>{this.props.question.name} asks:</p>
                </div>
                <div className='grid-container'>
                    <div className='item1'>
                        <img src={this.props.question.avatarURL} alt='' width='150' height='150'/>
                    </div>
                    <div className='item2'>
                        <p>Would you rather</p>
                        <div className='contentQ'>{this.props.question.optionOne}</div>
                        <button className='buttonPull'>View Pull</button>
                    </div>
                </div>

            </div>
        )
    }
}

function mapStateToProps({authedUser, users, questions}, {questionId}){
    const question=questions[questionId]
    return{
        authedUser,
        users,
        question:formatQuestion(question, users[question.author])
    }
}
export default connect(mapStateToProps)(Question)