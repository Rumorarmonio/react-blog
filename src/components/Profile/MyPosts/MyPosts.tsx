import React from 'react'
import styles from './MyPosts.module.scss'
import PostItem from './Post/Post'
import {Post} from '../../../models'

function MyPosts(props: any) {
    return (
        <div className={styles.postsContainer}>
            <h3 className={styles.postsHeader}>My posts</h3>
            <div className={styles.postForm}>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={styles.posts}>
                {
                    props.posts.map((post: Post) => (
                        <PostItem post={post}/>
                    ))
                }
            </div>
        </div>
    )
}

export default MyPosts
