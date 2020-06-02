import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {handleInitialData} from '../actions/shared.js'
import Login from './Login.js'
import '../App.css'
import NewQuestion from './NewQuestion.js'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Nav from './Nav.js'
class App extends Component{

        componentDidMount(){
        this.props.dispatch(handleInitialData())
    }
    render(){
        return(
            <Router>
                <Fragment>
                    <div>
                        <Nav/>
                        <div>
                            <Route path='/' exact component={Login}/>
                            <Route path='/new' component={NewQuestion}/>
                            
                        </div>
                    </div>
                </Fragment>
            </Router>
        )
    }
}

export default connect()(App)