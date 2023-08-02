import React, {useContext} from 'react'
import {addPostCreator, updateNewPostCreator} from '../../../redux/profileReducer'
import MyPosts from './MyPosts'
import StoreContext from '../../../StoreContext'

function MyPostsContainer() {
    // let state = props.store.getState()

    const store = useContext(StoreContext)

    const addPost = () => store.dispatch(addPostCreator())

    const onPostChange = (text: string) => store.dispatch(updateNewPostCreator(text))

    let state = store.getState()

    return (
        <MyPosts updateNewPostText={onPostChange}
                 addPost={addPost}
                 posts={state.profilePage.posts}
                 newPostText={state.profilePage.newPostText}/>
    )
}

export default MyPostsContainer
