import React from 'react';
import Preloader from '../../common/preloader/preloader';
import s from './profileinfo.module.css';
const ProfileInfo = (props) =>{
    if (!props.profile)
    return <Preloader/>

    return <div className={s.content}>
               <div>
                      <img className={s.fon} src='https://catherineasquithgallery.com/uploads/posts/2021-03/1614624900_43-p-fon-goroda-dlya-fotoshopa-66.jpg'/>
               </div>
               <div className={s.info}>
                   <img src={props.profile.photos.large}/>
                    ava+name
               </div>
                   
           </div>     
}
export default ProfileInfo;