import React from 'react';
import {CounterBlock, Description, Name, ProfileInfoContainer} from "./style";
import {Row} from "../UI";

type Props = {
    name: string
}

const ProfileInfo = ({name} : Props) => {
    return (
        <ProfileInfoContainer>
            <Name>{name}</Name>
            <Row>
                <CounterBlock>
                    <span>225</span> Posts
                </CounterBlock>
                <CounterBlock>
                    <span>225</span> Followers
                </CounterBlock>
                <CounterBlock>
                    <span>225</span> Following
                </CounterBlock>
            </Row>
            <Description>
                Bio: It always seems impossible until it
                is done. 💕 Nature lover 🥀🍃🏔 UI/ UX Designer 🖥
            </Description>

        </ProfileInfoContainer>
    );
};

export default ProfileInfo;