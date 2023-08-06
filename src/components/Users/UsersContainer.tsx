import React from 'react'
import Users from './Users'
import {connect} from 'react-redux'
import {followAC, setCurrentPageAC, setUsersAC, setUsersTotalCountAC, unfollowAC} from '../../redux/usersReducer'

const mapStateToProps = (state: any) => (
    {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
)

const mapDispatchToProps = (dispatch: Function) => (
    {
        follow: (userId: number) => dispatch(followAC(userId)),
        unfollow: (userId: number) => dispatch(unfollowAC(userId)),
        setUsers: (users: any) => dispatch(setUsersAC(users)),
        setCurrentPage: (pageNumber: number) => dispatch(setCurrentPageAC(pageNumber)),
        setTotalUsersCount: (totalCount: number) => dispatch(setUsersTotalCountAC(totalCount))
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(Users)
