import React from 'react'
import userPhoto from '../../../assets/images/user.png'

function ProfilePicture(props: any) {
    return (
        <img
            style={
                {
                    width: props.width,
                    height: props.height,
                    borderRadius: props.borderRadius,
                    objectFit: 'cover'
                }
            }
            src={props.user.photos.large ?? props.user.photos.small ?? userPhoto}
            alt="User"
        />
    )
}

export default ProfilePicture
