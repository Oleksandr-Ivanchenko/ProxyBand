export interface State {
  users: User[],
  posts: Post[],
  albums: Album[],
}

export interface Action {
  type: string;
  payLoad: string;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    }
  },
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  }
}

export interface Album {
  userId: number;
  id: number;
  title: string;
}


export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
