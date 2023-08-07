import React from 'react'
import styles from './Users.module.scss'
import userPhoto from '../../assets/images/user.png'

function Users(props: any) {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div className={styles.container}>
            <div className={styles.pagination}>
                {pages.map(page => {
                        if (page === 1 || page === pagesCount || (page >= props.currentPage - 2 && page <= props.currentPage + 2)) {
                            return (
                                <span
                                    key={page}
                                    className={props.currentPage === page ? styles.active : styles.inactive}
                                    onClick={() => {
                                        props.onPageChanged(page)
                                    }}>
                                    {page + ' '}
                                </span>
                            )
                        } else if (page === props.currentPage - 3 || page === props.currentPage + 3) {
                            return (
                                <span key={page}>... </span>
                            )
                        } else {
                            return null
                        }
                    }
                )}
            </div>
            <div className={styles.users}>
                {
                    props.users.map((user: any) =>
                        <div key={user.id}>
                            <div className={styles.user}>
                                <img src={user.photos.small != null ? user.photos.small : userPhoto} className={styles.userPhoto} alt="User"/>
                                <div className={styles.userInfo}>
                                    <div className={styles.userHeader}>
                                        <h3 className={styles.userName}>{user.name}</h3>
                                        <span className={styles.location}>{'(user.location.country,'} {'user.location.city)'}</span>
                                    </div>
                                    <p>{user.status != null ? user.status : 'Hello World!'}</p>
                                    {
                                        user.followed
                                            ? <button className={styles.button} onClick={() => props.unfollow(user.id)}>Unfollow</button>
                                            : <button className={styles.button} onClick={() => props.follow(user.id)}>Follow</button>
                                    }
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Users