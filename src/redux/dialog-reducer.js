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
    switch (action.type) {
        case ADDMES:
            let New = {
                mes: state.MNewText, id: 6
            }
            state.MesData.push(New)
            state.MNewText = ''
            return state
        case ADDMEST:
            state.MNewText = action.MNewText
            return state
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