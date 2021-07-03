import React from 'react';
import Post from './Post/Post';
import s from './MyPost.module.css';

const MyPost = (props) =>{
  let NewPost=React.createRef()
  let AddPost= () => {
        props.addPost ()  
        //props.dispatch({type:'ADD-POST'})
        //props.dispatch(PCreateAction())

  }
  let PostChange=()=>{
    let NewText=NewPost.current.value
    props.postChange(NewText)
      //props.dispatch({type:'ADD-TEXT', NewText:NewText })
      //props.dispatch(TCreateAction(NewText))
  }
  
  let PostN = props.p.map(m=><Post message={m.message} like={m.like}/>
    )
    return <div className={s.MyPost}>
                  <h3>MY post</h3>
                  <div>
                    <div>
                    <textarea onChange={PostChange} ref={NewPost} value={props.NewText}/>
                    </div>
                    <div>
                    <button onClick = {AddPost}>ADD POST</button>
                    </div>
                  </div>
                  {PostN}
                 
               </div>
          
}
export default MyPost;