import React from 'react';
import {Container} from "./style";

type Props = {
    img: string
}

const PostImage = ({img}:Props) => {
    return (
        <Container>
            <img src={img} alt="image"/>
        </Container>
    );
};

export default PostImage;