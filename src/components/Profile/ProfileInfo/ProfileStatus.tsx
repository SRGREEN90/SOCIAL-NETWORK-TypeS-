import React, {ChangeEvent} from 'react';

type ProfileStatusType = {
    status: string
    updateUserStatusThunkCreator: (status: string) => void
}

class ProfileStatus extends React.Component<ProfileStatusType> {
    // statusInputRef = React.createRef<HTMLTextAreaElement>()
    state = {
        editMode: false,
        status: this.props.status
    }
    activateEditMode = () => {
        this.setState({   // setState является асинхронной функцией(методом)
            editMode: true
        })
    }
    deActivateEditMode = () => {
        this.setState({   // setState является асинхронной функцией(методом)
            editMode: false
        })
        this.props.updateUserStatusThunkCreator(this.state.status)
    }
    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
                 status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps: Readonly<ProfileStatusType>, prevState: Readonly<{}>, snapshot?: any) {
        if(prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }


    render() {

        return <div>
            {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status || 'NO STATUS' }</span>
                </div>}
            {this.state.editMode &&
                <div>
                    <input
                        onChange={this.onStatusChange}
                        autoFocus={true}
                        onBlur={this.deActivateEditMode}
                        value={this.state.status}
                    />
                </div>}
        </div>
    }
}

export default ProfileStatus