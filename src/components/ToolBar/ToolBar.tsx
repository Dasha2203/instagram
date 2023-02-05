import React, {useMemo} from 'react';
import {IconLink, ToolBarContainer} from "./style";
import {HomeIcon, SearchIcon, LikeIcon, ProfileIcon, ReelsIcon} from "../../assets/img/icons/icons";
import {useLocation} from "react-router";

const ToolBar = () => {
    const location = useLocation();
    const isProfilePath = useMemo(() => {
        return location.pathname.split("/").includes("profile");
    }, [location])

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
            <IconLink to={"/profile/posts"} className={`${isProfilePath ? "active" : ''}`}>
                <ProfileIcon/>
            </IconLink>
        </ToolBarContainer>
    );
};

export default ToolBar;