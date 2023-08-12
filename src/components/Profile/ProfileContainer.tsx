import React from 'react'
import Profile from './Profile'
import {connect} from 'react-redux'
import {getProfile} from '../../redux/profileReducer'
import {Navigate, useLocation, useNavigate, useParams} from 'react-router-dom'

type MyProps = {
    profile: any,
    router: any,
    isAuth: boolean,
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
        if (!this.props.isAuth) {
            return (
                <Navigate to='/login'/>
            )
        }

        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state: any) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})

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

export default connect(mapStateToProps, {getProfile})(withRouter(ProfileContainer))
