import React from 'react';
import {NavLink} from "react-router-dom";
import {LogoIcon} from "../../assets/img/icons/icons";
import styled from "styled-components";

const Logo = () => {
    return (
        <LogoLink to={"/"}>
            <LogoIcon/>
        </LogoLink>
    );
};

export const LogoLink = styled(NavLink)`
  margin: 0 auto;
  display: block;
  width: fit-content;
`;

export default Logo;