import React from 'react';
import Dialogs from './dialogs';
import {connect} from 'react-redux'
import { MCreateAction, MTCreateAction } from '../../redux/dialog-reducer';


let mapStateToProps = (state) => {
  return {
    stateD: state.DialogPage
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    addMes: () => {
      dispatch(MCreateAction())

    },
    mesChange: (MNewText) => {
      dispatch(MTCreateAction(MNewText))
    }
  }
}
const DialogsContener = connect (mapStateToProps,mapDispatchToProps)(Dialogs)
export default DialogsContener;