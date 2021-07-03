import React from 'react';
import s from './messages.module.css';


const Messages=(props)=>{
        return <div className={s.dialog}> {props.mes}
    </div>
}

export default Messages

