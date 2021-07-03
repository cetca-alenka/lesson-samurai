import React from 'react';
import s from './profileinfo.module.css';
const ProfileInfo = () =>{
    return <div className={s.content}>
               <div>
                      <img className={s.fon} src='https://catherineasquithgallery.com/uploads/posts/2021-03/1614624900_43-p-fon-goroda-dlya-fotoshopa-66.jpg'/>
               </div>
               <div className={s.info}>
                    ava+name
               </div>
                   
           </div>     
}
export default ProfileInfo;