import React from 'react'
import {addPostCreator, updateNewPostCreator} from '../../../redux/profileReducer'
import MyPosts from './MyPosts'
import {connect} from 'react-redux'

const mapStateToProps = (state: any) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch: Function) => {
    return {
        updateNewPostText: (text: string) => dispatch(updateNewPostCreator(text)),
        addPost: () => dispatch(addPostCreator())
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer
