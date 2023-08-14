import React from 'react'
import styles from './ProfileInfo.module.scss'
import Preloader from '../../common/Preloader/Preloader'
import ProfilePicture from '../../common/ProfilePicture/ProfilePicture'
import ProfileStatus from './ProfileStatus'

function ProfileInfo(props: any) {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <>
            <img className={styles.image} src="https://upload.wikimedia.org/wikipedia/commons/1/15/Cat_August_2010-4.jpg" alt="img"/>
            <div className={styles.profileInfo}>
                <ProfilePicture
                    user={props.profile}
                    width="150px"
                    height="150px"
                    borderRadius="30px"
                />
                <p className={styles.description}>
                    {props.profile.fullName}
                    <br/>
                    <ProfileStatus status={props.status}
                                   updateStatus={props.updateStatus}
                    />
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
