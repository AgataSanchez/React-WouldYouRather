import {getInitialData} from '../utils/api.js'
import { receiveUsers } from './users.js'
import { receiveQuestions } from './questions.js'
import { setAuthedUser } from './authedUser.js'
import {showLoading, hideLoading} from 'react-redux-loading'

export function handleInitialData(authedUser){
    return(dispatch)=>{
        dispatch(showLoading())
        return getInitialData().then(
            ({users,questions})=>{
                dispatch(receiveUsers(users))
                dispatch(receiveQuestions(questions))
                dispatch(setAuthedUser(authedUser))
                dispatch(hideLoading())
            }
        )
    }
}