import React, {SyntheticEvent} from 'react'

type MyProps = {
    status: string,
    updateStatus: Function
}

type MyState = {
    editMode: boolean,
    status: string
}

class ProfileStatus extends React.Component<MyProps, MyState> {
    state = {
        editMode: false,
        status: this.props.status
    }

    // you can use arrow functions without using bind functions
    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (event: SyntheticEvent) => {
        this.setState({
            status: (event.currentTarget as HTMLTextAreaElement).value
        })
    }

    componentDidUpdate(prevProps: any, prevState: any, snapshot: any) {
        if (prevProps.status !== this.props.status) {
            this.setState(
                {status: this.props.status}
            )
        }

    }

    render() {
        return (
            <>
                {
                    this.state.editMode ?
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.props.status}/> :
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || '-------'}</span>
                }
            </>
        )
    }
}

export default ProfileStatus
