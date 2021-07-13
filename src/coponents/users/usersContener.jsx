import React from 'react';
import Users from './usersC';
import { connect } from 'react-redux'
import { yesAC, noAC, usAC } from '../../redux/users-reducer';


let mapStateToProps = (state) => {
  return {
    stateU: state.UsersPage.Users
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    yesF: (userId) => {
      dispatch(yesAC(userId))

    },
    noF: (userId) => {
      dispatch(noAC(userId))
    },
    usSET: (users) => {
      dispatch(usAC(users))
    }
  }
}
const UsersContener = connect(mapStateToProps, mapDispatchToProps)(Users)
export default UsersContener;