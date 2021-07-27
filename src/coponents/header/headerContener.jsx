import React from 'react';
import * as axios from 'axios';
import Header from './header'
import { logUS } from '../../redux/login-reducer';
import {connect} from 'react-redux'

 
class HeaderContainer extends React.Component{
  componentDidMount (){
   
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{withCredentials:true}).then(response => {
      if (response.data.resultCode === 0){
        let {id, login, email} = response.data.data
        this.props.logUS(id, login, email)

      }
      
    })
  }

  render(){
    return <Header {...this.props} />
}
}
const mapStateToProps = (state) => {
  return {
    isLOG:state.Login.isLOG,
    login:state.Login.login,
    email:state.Login.email
  }}
export default connect (mapStateToProps,{logUS})(HeaderContainer);