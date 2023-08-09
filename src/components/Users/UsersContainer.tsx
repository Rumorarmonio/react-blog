import React from 'react'
import Users from './Users'
import {connect} from 'react-redux'
import Preloader from '../common/Preloader/Preloader'
import {follow, setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching, unfollow} from '../../redux/usersReducer'
import {usersAPI} from '../../api/API'

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
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
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
