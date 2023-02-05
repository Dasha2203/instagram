import styled from "styled-components";
import {NavLink} from "react-router-dom";

export const ListNavigation = styled(NavLink)`
  position: relative;
  color: ${(props) => props.theme.colors.darkSecondary};
  text-decoration: none;
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  text-transform: uppercase;
  
  &::after {
    content: "";
    position: absolute;
    bottom: -9px;
    left: 50%;
    transform: translateX(-50%);
    display: block;
    width: 110%;
    height: 4px;
    border-radius: 43px;
    background-color: transparent;
    transition: all .3s ease;
  }

  &:hover {
    svg {
      transform: scale(1.1);
    }
  }

  &.active {
    color: ${({theme}) => theme.colors.active};

    &::after {
      background-color: ${({theme}) => theme.colors.active};
    }

    svg {
      &#reels {
        rect {
          stroke: ${({theme}) => theme.colors.active};
          fill: transparent;
        }

        path, line {
          fill: ${({theme}) => theme.colors.active};
          stroke: ${({theme}) => theme.colors.active};
        }
      }

      &#posts {
        path {
          fill: ${({theme}) => theme.colors.active};
        }
      }

      &#saved {
        path {
          stroke: ${({theme}) => theme.colors.active};
        }
      }
    }

  }

  svg {
    margin-right: 8px;
    max-width: 31px;
    transition: all .3s ease;

    &#reels {
      rect {
        stroke: ${({theme}) => theme.colors.darkSecondary};
        fill: transparent;
      }

      path, line {
        fill: ${({theme}) => theme.colors.darkSecondary};
        stroke: ${({theme}) => theme.colors.darkSecondary};
      }
    }

    &#posts {
      path {
        fill: ${({theme}) => theme.colors.darkSecondary};
      }
    }

    &#saved {
      path {
        stroke: ${({theme}) => theme.colors.darkSecondary};
      }
    }
  }
`;

export const NavigationPosts = styled.div`
  padding: 31px 0;
  display: flex;
  justify-content: center;
  gap: 77px;
`;