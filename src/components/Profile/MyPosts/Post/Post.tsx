import React from 'react'
import styles from './Post.module.scss'

function Post(props: any) {
    return (
        <div className={styles.post}>
            <img className={styles.avatar}
                 src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fc284531-76aa-4dae-9432-cbfd2e4429c9/deum9j2-8ed85fab-048d-4679-be71-cb4a58e2b340.jpg/v1/fit/w_375,h_375,q_70,strp/commission_for_twitch_streamer__by_toszuca_deum9j2-375w.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcL2ZjMjg0NTMxLTc2YWEtNGRhZS05NDMyLWNiZmQyZTQ0MjljOVwvZGV1bTlqMi04ZWQ4NWZhYi0wNDhkLTQ2NzktYmU3MS1jYjRhNThlMmIzNDAuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.k-P9-C587HWVnXZpuK-UQ4J6aiAFEVqXHgsd1KH5AHc"/>
            {props.message}
            <div>
                <span>like ({props.likes})</span>
            </div>

        </div>
    )
}

export default Post
