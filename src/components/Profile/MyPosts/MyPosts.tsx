import React, {useRef} from 'react'
import styles from './MyPosts.module.scss'
import PostItem from './Post/Post'
import {Post} from '../../../models'

function MyPosts(props: any) {
    const newPostElement = useRef<HTMLTextAreaElement>(null)

    function addPost() {
        let text = newPostElement.current?.value
        props.addPost(text)
        newPostElement.current!!.value = ''
    }

    return (
        <div className={styles.postsContainer}>
            <h3 className={styles.postsHeader}>My posts</h3>
            <div className={styles.postForm}>
                <textarea ref={newPostElement}></textarea>
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
