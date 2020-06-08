import React, {Component} from 'react'
import {connect} from 'react-redux'
import {handleAddQuestion} from '../actions/questions.js'

class NewQuestion extends Component{
    state={
        op1:'',
        op2:'',
    }
    handleChange=(event)=>{
        let op=event.target.value;
        if(event.target.id==='op1'){
           this.setState({op1:op})
        }else if(event.target.id==='op2'){
            this.setState({op2:op})
        }

    }
    handleSubmit=()=>{
        const {op1,op2}=this.state
        const {dispatch, authedUser}=this.props
        
        dispatch(handleAddQuestion(op1,op2,authedUser))
        this.setState({op1:'', op2:''})
        /*redirect /question/id */
    }

    render(){
        return(
            <div className='container'>
                <p>Create New Question</p>
                <hr/>
                <p>Complete the question:</p>
                <p>Would you rather ...</p>
                <input type='text' placeholder='Enter Option One Text Here' id='op1' onChange={this.handleChange}></input>
                <p>OR</p>
                <input type='text' placeholder='Enter Option Two Text Here' id='op2'  onChange={this.handleChange}></input>
                <br/>
                <button disabled={this.state.op1==='' || this.state.op2===''} onClick={this.handleSubmit}>Submit</button>
            </div>
        )
    }
}
function mapStateToProps({authedUser}){
    return {authedUser}
}
export default connect(mapStateToProps)(NewQuestion)