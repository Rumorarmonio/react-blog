import React from 'react'
import styles from './Profile.module.scss'

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
            <div className={styles.content__posts}>
                My posts
                <div className={styles.content__post}>
                    New post
                </div>
                <div className={styles.content__posts}>
                    <div className={styles.content__post}>
                        post 1
                    </div>
                    <div className={styles.content__post}>
                        post 2
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Profile
