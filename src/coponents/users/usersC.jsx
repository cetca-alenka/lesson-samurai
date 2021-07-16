import React from 'react'
import s from './users.module.css'
import * as axios from 'axios'
import uFoto from '../../img/foto.jpg'

class Users extends React.Component {


    componentDidMount() {
        alert('NEW')
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentP}&count=${this.props.pageSize}`).then(response => {
            this.props.usSET(response.data.items)
            this.props.ustotalSET(response.data.totalCount)

        })
    }
    pageCh = (page) => {
        this.props.setP(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`).then(response => {
            this.props.usSET(response.data.items)

        })


    }

    render() {
        let pageN = Math.ceil(this.props.totalUser / this.props.pageSize)
        let p = []
        for (let i = 1; i <= pageN; i++) {
            p.push(i)
        }

        return <div>
            <div>

                {p.map(r => {

                    return <span className={this.props.currentP == r && s.sPage} onClick={(e) => {this.pageCh(r)}}> {r}</span>

                })}
            </div>
            {
                this.props.stateU.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : uFoto} className={s.ava} />
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