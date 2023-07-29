import React from 'react'
import styles from './ProfileInfo.module.scss'

function ProfileInfo() {
    return (
        <>
            <div>
                <img className={styles.image} src="https://upload.wikimedia.org/wikipedia/commons/1/15/Cat_August_2010-4.jpg" alt="img"/>
            </div>
            <div className={styles.profileInfo}>
                ava + description
            </div>
        </>
    )
}

export default ProfileInfo
