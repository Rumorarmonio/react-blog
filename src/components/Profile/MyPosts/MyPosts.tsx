import React from 'react'
import styles from './MyPosts.module.scss'
import PostItem from './Post/Post'
import {Post} from '../../../models'

function MyPosts() {
    let posts: Post[] = [
        {id: 1, text: 'Hi girls and hi zyabls', likes: 15},
        {id: 2, text: 'And hi babybon my little zyabls', likes: 20},
        {id: 3, text: 'It\'s my first post!', likes: 25},
    ]

    return (
        <div className={styles.postsContainer}>
            <h3 className={styles.postsHeader}>My posts</h3>
            <div className={styles.postForm}>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={styles.posts}>
                {posts.map((post: Post) => (
                    <PostItem post={post}/>
                ))}
            </div>
        </div>
    )
}

export default MyPosts
