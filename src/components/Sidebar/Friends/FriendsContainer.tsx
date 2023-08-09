import React from 'react'
import Friends from './Friends'
import {connect} from 'react-redux'
import axios from 'axios'
import Preloader from '../../common/Preloader/Preloader'
import {setUsers, toggleIsFetching} from '../../../redux/friendsReducer'
import {usersAPI} from '../../../api/API'

type MyProps = {
    users: any,
    pageSize: number,
    isFetching: boolean,
    setUsers: Function,
    toggleIsFetching: Function
}

type MyState = { value: string }

class FriendsContainer extends React.Component<MyProps, MyState> {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        // TODO: isFetching is always false
        usersAPI.getUsers(1, 6)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
            })
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Friends friends={this.props.users}/>
            </>
        )
    }
}

const mapStateToProps = (state: any) => (
    {
        users: state.friendsBlock.users,
        pageSize: state.friendsBlock.pageSize,
        isFetching: state.friendsBlock.isFetching
    }
)

export default connect(mapStateToProps,
    {
        setUsers,
        toggleIsFetching
    }
)(FriendsContainer)
