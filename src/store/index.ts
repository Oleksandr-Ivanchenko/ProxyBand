import { configureStore, createAction, createReducer } from '@reduxjs/toolkit';
import {
  Album,
  Post,
  State,
  User,
} from '../utils/interface';

enum ActionType {
  SET_USERS = 'SET_USERS',
  SET_POSTS = 'SET_POSTS',
  SET_ALBUMS = 'SET_ALBUMS',
}

const initialState: State = {
  users: [],
  posts: [],
  albums: [],
};

export const setUsersAction = createAction<User[]>(ActionType.SET_USERS);
export const setPostsAction = createAction<Post[]>(ActionType.SET_POSTS);
export const setAlbumsAction = createAction<Album[]>(ActionType.SET_ALBUMS);

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(setUsersAction, (state, action) => {
    state.users = action.payload;
  });
  builder.addCase(setPostsAction, (state, action) => {
    state.posts = action.payload;
  });
  builder.addCase(setAlbumsAction, (state, action) => {
    state.albums = action.payload;
  });
});

export const store = configureStore({ reducer });