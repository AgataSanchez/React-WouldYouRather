import {RECEIVE_USERS, SAVE_QUESTION, SAVE_ANSWER} from '../actions/users.js'

export default function users(state={}, action){
    switch(action.type){
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users,
            }
        case SAVE_QUESTION:
            return{
                ...state,
                [action.id]:{
                    ...state[action.id],
                    questions: state[action.id].questions.concat([action.questionId])
                }
            }
        case SAVE_ANSWER:
            return{
                ...state,
                [action.id]:{
                    ...state[action.id],
                    answers:{ 
                        ...state[action.id].answers,
                        [action.answer.id]:action.answer.option
                    }
                }
            }
        default:
            return state;
    }
}