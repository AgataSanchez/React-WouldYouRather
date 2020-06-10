import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {handleInitialData} from '../actions/shared.js'
import Login from './Login.js'
import '../App.css'
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom'
import NewQuestion from './NewQuestion.js'
import Nav from './Nav.js'
import Home from './Home.js'
import LeaderBoard from './LeaderBoard.js'
import QuestionPage from './QuestionPage.js'
import Question from './Question.js'

//import LoadingBar from 'react-redux-loading'

class App extends Component{

    componentDidMount(){
        this.props.dispatch(handleInitialData())
    }
    
    render(){
        const LoggedInRoutes = [
            <Route path='/home' exact component={Home}/>,
            <Route path='/add' component={NewQuestion}/>,
            <Route path='/questions' exact component={Question}/>,
            <Route path='/questions/:id' component={QuestionPage}/>,
            <Route path='/leaderboard' component={LeaderBoard}/>,
            ];

            const LoggedOutRoutes = [
            <Route path="/" component={Login} />
            ];
        return(
            <Router>
                <Fragment>
                   <div>
                        <Nav authedUser={this.props.loging} users={this.props.users} dispatch={this.props.dispatch}/> 
                        <div>
                        <Switch>
                            {[
                                this.props.loging===null && LoggedOutRoutes,
                                this.props.loging!==null && LoggedInRoutes,
                                
                            ]}
                        </Switch>
                            
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