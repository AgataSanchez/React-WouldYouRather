
export const RECEIVE_USERS='RECEIVE_USERS'
export const SAVE_QUESTION='SAVE_QUESTION'
export const SAVE_ANSWER='SAVE_ANSWER'


export function receiveUsers(users){
    return {
        type: RECEIVE_USERS,
        users,
    }
}
