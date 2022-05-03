import React, {ChangeEvent, useEffect, useState} from 'react';

type ProfileStatusType = {
    status: string
    updateUserStatusThunkCreator: (status: string) => void
}

const ProfileStatusWithHooks = (props: ProfileStatusType) => {

    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    useEffect(() =>{
        setStatus(props.status)
    },[props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deActivateEditMode = () => {
        setEditMode(false)
       props.updateUserStatusThunkCreator(status)
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
            setStatus(e.currentTarget.value)
    }

    return <div>
        {!editMode &&
            <div>
                <span onDoubleClick={activateEditMode}>{props.status || 'NO STATUS'}</span>
            </div>}
        {
            editMode &&
            <div>
                <input
                    onChange={onStatusChange}
                    autoFocus={true}
                    onBlur={deActivateEditMode}
                    value={status}
                />
            </div>
        }
    </div>
}
export default ProfileStatusWithHooks