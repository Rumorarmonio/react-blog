import React from 'react'
import {addPostCreator, updateNewPostCreator} from '../../../redux/profileReducer'
import MyPosts from './MyPosts'

function MyPostsContainer(props: any) {
    const state = props.store.getState()

    const addPost = () => props.store.dispatch(addPostCreator())

    const onPostChange = (text: string) => props.store.dispatch(updateNewPostCreator(text))

    return (
        <MyPosts updateNewPostText={onPostChange}
                 addPost={addPost}
                 posts={state.profilePage.posts}
                 newPostText={state.profilePage.newPostText}/>
    )
}

export default MyPostsContainer
