import React, { useEffect, useState } from 'react';
import { Post } from '../../utils/interface';
import { getPosts } from '../../api/UsersService';
import { PostInfo } from '../PostInfo';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPostsSelector } from '../../store/selectors';
import { setPostsAction } from '../../store';
import './PostList.scss';
import { Typography } from '@mui/material';
import { SearchBar } from '../SearchBar/SearchBar';

export const PostList = () => {
  const [filters, setFilters] = useState({
    parametr: '',
    value: '',
  });
  const { userId } = useParams();
  const dispatch = useDispatch();
  const posts: Post[] = useSelector(getPostsSelector(filters.parametr, filters.value));

  useEffect(() => {
    if (userId) {
      getPosts(userId).then((newPosts)=> {
        dispatch(setPostsAction(newPosts));
      })
    }
  }, [userId]);

  return (
    <div className="PostList">
      <Typography variant="h3" className="PostList__title">
        Posts Page
      </Typography>
      <SearchBar setFilters={setFilters} fields={['title', 'body']} filters={filters}/>
      <div className="PostList__list">
        {!!posts.length && posts.map((post) => (
          <PostInfo post={post} />
        ))}
      </div>
    </div>
  )
};