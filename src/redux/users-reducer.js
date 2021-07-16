const YESFR = 'YES-FR'
const NOFR = 'NO-FR'
const SETUSER = 'S-USER'
const SPAGE = 'S-PAGE'
const USERT = 'T-USER'
let initState = {
    Users: [],
    pageSize: 5,
    totalUser: 0,
    currentP: 1
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
        default:
            return state
    }
}
export const yesAC = (userId) => ({ type: YESFR, userId })
export const noAC = (userId) => ({ type: NOFR, userId })
export const usAC = (user) => ({ type: SETUSER, user })
export const pageAC = (currentP) => ({ type: SPAGE, currentP })
export const ustotalAC = (totalUser) => ({ type: USERT, count:totalUser })

export default usersReducer