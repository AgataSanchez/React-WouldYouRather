import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {handleInitialData} from '../actions/shared.js'
import Login from './Login.js'
import '../App.css'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import NewQuestion from './NewQuestion.js'
import Nav from './Nav.js'
import Home from './Home.js'
import LeaderBoard from './LeaderBoard.js'
import QuestionPage from './QuestionPage.js'
import Question from './Question.js'

class App extends Component{

    componentDidMount(){
        this.props.dispatch(handleInitialData())
    }
    
    render(){
        return(
            <Router>
                <Fragment>
                   <div>
                        <Nav authedUser={this.props.loging} users={this.props.users} dispatch={this.props.dispatch}/> 
                        <div>
                            {this.props.loging===null ?                       
                            <Route path='/' exact component={Login}/>
                            :  null
                            }
                            
                            <Route path='/home' exact component={Home}/>
                            <Route path='/new' component={NewQuestion}/>
                            <Route path='/question' exact component={Question}/>
                            <Route path='/question/:id' component={QuestionPage}/>
                            <Route path='/leader' component={LeaderBoard}/>
                             
                        </div>
                    </div>
                </Fragment>
            </Router>
        )
    }
}

function mapStateToProps({users,authedUser}){
    return{
        users:Object.values(users),
        loging: authedUser
    }
}

export default connect(mapStateToProps)(App)