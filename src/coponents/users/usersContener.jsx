import React from 'react';
import Users from './users';
import * as axios from 'axios'
import { connect } from 'react-redux'
import preL from '../../img/loader.gif'
import Preloader from '../common/preloader/preloader.jsx'
import { yesF, noF, usSET, setP, ustotalSET, readS } from '../../redux/users-reducer';

class UsersComponent extends React.Component {


  componentDidMount() {
    alert('NEW')
    this.props.readS(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentP}&count=${this.props.pageSize}`).then(response => {
      this.props.readS(false)
      this.props.usSET(response.data.items)
      this.props.ustotalSET(response.data.totalCount)

    })
  }
  pageCh = (page) => {
    this.props.setP(page)
    this.props.readS(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`).then(response => {
      this.props.readS(false)
      this.props.usSET(response.data.items)

    })


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
    isSet: state.UsersPage.isSet
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
const UsersContener = connect(mapStateToProps, {yesF, noF,usSET,setP,ustotalSET,readS})(UsersComponent)
export default UsersContener;