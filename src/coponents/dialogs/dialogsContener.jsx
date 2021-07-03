import React from 'react';
import Dialogs from './dialogs';
import { MCreateAction, MTCreateAction } from '../../redux/dialog-reducer';

const DialogsContener = (props) => {
  let state=props.store.getState()
  let AddMesC = () => {
    //props.addPost ()  
    //props.dispatch({type:'ADD-POST'})
    props.store.dispatch(MCreateAction())

  }
  let MesChangeC = (MNewText) => {
    //let MNewText=e.target.value
    //props.addText(NewText)
    //props.dispatch({type:'ADD-TEXT', NewText:NewText })
    props.store.dispatch(MTCreateAction(MNewText))
  }

  return <Dialogs addMes={AddMesC} mesChange={MesChangeC} stateD={state.DialogPage} />
}
export default DialogsContener;