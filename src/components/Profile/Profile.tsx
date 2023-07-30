import React from 'react'
import styles from './Profile.module.scss'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'

function Profile(props: any) {
    return (
        <section className={styles.content}>
            <ProfileInfo/>
            <MyPosts posts={props.state.posts} addPost={props.addPost}/>
        </section>
    )
}

export default Profile
