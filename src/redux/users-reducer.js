const YESFR = 'YES-FR'
const NOFR = 'NO-FR'
const SETUSER = 'S-USER'
const SPAGE = 'S-PAGE'
const USERT = 'T-USER'
const PREL = 'PRE-L'
let initState = {
    Users: [],
    pageSize: 5,
    totalUser: 0,
    currentP: 1,
    isSet:false
}
const usersReducer = (state = initState, action) => {
    //let stateC={...state}
    switch (action.type) {
        case YESFR:
            return {
                ...state,
                Users: state.Users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u
                })
            }
        case NOFR:
            return {
                ...state,
                Users: state.Users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u
                })
            }
        case SETUSER:
            return {
                ...state, Users:action.user

            }
        case SPAGE:
            return {
                ...state, currentP: action.currentP

            }
            case USERT:
            return {
                ...state, totalUser: action.count

            }
            case PREL:
            return {
                ...state, isSet: action.isSet

            }
        default:
            return state
    }
}
export const yesF = (userId) => ({ type: YESFR, userId })
export const noF = (userId) => ({ type: NOFR, userId })
export const usSET = (user) => ({ type: SETUSER, user })
export const setP = (currentP) => ({ type: SPAGE, currentP })
export const ustotalSET = (totalUser) => ({ type: USERT, count:totalUser })
export const readS = (isSet) => ({ type: PREL, isSet })

export default usersReducer