const ADDMEST = 'ADD-MEST'
const ADDMES = 'ADD-MES'
let initState = {
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
}
const dialogReducer = (state = initState, action) => {
    //let stateC={...state}
    switch (action.type) {
                case ADDMES:
            // let New = {
            //     mes: state.MNewText, id: 6
            // }
            // stateC.MesData.push(New)
            // stateC.MNewText = ''
            return {...state, MNewText:'', MesData:[...state.MesData,{mes: state.MNewText, id: 6}]}
        case ADDMEST:
            //stateC.MNewText = action.MNewText
            return {...state,MNewText:action.MNewText}
        default:
            return state
    }
}
export const MTCreateAction = (MNewText) => {
    return { type: ADDMEST, MNewText: MNewText }
}
export const MCreateAction = () => {
    return { type: ADDMES }
}
export default dialogReducer