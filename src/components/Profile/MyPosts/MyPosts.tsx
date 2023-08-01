import React, {useRef} from 'react'
import styles from './MyPosts.module.scss'
import PostItem from './Post/Post'
import Post from '../../../models'
import {addPostCreator, updateNewPostCreator} from '../../../redux/profileReducer'

function MyPosts(props: any) {
    const textArea = useRef<HTMLTextAreaElement>(null)

    const addPost = () => props.dispatch(addPostCreator())

    const onPostChange = () => props.dispatch(updateNewPostCreator(textArea.current!!.value))

    return (
        <div className={styles.postsContainer}>
            <h3 className={styles.postsHeader}>My posts</h3>
            <div className={styles.postForm}>
                <textarea onChange={onPostChange} ref={textArea} value={props.newPostText}/>
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
