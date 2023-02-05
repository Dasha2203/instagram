import styled from "styled-components";
import {Row} from "../UI";

export const Name = styled.h4`
  color: ${({theme}) => theme.colors.black};
  font-size: ${({theme}) => theme.fontSizes.black};
  font-weight: 600;
  line-height: 48px;
`;

export const Description = styled.p`
  margin-top: 16px;
  width: 100%;
  max-width: 369px;
  font-weight: 400;
  font-size: ${({theme}) => theme.fontSizes.medium};
  line-height: 24px;
  letter-spacing: 0.01em;
  color: ${({theme}) => theme.colors.black};

`;



export const CounterBlock = styled.div`
  color: ${({theme}) => theme.colors.black};
  font-weight: 400;
  
  span {
    font-weight: 700;
  }
`;

export const ProfileInfoContainer = styled.div`
  ${Row} {
    gap: 40px;
  }
`;