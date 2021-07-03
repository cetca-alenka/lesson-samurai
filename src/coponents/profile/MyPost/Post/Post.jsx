import React from 'react';
import s from './Post.module.css';
const Post = (props) =>{
    return         <div className={s.post}>
                   <img className={s.avatar} src="https://whatsism.com/uploads/posts/2018-07/1530546590_tx962vdsiqi.jpg" alt="" />
                       {props.message}
                       <span>  like {props.like}</span>
                   </div>
                    
          
}
export default Post;