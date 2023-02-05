import React from 'react';
import styled from "styled-components";
import {ListNavigation, NavigationPosts} from "./style";
import {PostsIcon, ReelsIcon, SavedIcon} from "../../assets/img/icons/icons";
import {Outlet} from "react-router";

export const PostsGalleryContainer = styled.div`
  & > *:not(:last-child):not(:first-child) {
    margin-bottom: 22px;
  }
`;

const Posts = () => {

    return (
        <PostsGalleryContainer>
            <NavigationPosts>
                <ListNavigation to={"/profile/posts"}><PostsIcon/>posts</ListNavigation>
                <ListNavigation to={"/profile/reels"}><ReelsIcon/>reels</ListNavigation>
                <ListNavigation to={"/profile/saved-posts"}><SavedIcon/>saved</ListNavigation>
            </NavigationPosts>
            <Outlet/>
        </PostsGalleryContainer>
    );
};

export default Posts;