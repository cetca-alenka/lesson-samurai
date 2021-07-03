import React from 'react';
import MyPost from './MyPost';
import { PCreateAction, TCreateAction } from '../../../redux/profile-reducer';
import { connect } from 'react-redux'

let mapStateToProps = (state) => {
  return {
    NewText: state.ProfilePage.NewText,
    p: state.ProfilePage.PostName
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(PCreateAction())

    },
    postChange: (NewText) => {
      dispatch(TCreateAction(NewText))
    }
  }
}
const MyPostContener = connect(mapStateToProps.$inject, mapDispatchToProps)(MyPost)
export default MyPostContener;