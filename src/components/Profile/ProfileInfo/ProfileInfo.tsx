import React from 'react'
import styles from './ProfileInfo.module.scss'
import Preloader from '../../common/Preloader/Preloader'

function ProfileInfo(props: any) {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <>
            {/*TODO: pfp component*/}
            <img className={styles.image} src="https://upload.wikimedia.org/wikipedia/commons/1/15/Cat_August_2010-4.jpg" alt="img"/>
            <div className={styles.profileInfo}>
                <img className={styles.userImage} src={props.profile.photos.large} alt="User"/>
                <p className={styles.description}>
                    {props.profile.fullName}
                    <br/>
                    {props.profile.aboutMe}
                    <br/>
                    {props.profile.lookingForAJob ? 'Ищу работу' : 'Не ищу работу'}
                    <br/>
                    {props.profile.lookingForAJobDescription}
                    <br/>
                    {/*TODO: display all fields*/}
                    {/*{JSON.stringify(props.profile.contacts)}*/}
                    {/*{props.profile.contacts.map((value: string) => value)}*/}
                </p>
            </div>
        </>
    )
}

export default ProfileInfo
