import React from 'react'
import s from './users.module.css'
import * as axios from 'axios'
import uFoto from '../../img/foto.jpg'

class Users extends React.Component {
    getUsers = () => {
        if (this.props.stateU.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                this.props.usSET(response.data.items)

            })
        }
    }
    render() {
        return <div>
            <button onClick={this.getUsers}>GET USERS</button>
            {
                this.props.stateU.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small != null ? u.potos.small : uFoto} className={s.ava} />
                        </div>
                        <div>
                            {
                                u.followed
                                    ? <button onClick={() => { this.props.yesF(u.id) }}>YES FRENDS</button>
                                    : <button onClick={() => { this.props.noF(u.id) }}> NO FRENDS</button>
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
}

export default Users