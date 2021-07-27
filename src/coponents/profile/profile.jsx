import React from 'react';
import MyPostContener from './MyPost/MyPostContener';
import ProfileInfo from './Profiliinfo/profileinfo';
import s from './profile.module.css';
const Profile = (props) =>{
    return <div className={s.content}>
               <ProfileInfo profile={props.profile}/>
               <MyPostContener/>
              {/* <MyPostContener store={props.store} /> */}
           </div>     
}
export default Profile;