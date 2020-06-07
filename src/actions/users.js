export const RECEIVE_USERS='RECEIVE_USERS'
export const LOGIN_USER='LOGIN_USER'

export function receiveUsers(users){
    return {
        type: RECEIVE_USERS,
        users,
    }
}