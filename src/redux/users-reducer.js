import {userAPI} from '../api/api'
const YESFR = 'YES-FR'
const NOFR = 'NO-FR'
const SETUSER = 'S-USER'
const SPAGE = 'S-PAGE'
const USERT = 'T-USER'
const PREL = 'PRE-L'
const ACTIVE = 'PROGRESS-FOL'
let initState = {
    Users: [],
    pageSize: 10,
    totalUser: 0,
    currentP: 1,
    isSet:false,
    Progress:[]
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
            case ACTIVE:
            return {
                ...state,Progress:
                action.Proc
              ?[...state.Progress, action.uId]
              :state.Progress.filter(id=>id != action.uId)

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
export const readPr = (Proc,uId) => ({ type: ACTIVE, Proc, uId })
export const getUsers = (currentP, pageSize) =>{
    return (dispatch)=>{
    dispatch(readS(true))
    userAPI.getUsers(currentP,pageSize).then(data => {
        dispatch(readS(false))
        dispatch(usSET(data.items))
        dispatch(ustotalSET(data.totalCount))

    })
}}
export const follow = (usId) =>{
    return (dispatch)=>{
        dispatch(readPr(true,usId))
        userAPI.getFollow(usId).then(data => {
            if (data.resultCode == 0) {
                dispatch(yesF(usId))

            }
            
            dispatch(readPr(false,usId))
        })
}}
export const unfollow = (usId) =>{
    return (dispatch)=>{
        dispatch(readPr(true,usId))
        userAPI.noFollow(usId).then(data => {
            if (data.resultCode == 0) {
                dispatch(noF(usId))

            }
            
            dispatch(readPr(false,usId))
        })
}}

export default usersReducer