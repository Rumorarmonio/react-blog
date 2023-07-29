import React from 'react'
import styles from './MyPosts.module.scss'
import Post from './Post/Post'

function MyPosts() {
    return (
        <div className={styles.postsContainer}>
            <h3 className={styles.postsHeader}>My posts</h3>
            <div className={styles.postForm}>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={styles.posts}>
                <Post message="Hi girls and hi zyabls" likes={15}/>
                <Post message="And hi babybon my little zyabls" likes={20}/>
                <Post message="It's my first post!" likes={25}/>
            </div>
        </div>
    )
}

export default MyPosts
