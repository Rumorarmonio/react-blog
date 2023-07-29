import React from 'react'
import styles from './Profile.module.scss'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'

function Profile() {
    return (
        <section className={styles.content}>
            <ProfileInfo/>
            <MyPosts/>
        </section>
    )
}

export default Profile
