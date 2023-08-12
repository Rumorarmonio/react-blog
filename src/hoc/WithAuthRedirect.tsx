import React from 'react'
import {Navigate} from 'react-router-dom'
import {connect} from 'react-redux'

let mapStateToPropsForRedirect = (state: any) => ({
    isAuth: state.auth.isAuth
})

export const withAuthRedirect = (Component: any) => {
    type MyProps = { isAuth: boolean }

    type MyState = { value: string }

    class RedirectComponent extends React.Component<MyProps, MyState> {
        render() {
            if (!this.props.isAuth) {
                return (
                    <Navigate to="/login"/>
                )
            }

            return (
                <Component {...this.props}/>
            )
        }
    }

    const ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)

    return ConnectedAuthRedirectComponent
}
