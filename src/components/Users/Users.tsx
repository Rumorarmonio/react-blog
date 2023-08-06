import React from 'react'
import styles from './Users.module.scss'
import axios from 'axios'
import userPhoto from '../../assets/images/user.png'

type MyProps = {
    users: any,
    totalUsersCount: number,
    pageSize: number,
    currentPage: number,
    follow: Function,
    unfollow: Function,
    setUsers: Function,
    setCurrentPage: Function,
    setTotalUsersCount: Function
}

type MyState = { value: string }

class Users extends React.Component<MyProps, MyState> {
    componentDidMount() {
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
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        return (
            <div>
                <div>
                    {pages.map(page => {
                        if (page === 1 || page === pagesCount || (page >= this.props.currentPage - 2 && page <= this.props.currentPage + 2)) {
                            return (
                                <span
                                    key={page}
                                    className={this.props.currentPage === page ? styles.active : styles.inactive}
                                    onClick={() => {
                                        this.onPageChanged(page)
                                    }}>
                                    {page + ' '}
                                </span>
                            )
                        } else if (page === this.props.currentPage - 3 || page === this.props.currentPage + 3) {
                            return <span key={page}>... </span>
                        } else {
                            return null
                        }
                    })}
                </div>
                {
                    this.props.users.map((user: any) => <div key={user.id}>
                <span>
                    <div>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {
                            user.followed
                                ? <button onClick={() => this.props.unfollow(user.id)}>Unfollow</button>
                                : <button onClick={() => this.props.follow(user.id)}>Follow</button>
                        }
                    </div>
                </span><span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status != null ? user.status : 'Hello World!'}</div>
                    </span>
                    <span>
                        <div>{'user.location.country'}</div>
                        <div>{'user.location.city'}</div>
                    </span>
                </span>
                        </div>
                    )
                }
            </div>
        )
    }
}

export default Users