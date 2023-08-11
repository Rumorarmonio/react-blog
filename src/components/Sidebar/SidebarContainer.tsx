import React from 'react'
import {connect} from 'react-redux'
import Preloader from '../common/Preloader/Preloader'
// TODO: should i do this?
import {getUsers} from '../../redux/usersReducer'
import Sidebar from './Sidebar'
import styles from './Sidebar.module.scss'

type MyProps = {
    users: any,
    pageSize: number,
    currentPage: number,
    isFetching: boolean,
    getUsers: Function,
}

type MyState = { value: string }

class SidebarContainer extends React.Component<MyProps, MyState> {
    componentDidMount = () => this.props.getUsers(this.props.currentPage, this.props.pageSize)

    render = () =>
        (
            <aside className={styles.sidebar}>
                <Sidebar users={this.props.users}/>
                {this.props.isFetching ? <Preloader/> : null}
            </aside>
        )

}

const mapStateToProps = (state: any) => (
    {
        users: state.sidebar.users,
        pageSize: state.sidebar.pageSize,
        currentPage: state.sidebar.currentPage,
        isFetching: state.sidebar.isFetching
    }
)

export default connect(mapStateToProps,
    {
        getUsers,
    }
)(SidebarContainer)
