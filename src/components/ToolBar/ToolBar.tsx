import React from 'react';
import {IconLink, ToolBarContainer} from "./style";
import {HomeIcon, SearchIcon, LikeIcon, ProfileIcon, ReelsIcon} from "../../assets/img/icons/icons";

const ToolBar = () => {
    return (
        <ToolBarContainer>
            <IconLink to={"/"}>
                <HomeIcon/>
            </IconLink>
            <IconLink to={"/search"}>
                <SearchIcon/>
            </IconLink>
            <IconLink to={"/reels"}>
                <ReelsIcon/>
            </IconLink>
            <IconLink to={"/favorites"}>
                <LikeIcon/>
            </IconLink>
            <IconLink to={"/profile"}>
                <ProfileIcon/>
            </IconLink>
        </ToolBarContainer>
    );
};

export default ToolBar;