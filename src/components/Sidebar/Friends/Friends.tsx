import React from 'react'
import styles from './Friends.module.scss'

function Friends(props: any) {
    return (
        <div>
            <h3 className={styles.header}>Friends</h3>
            <div className={styles.container}>
                {
                    props.friends.map((friend: any) => (
                        <div className={styles.friend}>
                            <img className={styles.avatar} src={friend.avatar}/>
                            <span>{friend.name}</span>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Friends
