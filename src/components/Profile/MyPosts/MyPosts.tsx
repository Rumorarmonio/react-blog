import React from 'react'
import styles from './MyPosts.module.scss'
import Post from './Post/Post'

function MyPosts() {
    return (
        <div className={styles.postsContainer}>
            My posts
            <div className={styles.postForm}>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={styles.posts}>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>
    )
}

export default MyPosts
