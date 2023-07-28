import React from 'react'
import styles from './Profile.module.scss'
import MyPosts from './MyPosts/MyPosts'

function Profile() {
    return (
        <section className={styles.content}>
            <div>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/1/15/Cat_August_2010-4.jpg"
                    alt="img"/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </section>
    )
}

export default Profile
