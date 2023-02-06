import React from 'react';
import {Container, HoverBlock, HoverBlockText} from "./style";
import {CommentIcon, LikeIcon} from "../../assets/img/icons/icons";

type Props = {
    img: string,
    likes: number,
    comments: number
}

const PostImage = ({img, likes, comments}:Props) => {

    return (
        <Container>
            <img src={img} alt="image"/>
            <HoverBlock>
                <HoverBlockText>
                    <LikeIcon/> {likes}
                </HoverBlockText>
                <HoverBlockText>
                    <CommentIcon/> {comments}
                </HoverBlockText>
            </HoverBlock>
        </Container>
    );
};

export default PostImage;