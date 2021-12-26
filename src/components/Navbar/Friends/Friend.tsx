import React from "react"

type FriendPropsType = {
    name: string
}
const Friend: React.FC<FriendPropsType> = (props) => {
    return <div>
        {props.name}
    </div>

}
export default  Friend
