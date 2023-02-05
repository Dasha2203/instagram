import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type InitialState = {
    id: number,
    name: string
}

const initialState:InitialState[] = [
    {
        id: 1,
        name: 'dasha'
    }
]

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        addUser(state, action: PayloadAction<InitialState>) {
            state.push(action.payload);
        },
        removeUser(state, action: PayloadAction<number>) {
            state.map( item => action.payload !== item.id);
        }
    }
});

export const {addUser, removeUser} = usersSlice.actions;
export default usersSlice.reducer;