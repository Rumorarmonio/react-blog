import React from 'react'
import styles from './ProfileInfo.module.scss'

function ProfileInfo() {
    return (
        <>
            <div>
                <img className={styles.image} src="https://upload.wikimedia.org/wikipedia/commons/1/15/Cat_August_2010-4.jpg" alt="img"/>
            </div>
            <div className={styles.profileInfo}>
                <img className={styles.userImage}
                     src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fc284531-76aa-4dae-9432-cbfd2e4429c9/deum9j2-8ed85fab-048d-4679-be71-cb4a58e2b340.jpg/v1/fit/w_375,h_375,q_70,strp/commission_for_twitch_streamer__by_toszuca_deum9j2-375w.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcL2ZjMjg0NTMxLTc2YWEtNGRhZS05NDMyLWNiZmQyZTQ0MjljOVwvZGV1bTlqMi04ZWQ4NWZhYi0wNDhkLTQ2NzktYmU3MS1jYjRhNThlMmIzNDAuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.k-P9-C587HWVnXZpuK-UQ4J6aiAFEVqXHgsd1KH5AHc"
                     alt="User"/>
                <p className={styles.description}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi dolor libero molestias nostrum quas voluptate voluptatibus. Accusamus accusantium ad alias consequuntur cumque dignissimos distinctio dolorem ea eum excepturi facilis impedit ipsa iste itaque minima natus necessitatibus nisi numquam, quaerat quibusdam quidem, quis quo quos ratione reprehenderit tempora ullam, vel voluptatem!
                </p>
            </div>
        </>
    )
}

export default ProfileInfo
