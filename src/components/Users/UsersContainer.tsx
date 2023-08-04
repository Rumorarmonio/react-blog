import React from 'react'
import Users from './Users'
import {connect} from 'react-redux'
import {followAC, setUsersAC, unfollowAC} from '../../redux/usersReducer'

const mapStateToProps = (state: any) => ({users: state.usersPage.users})

const mapDispatchToProps = (dispatch: Function) =>
    ({
        follow: (userId: number) => dispatch(followAC(userId)),
        unfollow: (userId: number) => dispatch(unfollowAC(userId)),
        setUsers: (users: any) => dispatch(setUsersAC(users))
    })

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer
