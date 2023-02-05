import React, {useEffect, useMemo} from 'react';
import {Row} from "../UI";
import PostImage from "../PostImage/PostImage";
import styled from "styled-components";

const posts = [
    {
        id: 1,
        img: "https://images.unsplash.com/photo-1661961110218-35af7210f803?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    },
    {
        id: 2,
        img: "https://images.unsplash.com/photo-1675092809664-0040f37e6836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
    },
    {
        id: 3,
        img: "https://images.unsplash.com/photo-1675410200389-903e50c46cbf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    },
    {
        id: 4,
        img: "https://images.unsplash.com/photo-1661961110218-35af7210f803?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    },
    {
        id: 5,
        img: "https://images.unsplash.com/photo-1675092809664-0040f37e6836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
    },
    {
        id: 6,
        img: "https://images.unsplash.com/photo-1675410200389-903e50c46cbf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    },
    {
        id: 7,
        img: "https://images.unsplash.com/photo-1661961110218-35af7210f803?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    },
    {
        id: 8,
        img: "https://images.unsplash.com/photo-1675092809664-0040f37e6836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
    },
    {
        id: 9,
        img: "https://images.unsplash.com/photo-1675410200389-903e50c46cbf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    }
]

export const PostsGallery = styled.div`
  & > *:not(:last-child) {
    margin-bottom: 22px;
  }

`;

export const GalleryRow = styled(Row)`
  align-items: stretch;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  flex-shrink: 0;
  position: relative;
  gap: 22px;
`;

const Posts = () => {
    const chunksPosts = useMemo(() => chunksArray(posts, 4), [posts])

    function chunksArray(arr: any[], size: number) {
        const res = [];
        for (let i = 0; i < arr.length; i += size) {
            const chunk = arr.slice(i, i + size);
            res.push(chunk);
        }
        return res;
    }

    useEffect(() => {
        console.log('chunks')
        console.log(chunksPosts)
    }, [chunksPosts])

    return (
        <PostsGallery>
            {
                chunksPosts.map((rowPosts) => (
                    <GalleryRow>
                        {rowPosts.map((post, index) => (
                            <PostImage img={post.img} key={post.id}/>
                        ))}
                    </GalleryRow>
                ))
            }

        </PostsGallery>

    );
};


export default Posts;