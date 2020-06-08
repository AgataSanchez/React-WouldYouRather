import React, {Component} from 'react'
import {connect} from 'react-redux'
import Question from './Question.js'
class Home extends Component{
    state={
        questionsU:[],
        questionsA:[],
        page:'Unanswered'
    }
    componentDidMount(){
        
        let questionsU=[];
        let questionsA=[];
        
        let answers=Object.keys(this.props.users[this.props.authedUser].answers)
      
        this.props.questionsId.map((q)=>{
            let question=answers.filter((a)=>q===a)
            console.log(question)
            if(question.length>0)
                questionsA.push(question[0]);
            else
                questionsU.push(q);
        });
        
        this.setState({questionsU:questionsU, questionsA:questionsA})
       
    }
    openPage=(event)=>{
        const pageName=event.target.value
        console.log(pageName)
        this.setState({page:pageName})
    }
    render(){
       
        return(
            
            <div className='grid-content'>
                <div className='tablink'>
               
                <button onClick={this.openPage} className='buttonAns' id="defaultOpen" value='Unanswered'>Unanswered Question</button>
                <button onClick={this.openPage} className='buttonAns' value='Answered'>Answered Question</button>
                
                {this.state.page==='Unanswered' ? (
                    <div id="Unanswered" className="tabcontent">
                
                    {this.state.questionsU!==undefined && (this.state.questionsU.map((qU)=>(
                        <li key={qU}>
                            <Question questionId={qU} vote='Unanswered'/>
                        </li>)))
                    }
                    </div>
                ):
                (
                <div id="Answered" className="tabcontent">
                
                {this.state.questionsA!==undefined && (this.state.questionsA.map((qA)=>(
                    <li key={qA}>
                    <Question questionId={qA} vote={this.props.users[this.props.authedUser].answers[qA]}/>
                    </li>
                    )))
                }
                </div>
                )
                }
                </div>

                
            </div>
        )
    }
}

function mapStateToProps({authedUser,users, questions}){
    return{authedUser,
        users: users,
        questionsId: Object.keys(questions)
    }
}
export default connect(mapStateToProps)(Home)