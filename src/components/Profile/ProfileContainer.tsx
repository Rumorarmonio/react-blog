import React from 'react'
import Profile from './Profile'
import axios from 'axios'
import {connect} from 'react-redux'
import {setUserProfile} from '../../redux/profileReducer'

type MyProps = {
    profile: any,
    setUserProfile: Function
}

type MyState = { value: string }

class ProfileContainer extends React.Component<MyProps, MyState> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state: any) => ({
    profile: state.profilePage.profile
})

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer)
