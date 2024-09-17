import { configureStore } from "@reduxjs/toolkit";

// Local imports
import homeReducer from "../slice/homeReducer";

export const store = configureStore({
  reducer: {
    home: homeReducer,
    // search: searchReducer,
    // profile: profileReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
