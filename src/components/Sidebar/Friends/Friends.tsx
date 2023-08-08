import React from 'react'
import styles from './Friends.module.scss'
import ProfilePicture from '../../common/ProfilePicture/ProfilePicture'
import {NavLink} from 'react-router-dom'

function Friends(props: any) {
    return (
        <div>
            <h3 className={styles.header}>Friends</h3>
            <div className={styles.container}>
                {
                    props.friends.map((friend: any) => (
                        <div className={styles.friend}>
                            <NavLink to={'/profile/' + friend.id}>
                                <ProfilePicture user={friend} width="50px" height="50px" borderRadius="50%"/>
                            </NavLink>
                            <span className={styles.name}>{friend.name}</span>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Friends
