import React from 'react'
import Profile from './Profile'
import {connect} from 'react-redux'
import {getProfile} from '../../redux/profileReducer'
import {useLocation, useNavigate, useParams} from 'react-router-dom'
import {withAuthRedirect} from '../../hoc/withAuthRedirect'
import {compose} from 'redux'

type MyProps = {
    profile: any,
    router: any,
    getProfile: Function
}

type MyState = { value: string }

class ProfileContainer extends React.Component<MyProps, MyState> {
    componentDidMount() {
        let id: number = this.props.router.params.userId

        if (!id) {
            id = 2
        }

        this.props.getProfile(id)
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
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
    profile: state.profilePage.profile,
})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)
