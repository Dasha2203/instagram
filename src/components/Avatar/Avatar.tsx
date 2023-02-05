import React from 'react';
import {AvatarContainer} from "./style";

type Props = {
    img: string
}

const Avatar = ({ img } : Props) => {
    return (
        <AvatarContainer>
            <img src={img} alt="Profile image"/>
        </AvatarContainer>
    );
};

export default Avatar;