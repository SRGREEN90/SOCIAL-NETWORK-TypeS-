import React, {ChangeEvent, useState} from 'react';

import s from './ProfileInfo.module.css'

type ProfileStatusType = {
    status: string
    updateUserStatusThunkCreator: (status: string) => void
}

const ProfileStatusWithHooks = (props: ProfileStatusType) => {

    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);


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