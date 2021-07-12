const YESFR = 'YES-FR'
const NOFR = 'NO-FR'
const SETUSER =''
let initState = {
    Users: [
        // { id: 1, chat: true, ava: 'https://st2.depositphotos.com/1007566/12108/v/950/depositphotos_121089406-stock-illustration-grandmother-old-lady-avatar-design.jpg', Name: 'AAAA', Status: '!!!!!!!!', location: { city: 'Minsk', country: 'BY' } },
        // { id: 2, chat: false, ava: 'https://library.kissclipart.com/20190923/ihw/kissclipart-glasses-e175f5b941bf6a47.png', Name: 'GGGGG', Status: '&&&&&&&&&', location: { city: 'Kiev', country: 'UA' } },
        // { id: 3, chat: false, ava: 'https://w7.pngwing.com/pngs/911/1005/png-transparent-ninja-computer-icons-avatar-samurai-ninja-cartoon-desktop-wallpaper-mix.png', Name: 'PPPPP', Status: '?????????', location: { city: 'Riga', country: 'LV' } },
        // { id: 4, chat: true, ava: 'https://steamuserimages-a.akamaihd.net/ugc/853849064136111017/8518E0A348B862D997F2ED40438CC04973C34607/', Name: 'DDDDD', Status: '_______', location: { city: 'bnn', country: 'RE' } }
    ]
    
}
const usersReducer = (state = initState, action) => {
    //let stateC={...state}
    switch (action.type) {
        case YESFR:
            return {
                ...state,
                Users: state.Users.map( u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u
                })
            }
        case NOFR:
            return {
                ...state,
                Users: state.Users.map( u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u
                })
            }
        case SETUSER:
            return {
                ...state, Users: [...state.Users, ...action.user]

            }
        default:
            return state
    }
}
export const yesAC = (userId) => ({ type: YESFR, userId })
export const noAC = (userId) => ({ type: NOFR, userId })
export const usAC = (user) => ({ type: SETUSER, user })

export default usersReducer