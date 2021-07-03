import React from 'react';
import s from './dialogs.module.css';
import Messages from './messages/messages';
import DialogItem from './dialogitem/dialogitem';


const Dialogs= (props) =>{
    //let NewMes=React.createRef()
    let AddMes= () => {
          props.addMes ()  
          //props.dispatch({type:'ADD-POST'})
          //props.dispatch(MCreateAction())
  
    }
    let MesChange=(e)=>{
      let MNewText=e.target.value
      props.mesChange(MNewText)
        //props.dispatch({type:'ADD-TEXT', NewText:NewText })
        //props.dispatch(MTCreateAction(MNewText))
    }
    let DialogsName = props.stateD.DialogsData.map(dialog=><DialogItem name={dialog.name} id={dialog.id}/>
        )
    let MesName = props.stateD.MesData.map(m=><Messages mes={m.mes} />
            )   

    
    return <div className={s.dialogs}>
               <div className={s.dialogItem}>
                   {DialogsName}
                </div>
                <div className={s.mes}>
                {MesName}
                <h3>NEW MESSAGES</h3>
                  
                    <div>
                    <textarea onChange={MesChange} value={props.stateD.MNewText}/>
                    </div>
                    <div>
                    <button onClick = {AddMes}>ADD MES</button>
                    </div>
                  </div>
                                
           </div>     
}
export default Dialogs;