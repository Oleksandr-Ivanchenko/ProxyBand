import React, { FC } from 'react';
import {
  Card,
  CardContent,
  Typography
} from '@mui/material';
import { Post } from '../../utils/interface';
import './PostInfo.scss';

interface PostInfoProps {
  post: Post
}

export const PostInfo: FC<PostInfoProps> = ({ 
  post
}: PostInfoProps) => {
  const {
    title,
    body,
  } = post;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" className="Post__body">
         {body}
        </Typography>
      </CardContent>
    </Card>
  );
}
