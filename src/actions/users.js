export const RECEIVE_USERS='RECEIVE_USERS'
export const SAVE_QUESTION='SAVE_QUESTION'
export const SAVE_ANSWER='SAVE_ANSWER'

export function receiveUsers(users){
    return {
        type: RECEIVE_USERS,
        users,
    }
}

function saveQuestion({authedUser, question}){
    return{
        type: SAVE_QUESTION,
        id:authedUser,
        questionId:question.id,
    }
}

export function handleSaveQuestion(info){
    return(dispatch)=>{
        dispatch(saveQuestion(info))
    }
}

function saveAnswer({authedUser, answer}){
    return{
        type: SAVE_ANSWER,
        id:authedUser,
        answer,
    }
}

export function handleSaveAnswer(info){
    console.log(info)
    return (dispatch)=>{
        dispatch(saveAnswer(info))
    }
}