import styled from "styled-components";

export const HoverBlockText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme}) => theme.colors.primary};
  font-size: ${({theme}) => theme.fontSizes.medium};
  
  svg {
    margin-right: 5px;
  }
`;

export const HoverBlock = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  opacity: 0;
  visibility: hidden;
  transition: all .3s ease;
  
  svg {
    width: 20px;
    path {
      stroke: ${({theme}) => theme.colors.primary};
      fill: ${({theme}) => theme.colors.primary};
    }
  }
  
  & > *:not(:last-child) {
    margin-right: 10px;
  }
`;

export const Container = styled.div`
  position: relative;
  flex: 1 0 0;
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 10px;
  overflow: hidden;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  
  &:hover {
    ${HoverBlock} {
      opacity: 1;
      visibility: visible;
    }
  }
`;

