import React from 'react'
import Profile from './Profile'
import {connect} from 'react-redux'
import {getProfile, getStatus, updateStatus} from '../../redux/profileReducer'
import {useLocation, useNavigate, useParams} from 'react-router-dom'
import {withAuthRedirect} from '../../hoc/withAuthRedirect'
import {compose} from 'redux'

type MyProps = {
    profile: any,
    router: any,
    status: string,
    updateStatus: Function,
    getProfile: Function,
    getStatus: Function
}

type MyState = { value: string }

class ProfileContainer extends React.Component<MyProps, MyState> {
    componentDidMount() {
        let userId: number = this.props.router.params.userId

        if (!userId) {
            // userId = 2
            userId = 29760
        }

        this.props.getProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
        return (
            <Profile {...this.props}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}
            />
        )
    }
}

function withRouter(Component: any) {
    function ComponentWithRouterProp(props: any) {
        let location = useLocation()
        let navigate = useNavigate()
        let params = useParams()
        return (
            <Component
                {...props}
                router={{location, navigate, params}}
            />
        )
    }

    return ComponentWithRouterProp
}

let mapStateToProps = (state: any) => ({
    profile: state.profile.profile,
    status: state.profile.status
})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getProfile, getStatus, updateStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)
