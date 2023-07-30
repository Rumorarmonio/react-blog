import React, {useRef} from 'react'
import styles from './MyPosts.module.scss'
import PostItem from './Post/Post'
import {Post} from '../../../models'

function MyPosts(props: any) {
    const newPostElement = useRef<HTMLTextAreaElement>(null)

    function addPost() {
        let text = newPostElement.current?.value
        props.addPost()
    }

    function onPostChange() {
        let text = newPostElement.current?.value
        props.updateNewPostText(text)
    }

    return (
        <div className={styles.postsContainer}>
            <h3 className={styles.postsHeader}>My posts</h3>
            <div className={styles.postForm}>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                <button onClick={addPost}>Add post</button>
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
