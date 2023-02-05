import {configureStore, createStore} from "@reduxjs/toolkit";
import userReducer from "./slices/usersSlices";
import postsReducer from "./slices/postsSlices";

const store = configureStore({
    reducer: {
        users: userReducer,
        posts: postsReducer
    }
})


export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;