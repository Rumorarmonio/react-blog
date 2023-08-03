import React, {useContext} from 'react'
import {addPostCreator, updateNewPostCreator} from '../../../redux/profileReducer'
import MyPosts from './MyPosts'
import StoreContext from '../../../StoreContext'
import {connect} from 'react-redux'
import Dialogs from '../../Dialogs/Dialogs'

// function MyPostsContainer() {
//     // let state = props.store.getState()
//
//     const store = useContext(StoreContext)
//
//     const addPost = () => store.dispatch(addPostCreator())
//
//     const onPostChange = (text: string) => store.dispatch(updateNewPostCreator(text))
//
//     let state = store.getState()
//
//     return (
//         <MyPosts updateNewPostText={onPostChange}
//                  addPost={addPost}
//                  posts={state.profilePage.posts}
//                  newPostText={state.profilePage.newPostText}/>
//     )
// }

const mapStateToProps = (state: any) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch: Function) => {
    return {
        updateNewPostText: (text: string) => {
            dispatch(updateNewPostCreator(text))

        },
        addPost: () => {
            dispatch(addPostCreator())
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer
