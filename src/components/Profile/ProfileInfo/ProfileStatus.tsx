import React from 'react'

type MyProps = {
    status: string
}

type MyState = {
    editMode: boolean
}

class ProfileStatus extends React.Component<MyProps, MyState> {
    state = {
        editMode: false,
        title: 'Yo'
    }

    // you can use arrow functions without using bind functions
    activateEditMode() {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode() {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <>
                {
                    this.state.editMode ?
                        <input autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} value={this.props.status}/> :
                        <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>
                }
            </>
        )
    }
}

export default ProfileStatus
