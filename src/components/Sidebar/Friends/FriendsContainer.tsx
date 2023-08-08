import React from 'react'
import Friends from './Friends'
import {connect} from 'react-redux'
import axios from 'axios'
import Preloader from '../../common/Preloader/Preloader'
import {setUsers, toggleIsFetching} from '../../../redux/friendsReducer'

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
        // TODO: isFetching is always false
        this.props.toggleIsFetching(false)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=1&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
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
