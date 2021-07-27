import React from 'react';
import { connect } from 'react-redux';
import Profile from './profile';
import s from './profile.module.css';
import * as axios from 'axios'
import {profileusSET} from '../../redux/profile-reducer'
import { withRouter } from 'react-router-dom';
class ProfileContainer extends React.Component {
     
    componentDidMount() {
       let userId=this.props.match.params.userId
       if (!userId) {
           userId = 2
       }
        //this.props.readS(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+userId).then(response => {
          
          this.props.profileusSET(response.data)
          
    
        })
      }
    render() {
        return (<div className={s.content}>
            <Profile {...this.props} profile={this.props.profile}/>

  
        </div>)
    }
}
let mapDispatchToProps = (state) => ({
    profile:state.ProfilePage.profile
})
let urlComponent = withRouter (ProfileContainer)
export default connect (mapDispatchToProps, {profileusSET})(urlComponent);