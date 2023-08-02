import React from 'react'
import styles from './Profile.module.scss'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPostsContainer from './MyPosts/MyPostsContainer'

function Profile() {
    return (
        <section className={styles.content}>
            <ProfileInfo/>
            <MyPostsContainer/>
        </section>
    )
}

export default Profile
