import React from 'react'
import Friend from "./Friend";

type appStateFriendsTypeProps = {
    friends: Array<FriendsPropsType>
}
// type FriendsType = {
//     friends: Array<FriendsPropsType>
// }
type FriendsPropsType = {
    name: string
    id: number
}

const Friends: React.FC<appStateFriendsTypeProps> = (props) => {

    let friendsElements = props.friends.map(f => <Friend key={f.id} name={f.name}/>)

    return (
        <div>
            <div>
                {friendsElements}
            </div>
        </div>
    )
}
export default Friends