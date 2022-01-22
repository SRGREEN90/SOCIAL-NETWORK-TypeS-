import React from "react";
import audioLoader from '../Images/audioLoader.svg'

export const Preloader: React.FC = () => {
    return (
        <div>
            {<div style={{backgroundColor: 'red'}}>
                <img src={audioLoader}
                />
            </div>}
        </div>
    )
}