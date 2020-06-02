import {combinedReducers} from 'redux'
import {authedUser} from './authedUser.js'
import {questions} from './questions.js'
import {users} from './users.js'
import {loadingBarReducer} from 'react-redux-loading'

export default function combinedReducers({
    authedUser,
    questions,
    users,
    loadingBar: loadingBarReducer,
})