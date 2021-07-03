import dialogReducer from "./dialog-reducer"
import profileReducer from "./profile-reducer"
import sidebarReducer from "./sidebar-reducer"


const ADDTEXT = 'ADD-TEXT'
const ADDPOST = 'ADD-POST'
const ADDMEST = 'ADD-MEST'
const ADDMES = 'ADD-MES'


export const TCreateAction = (NewText) => {
    return { type: ADDTEXT, NewText: NewText }
}
export const PCreateAction = () => {
    return { type: ADDPOST }
}
export const MTCreateAction = (MNewText) => {
    return { type: ADDMEST, MNewText: MNewText }
}
export const MCreateAction = () => {
    return { type: ADDMES }
}





let store = {
    _state: {
        DialogPage: {
            MesData: [
                { mes: 'HI', id: '1' },
                { mes: 'HI+++++', id: '2' },
                { mes: 'HI------', id: '3' },
                { mes: 'HI !!!!!!!!!!!!!!!!!!!!!!', id: '4' },
                { mes: 'HI HI HI', id: '5' }
            ],
            MNewText: '=====',
            DialogsData: [
                { name: 'DAD', id: '1' },
                { name: 'MUM', id: '2' },
                { name: 'SON', id: '3' },
                { name: 'daughter', id: '4' }
            ]
        },
        ProfilePage: {
            PostName: [
                { message: 'Hello', like: '21', id: '1' },
                { message: 'Help', like: '1', id: '2' },
                { message: 'Live', like: '15', id: '3' },
                { message: 'Jobs', like: '27', id: '4' }
            ],
            NewText: '********'
        }
    },
    SideBar:{},
    GetState() {
        return this._state
    },
    Play(observer) {
        this._RenderApp = observer
    },
    _RenderApp() {
        console.log('++++++++')
    },
    _addPost() {
        let New = {
            message: this._state.ProfilePage.NewText, like: 0, id: 5
        }
        this._state.ProfilePage.PostName.push(New)
        this._state.ProfilePage.NewText = ''
        this._RenderApp(this._state)
    },
    _addMesT(MNewText) {
        this._state.DialogPage.MNewText = MNewText
        this._RenderApp(this._state)
    },
    _addText(NewText) {
        this._state.ProfilePage.NewText = NewText
        this._RenderApp(this._state)
    },
    _addMes() {
        let New = {
            mes: this._state.DialogPage.MNewText, id: 6
        }
        this._state.DialogPage.MesData.push(New)
        this._state.DialogPage.MNewText = ''
        this._RenderApp(this._state)
    },

    dispatch(action) {
        this._state.ProfilePage = profileReducer(this._state.ProfilePage, action)
        this._state.DialogPage = dialogReducer(this._state.DialogPage, action)
        this._state.SideBar = sidebarReducer(this._state.SideBar, action)
        this._RenderApp(this._state)
    }
}

export default store;
window.store = store;