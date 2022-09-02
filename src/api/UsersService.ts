import { User, Album, Post } from "../utils/interface";

const URL = 'https://jsonplaceholder.typicode.com';


export async function getUsers(): Promise<User[]> {
  const response = await fetch(`${URL}/users`);

  const user = await response.json();

  return user;
}

// we can use two different approach: 
// 1. load all post/albums firstly, and then filter if for each user by userId after click on 'Post' or 'Album'
// in this case we can specific selectors (suit to case when we don't have too much/albums posts)
// 2. (how it works now) Load data only after click on 'Post' or 'Album' for specific user

export async function getAlbums(userId: number): Promise<Album[]> {
  const response = await fetch(`${URL}/albums?userId=${userId}`);

  const albums = await response.json();

  return albums;
}

export async function getPosts(userId: string): Promise<Post[]> {
  const response = await fetch(`${URL}/posts?userId=${userId}`);

  const posts = await response.json();

  return posts;
  
}
