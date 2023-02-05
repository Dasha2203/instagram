import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type InitialState = {
    id: number,
    title: string,
    text: string
}

const initialState:InitialState[] = [
    {
        id: 1,
        title: 'Post1',
        text: 'random text'
    }
]

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        createPost(state, action: PayloadAction<InitialState>) {
            state.push(action.payload);
        },
        removePost(state, action: PayloadAction<number>) {
            state.map( item => action.payload !== item.id);
        }
    }
});

export const {createPost, removePost} = postsSlice.actions;
export default postsSlice.reducer;