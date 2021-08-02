import React from 'react';
import Users from './users';
import * as axios from 'axios'
import { connect } from 'react-redux'
import preL from '../../img/loader.gif'
import Preloader from '../common/preloader/preloader.jsx'
import { yesF, noF, usSET, setP, ustotalSET, readS, readPr, getUsers, follow, unfollow } from '../../redux/users-reducer';
import { userAPI } from '../../api/api';

class UsersComponent extends React.Component {


  componentDidMount() {
    alert('NEW')
    this.props.getUsers(this.props.currentP,this.props.pageSize)
    // this.props.readS(true)
    // userAPI.getUsers(this.props.currentP,this.props.pageSize).then(data => {
    //   this.props.readS(false)
    //   this.props.usSET(data.items)
    //   this.props.ustotalSET(data.totalCount)

    // })
  }
  pageCh = (page) => {
    this.props.setP(page)
    this.props.getUsers(page,this.props.pageSize)
    // this.props.readS(true)
    // userAPI.getUsers(page,this.props.pageSize).then(data => {
    //   this.props.readS(false)
    //   this.props.usSET(data.items)

    // })


  }

  render() {
    return <>
      {this.props.isSet ?<Preloader/>:null}
      {/* <Preloader isSet={this.props.isSet/> */}
      <Users
        totalUser={this.props.totalUser}
        pageSize={this.props.pageSize}
        currentP={this.props.currentP}
        pageCh={this.pageCh}
        stateU={this.props.stateU}
        yesF={this.props.yesF}
        noF={this.props.noF}
        readPr={this.props.readPr}
        Progress={this.props.Progress}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
      />
    </>
  }
}

let mapStateToProps = (state) => {
  return {
    stateU: state.UsersPage.Users,
    pageSize: state.UsersPage.pageSize,
    totalUser: state.UsersPage.totalUser,
    currentP: state.UsersPage.currentP,
    isSet: state.UsersPage.isSet,
    Progress: state.UsersPage.Progress
  }
}
// let mapDispatchToProps = (dispatch) => {
//   return {
//     yesF: (userId) => {
//       dispatch(yesAC(userId))

//     },
//     noF: (userId) => {
//       dispatch(noAC(userId))
//     },
//     usSET: (users) => {
//       dispatch(usAC(users))
//     },
//     setP: (currentP) => {
//       dispatch(pageAC(currentP))
//     },
//     ustotalSET: (totalUser) => {
//       dispatch(ustotalAC(totalUser))
//     },
//     readS: (isSet) => {
//       dispatch(prelAC(isSet))
//     },
//   }
// }
const UsersContener = connect(mapStateToProps, {yesF, noF,usSET,setP,ustotalSET,readS, readPr, getUsers, follow, unfollow})(UsersComponent)
export default UsersContener;