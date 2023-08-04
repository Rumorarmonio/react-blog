import React, {useRef} from 'react'
import styles from './MyPosts.module.scss'
import PostItem from './Post/Post'
import Post from '../../../models'

function MyPosts(props: any) {
    const textArea = useRef<HTMLTextAreaElement>(null)

    const addPost = () => props.addPost()

    const onPostChange = () => props.updateNewPostText(textArea.current!!.value)

    const postsElements = props.posts.map((post: Post) => <PostItem post={post}/>)

    return (
        <div className={styles.postsContainer}>
            <h3 className={styles.postsHeader}>My posts</h3>
            <div className={styles.postForm}>
                <textarea onChange={onPostChange} ref={textArea} value={props.newPostText}/>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={styles.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts
