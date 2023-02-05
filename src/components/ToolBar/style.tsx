import styled from "styled-components";
import {NavLink} from "react-router-dom";

export const ToolBarContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50px;
  transform: translateY(-50%);
  padding: 78px 36px;
  display: flex;
  flex-direction: column;
  gap: 101px;
  background: ${({theme}) => theme.colors.secondary};
  border-radius: 87px;
`;

export const IconLink = styled(NavLink)`
  transition: all .3s ease;
  
  &:hover {
    transform: scale(1.2);
  }
  
  #reels {
    rect {
      stroke: ${({theme}) => theme.colors.inversePrimary};
      fill: ${({theme}) => theme.colors.secondary};
    }
    path, line {
      fill: ${({theme}) => theme.colors.inversePrimary};
      stroke: ${({theme}) => theme.colors.inversePrimary};
    }
  }
  
  &.active {
    svg:not(#search-icon):not(#reels) {
      fill: ${({theme}) => theme.colors.inversePrimary};
    }

    #reels {
      rect {
        stroke: ${({theme}) => theme.colors.secondary};
        fill: ${({theme}) => theme.colors.inversePrimary};
      }
      path, line {
        fill: ${({theme}) => theme.colors.secondary};
        stroke: ${({theme}) => theme.colors.secondary};
      }
    }
    
    #search-icon {
      path {
        stroke-width: 5;
      }
    }
  }
`;