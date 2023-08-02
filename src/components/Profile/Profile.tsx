import React from 'react'
import styles from './Profile.module.scss'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPostsContainer from './MyPosts/MyPostsContainer'

function Profile(props: any) {
    return (
        <section className={styles.content}>
            <ProfileInfo/>
            <MyPostsContainer store={props.store}/>
        </section>
    )
}

export default Profile
