import {RECEIVE_USERS/*, SAVE_QUESTION, SAVE_ANSWER*/} from '../actions/users.js'
import {ADD_QUESTION, TOGGLE_QUESTION} from '../actions/questions.js'

export default function users(state={}, action){
    switch(action.type){
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users,
            }
        case ADD_QUESTION:
            return{
                ...state,
                [action.question.author]:{
                    ...state[action.question.author],
                    questions: state[action.question.author].questions.concat([action.question.id])
                }
            }
        case TOGGLE_QUESTION:
            return{
                ...state,
                [action.authedUser]:{
                    ...state[action.authedUser],
                    answers:{ 
                        ...state[action.authedUser].answers,
                        [action.id]:action.answer.answer
                    }
                }
            }
        default:
            return state;
    }
}