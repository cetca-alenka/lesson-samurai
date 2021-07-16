import React from 'react'
import s from './users.module.css'
import * as axios from 'axios'
import uFoto from '../../img/foto.jpg'

const Users = (props) => {
    let getUsers = () => {
        if (props.stateU.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                props.usSET(response.data.items)

            })
        }
        // props.usSET([
        // { id: 1, chat: true, ava: 'https://st2.depositphotos.com/1007566/12108/v/950/depositphotos_121089406-stock-illustration-grandmother-old-lady-avatar-design.jpg', Name: 'AAAA', Status: '!!!!!!!!', location: { city: 'Minsk', country: 'BY' } },
        //     { id: 2, chat: false, ava: 'https://library.kissclipart.com/20190923/ihw/kissclipart-glasses-e175f5b941bf6a47.png', Name: 'GGGGG', Status: '&&&&&&&&&', location: { city: 'Kiev', country: 'UA' } },
        //     { id: 3, chat: false, ava: 'https://w7.pngwing.com/pngs/911/1005/png-transparent-ninja-computer-icons-avatar-samurai-ninja-cartoon-desktop-wallpaper-mix.png', Name: 'PPPPP', Status: '?????????', location: { city: 'Riga', country: 'LV' } },
        //     { id: 4, chat: true, ava: 'https://steamuserimages-a.akamaihd.net/ugc/853849064136111017/8518E0A348B862D997F2ED40438CC04973C34607/', Name: 'DDDDD', Status: '_______', location: { city: 'bnn', country: 'RE' } }])
    }
    return <div>
        <button onClick={getUsers}>GET USERS</button>
        {
            props.stateU.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small != null ? u.potos.small : uFoto} className={s.ava} />
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