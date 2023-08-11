import React from 'react'
import Users from './Users'
import {connect} from 'react-redux'
import Preloader from '../common/Preloader/Preloader'
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleFollowingProgress,
    toggleIsFetching,
    unfollow,
    getUsers
} from '../../redux/usersReducer'

type MyProps = {
    users: any,
    totalUsersCount: number,
    pageSize: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: [],
    follow: Function,
    unfollow: Function,
    setUsers: Function,
    setCurrentPage: Function,
    setTotalUsersCount: Function,
    toggleIsFetching: Function,
    toggleFollowingProgress: Function
    getUsers: Function
}

type MyState = { value: string }

class UsersContainer extends React.Component<MyProps, MyState> {
    componentDidMount = () => this.props.getUsers(this.props.currentPage, this.props.pageSize)

    onPageChanged = (pageNumber: number) => this.props.getUsers(pageNumber, this.props.pageSize)

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       onPageChanged={this.onPageChanged}
                       users={this.props.users}
                       follow={this.props.follow}
                       unfollow={this.props.unfollow}
                       toggleFollowingProgress={this.props.toggleFollowingProgress}
                       followingInProgress={this.props.followingInProgress}
                />
            </>
        )
    }
}

const mapStateToProps = (state: any) => (
    {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
)

export default connect(mapStateToProps,
    {
        follow,
        unfollow,
        setUsers,
        setCurrentPage,
        setTotalUsersCount,
        toggleIsFetching,
        toggleFollowingProgress,
        getUsers
    }
)(UsersContainer)
