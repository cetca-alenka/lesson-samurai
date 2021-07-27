
const LOGUSER = 'LOGIN-USER'

let initState = {
    userId: null,
    email: null,
    login: null,
    isLOG:false
}
const loginReducer = (state = initState, action) => {
    
    switch (action.type) {
        case LOGUSER:
            return {
                ...state,
               ...action.data,
               isLOG:true
            }

        default:
            return state
    }
}
export const logUS = (userId,login,email) => ({ type: LOGUSER, data:{userId,login,email }})


export default loginReducer