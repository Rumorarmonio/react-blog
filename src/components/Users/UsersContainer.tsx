import React from 'react'
import Users from './Users'
import {connect} from 'react-redux'
import axios from 'axios'
import Preloader from '../common/Preloader/Preloader'
import {follow, setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching, unfollow} from '../../redux/usersReducer'

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
    setTotalUsersCount: Function,
    toggleIsFetching: Function
}

type MyState = { value: string }

class UsersContainer extends React.Component<MyProps, MyState> {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        // TODO: Access has been blocked by CORS policy
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
            withCredentials: true,
        })
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {
            withCredentials: true
        })
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
            })
    }

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

export default connect(mapStateToProps,
    {
        follow,
        unfollow,
        setUsers,
        setCurrentPage,
        setTotalUsersCount,
        toggleIsFetching
    }
)(UsersContainer)
