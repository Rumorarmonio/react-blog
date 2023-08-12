import React from 'react'
import Users from './Users'
import {connect} from 'react-redux'
import Preloader from '../common/Preloader/Preloader'
import {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingProgress,
    getUsers
} from '../../redux/usersReducer'
import {withAuthRedirect} from '../../hoc/WithAuthRedirect'
import Dialogs from '../Dialogs/Dialogs'

type MyProps = {
    users: any,
    totalUsersCount: number,
    pageSize: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: [],
    follow: Function,
    unfollow: Function,
    setCurrentPage: Function,
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
        users: state.users.users,
        pageSize: state.users.pageSize,
        totalUsersCount: state.users.totalUsersCount,
        currentPage: state.users.currentPage,
        isFetching: state.users.isFetching,
        followingInProgress: state.users.followingInProgress
    }
)

const AuthRedirectComponent = withAuthRedirect(UsersContainer)

export default connect(mapStateToProps,
    {
        follow,
        unfollow,
        setCurrentPage,
        toggleFollowingProgress,
        getUsers
    }
)(AuthRedirectComponent)
