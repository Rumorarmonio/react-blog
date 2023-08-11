import React from 'react'
import Header from './Header'
import {connect} from 'react-redux'
import {getAuthUserData} from '../../redux/authReducer'

type MyProps = {
    getMe: Function
}

type MyState = { value: string }

class HeaderContainer extends React.Component<MyProps, MyState> {
    componentDidMount = () => this.props.getMe()

    render = () => <Header {...this.props}/>
}

const mapStateToProps = (state: any) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

export default connect(mapStateToProps, {getMe: getAuthUserData})(HeaderContainer)
