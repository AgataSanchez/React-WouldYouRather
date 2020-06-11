import React, {Component} from 'react'
import {connect} from 'react-redux'
import Question from './Question.js'
class Home extends Component{
    state={
        questions:[],
        page:'Unanswered',
    }
    getQuestions(page){

        let questions=[];
        let answers=Object.keys(this.props.users[this.props.authedUser].answers)
      
        this.props.questionsId.map((q)=>{
            let question=answers.filter((a)=>q===a)
            if(page==='Unanswered'){
                if(question.length===0)
                    questions.push(q);
            }else if(page==='Answered'){
                if(question.length>0)
                    questions.push(question[0])
            }
           return questions
        });
        
        this.setState({questions:questions})
    }
    componentDidMount(){
        this.getQuestions(this.state.page)
    }
    openPage=(event)=>{
        const pageName=event.target.value
        this.setState({page:pageName})
        this.getQuestions(pageName)
    }
    render(){
        
        return(
            
            <div className='grid-content'>
                <div className='tablink'>
               
                    <button onClick={this.openPage} className={this.state.page==='Unanswered' ? 'active' : 'buttonAns'} value='Unanswered'>Unanswered Question</button>
                    <button onClick={this.openPage} className={this.state.page==='Answered' ? 'active' : 'buttonAns'} value='Answered'>Answered Question</button>
                    <div id={this.state.page} className="tabcontent">
                        {this.state.questions!==undefined && (this.state.questions.map((q)=>(
                            <li key={q}>
                                <Question questionId={q} vote={this.state.page==='Unanswered' ? 'Unanswered' : this.props.users[this.props.authedUser].answers[q]} history={this.props.history}/>
                            </li>
                            )))
                        }
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({authedUser,users, questions}){
    return{authedUser,
        users: users,
        questionsId: Object.keys(questions).sort((a,b)=> questions[b].timestamp - questions[a].timestamp)
    }
}
export default connect(mapStateToProps)(Home)