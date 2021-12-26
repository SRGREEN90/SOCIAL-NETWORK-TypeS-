import React from 'react'
import s from './DialogsItems.module.css'
import {NavLink} from "react-router-dom";

type DialogsItemsPropsType = {
    name: string
    id: number
}
const DialogsItems: React.FC<DialogsItemsPropsType> = (props) => {
    let path = '/dialogs/' + props.id
    return (
        <div className={s.names}>
            <img src='https://miro.medium.com/fit/c/1360/1360/2*S4BvCsc_o_KwFCx-gmVTlg.png'/>

    <span>
        <NavLink className={s.name} to={path}>{props.name}</NavLink>
    </span>

        </div>
    )
}
export default DialogsItems
//