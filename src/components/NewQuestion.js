import React, {Component} from 'react'
import {connect} from 'react-redux'

class NewQuestion extends Component{

    render(){
        return(
            <div className='container'>
                <p>Create New Question</p>
                <hr/>
                <p>Complete the question:</p>
                <p>Would you rather ...</p>
                <input type='text' placeholder='Enter Option One Text Here' id='op1'></input>
                <p>OR</p>
                <input type='text' placeholder='Enter Option Two Text Here' id='op2'></input>
                <br/>
                <button>Submit</button>
            </div>
        )
    }
}

export default connect()(NewQuestion)