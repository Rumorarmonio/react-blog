import React from 'react'
import Users from './Users'
import {connect} from 'react-redux'
import {followAC, setCurrentPageAC, setUsersAC, setUsersTotalCountAC, unfollowAC} from '../../redux/usersReducer'
import axios from 'axios'
import Preloader from '../common/Preloader/Preloader'

type MyProps = {
    users: any,
    totalUsersCount: number,
    pageSize: number,
    currentPage: number,
    isFetching: boolean,
    follow: Function,
    unfollow: Function,
    setUsers: Function,
    setCurrentPage: Function,
    setTotalUsersCount: Function
}

type MyState = { value: string }

class UsersContainer extends React.Component<MyProps, MyState> {
    componentDidMount() {
        // TODO: Access has been blocked by CORS policy
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return (
            <>
                { this.props.isFetching ? <Preloader /> : null }
                <Users totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       onPageChanged={this.onPageChanged}
                       users={this.props.users}
                       follow={this.props.follow}
                       unfollow={this.props.unfollow}
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
        isFetching: state.usersPage.isFetching
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

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
