import { Post, State } from '../utils/interface';

export const getPostsSelector = (parametr?: string, value?: string) =>  {
  return value 
  ? (state: State) => {
    return state.posts.filter(post => post[parametr].toLowerCase().replace(/\n/g, ' ')
    .includes(value.toLowerCase()))
  }
  : (state: State) => state.posts
};
export const getAlbumsSelector = (state: State) => state.albums;
export const getUsersSelector = (parametr?: string, value?: string) => {
  return value 
  ? (state: State) => {
    return state.users.filter(user => user[parametr].toLowerCase()
    .includes(value.toLowerCase()))
  }
  : (state: State) => state.users
};

// we can use two different approach: 
// 1. load all post/albums firstly, and then filter if for each user by userId after click on 'Post' or 'Album'
// in this case we can use this selectors (suit to case when we don't have too much/albums posts)
// 2. (how it works now) Load data only after click on 'Post' or 'Album' for specific user
export const getUserPosts = (userId: number) => {
  return (state: State) => {
    return state.posts.filter(post => post.userId === userId);
  };
};

export const getUserAlbums = (userId: number) => {
  return (state: State) => {
    return state.albums.filter(post => post.userId === userId);
  };
};