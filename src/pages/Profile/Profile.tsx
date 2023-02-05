import React from 'react';
import Page from "../../components/Page/Page";
import {ProfileHeader} from "./style";
import Avatar from "../../components/Avatar/Avatar";
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";
import Posts from "../../components/Posts/Posts";

const Profile = () => {
    return (
        <Page>
            <ProfileHeader>
                <Avatar img={'https://www.teahub.io/photos/full/180-1806004_keira-knightley-front-face.jpg'}/>
                <ProfileInfo name={'My name'}/>
            </ProfileHeader>
            <Posts/>
        </Page>
    );
};

export default Profile;