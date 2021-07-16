import React from 'react'
import s from './users.module.css'
import uFoto from '../../img/foto.jpg'

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
                        <img src={u.photos.small != null ? u.photos.small : uFoto} className={s.ava} />
                    </div>
                    <div>
                        {
                            u.followed
                                ? <button onClick={() => { props.yesF(u.id) }}>YES FRENDS</button>
                                : <button onClick={() => { props.noF(u.id) }}> NO FRENDS</button>
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