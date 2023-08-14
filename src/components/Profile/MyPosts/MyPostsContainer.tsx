import React from 'react'
import {addPostCreator, updateNewPostCreator} from '../../../redux/profileReducer'
import MyPosts from './MyPosts'
import {connect} from 'react-redux'

const mapStateToProps = (state: any) =>
    ({
        posts: state.profile.posts,
        newPostText: state.profile.newPostText
    })

const mapDispatchToProps = (dispatch: Function) =>
    ({
        updateNewPostText: (text: string) => dispatch(updateNewPostCreator(text)),
        addPost: () => dispatch(addPostCreator())
    })

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer
