import React from 'react'
import s from './users.module.css'
import uFoto from '../../img/foto.jpg'
import { NavLink } from 'react-router-dom'
import * as axios from 'axios';
import { userAPI } from '../../api/api';

let Users = (props) => {
    let pageN = Math.ceil(props.totalUser / props.pageSize)
    let p = []
    for (let i = 1; i <= pageN; i++) {
        p.push(i)
    }

    return <div>
        <div>

            {p.map(r => {

                return <span className={props.currentP == r && s.sPage} onClick={(e) => { props.pageCh(r) }}> {r}</span>

            })}
        </div>
        {
            props.stateU.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : uFoto} className={s.ava} />
                        </NavLink>
                    </div>
                    <div>
                        {
                            u.followed
                                ? <button disabled={props.Progress.some(id=>id===u.id)} onClick={() => {
                                    props.follow(u.id)
                                    // props.readPr(true,u.id)
                                    // userAPI.getFollow(u.id).then(data => {
                                    //     if (data.resultCode == 0) {
                                    //         props.yesF(u.id)

                                    //     }
                                        
                                    //     props.readPr(false,u.id)
                                    // })
                                }}>YES FRENDS</button>
                                : <button disabled={props.Progress.some(id=>id===u.id)} onClick={() => {
                                    props.unfollow(u.id)
                                    // props.readPr(true,u.id)
                                    // userAPI.noFollow(u.id).then(data => {
                                    //     if (data.resultCode == 0) {
                                    //         props.noF(u.id)

                                    //     }
                                    //     props.readPr(false,u.id)
                                    // })
                                }}> NO FRENDS</button>
                        }
                    </div>
                </span>


                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{'u.location.city'}</div>
                        <div>{'u.location.country'}</div>
                    </span>
                </span>





            </div>)
        }
        USERS
    </div>
}


export default Users