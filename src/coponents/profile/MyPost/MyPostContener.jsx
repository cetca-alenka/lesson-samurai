import React from 'react';
import MyPost from './MyPost';
import { PCreateAction, TCreateAction } from '../../../redux/profile-reducer';
const MyPostContener = (props) =>{
  let state=props.store.getState()
  let AddPostC= () => {
        //props.addPost ()  
        //props.dispatch({type:'ADD-POST'})
        props.store.dispatch(PCreateAction())

  }
  let PostChangeC=(NewText)=>{
    
      props.store.dispatch(TCreateAction(NewText))
  }
    return (<MyPost addPost={AddPostC} postChange={PostChangeC} NewText={state.ProfilePage.NewText} p={state.ProfilePage.PostName}/>)
          
}
export default MyPostContener;