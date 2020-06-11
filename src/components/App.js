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
import PrivateRoute from './PrivateRoute.js'
import Page404 from './Page404.js'

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
                        <Switch>
                            <Route path='/login' exact component={Login} />
                            <PrivateRoute path='/' exact component={Home}/>
                            <PrivateRoute path='/add' exact component={NewQuestion}/>
                            <PrivateRoute path='/questions/:id' exact component={QuestionPage}/>
                            <PrivateRoute path='/leaderboard'exact component={LeaderBoard}/>
                            <PrivateRoute component={Page404}/>
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