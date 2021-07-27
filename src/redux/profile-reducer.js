const ADDTEXT = 'ADD-TEXT'
const ADDPOST = 'ADD-POST'
const PROFILEUS = 'PROFILE-USER'
let initState = {
    PostName: [
        { message: 'Hello', like: '21', id: '1' },
        { message: 'Help', like: '1', id: '2' },
        { message: 'Live', like: '15', id: '3' },
        { message: 'Jobs', like: '27', id: '4' }
    ],
    NewText: '********',
    profile:null

}
const profileReducer = (state = initState, action) => {
    switch (action.type) {
        case ADDPOST:
            //{            let New = {
            //     message: state.NewText, like: 0, id: 5
            // }
            // let stateC={...state}
            // stateC.PostName=[...state.PostName]
            // stateC.PostName.push(New)
            // stateC.NewText = ''
            return { ...state, NewText: '', PostName: [...state.PostName, { message: state.NewText, like: 0, id: 5 }] }
        case ADDTEXT:
            //let stateC={...state}
            //stateC.NewText = action.NewText
            return { ...state, NewText: action.NewText }
        case PROFILEUS:

            return { ...state, profile: action.profile }
        default:
            return state
    }
}
export const TCreateAction = (NewText) => {
    return { type: ADDTEXT, NewText: NewText }
}
export const PCreateAction = () => {
    return { type: ADDPOST }
}
    export const profileusSET = (profile) => {
        return { type: PROFILEUS , profile}
    }
    export default profileReducer