import {saveQuestion, saveQuestionAnswer} from '../utils/api.js'
export const RECEIVE_QUESTIONS='RECEIVE_QUESTIONS'
export const TOGGLE_QUESTION='TOGGLE_QUESTION'
export const ADD_QUESTION='ADD_QUESTION'


function addQuestion(question){
    return {
        type: ADD_QUESTION,
        question
    }
}

export function handleAddQuestion(optionOneText, optionTwoText, author){
    return (dispatch)=>{
        return saveQuestion({
            optionOneText,
            optionTwoText,
            author
        }).then((question)=>dispatch(addQuestion(question)))
    }

}

export function receiveQuestions(questions){
    return{
        type: RECEIVE_QUESTIONS,
        questions
    }
}

function toggleQuestion({authedUser, id, answer}){
    return{
        type: TOGGLE_QUESTION,
        authedUser,
        id,
        answer
    }
}
export function handleToggleQuestion(info){
    return (dispatch)=>{
        dispatch(toggleQuestion(info))
        return saveQuestionAnswer({
            authedUser: info.authedUser,
            qid:info.id,
            answer: info.answer
        }).catch((e)=>{
            console.warn('Error in handleToggleQuestion: ', e)
            dispatch(toggleQuestion(info))
        })
        
    }
}