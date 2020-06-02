import {saveQuestion, saveQuestionAnswer} from '../utils/api.js'

export const RECEIVE_QUESTIONS='RECEIVE_QUESTIONS'
export const TOGGLE_QUESTION='TOGGLE_QUESTION'
export const ADD_QUESTION='ADD_QUESTION'
import {showLoading, hideLoading} from 'react-redux-loading'

function addQuestion(question){
    return {
        type: ADD_QUESTION,
        question
    }
}

export function handleAddQuestion(question){
    return (dispatch)=>{
        dispatch(showLoading())
        return saveQuestion({
            question
        }).then(()=>dispatch(addQuestion(question))).then(()=>dispatch(hideLoading()))
    }

}

export function receiveQuestions(){
    return{
        type: RECEIVE_QUESTIONS,
        questions
    }
}

function toggleQuestion({authedUser, qid, answer}){
    return{
        type: TOGGLE_QUESTION,
        authedUser,
        qid,
        answer
    }
}
export function handleToggleQuestion(info){
    return (dispatch)=>{
        dispatch(toggleQuestion(info))
        return saveQuestionAnswer(info).catch((e)=>{console.warn('Error in handleAddQuestion: ', e)})
        dispatch(toggleQuestion(info))
    }
}