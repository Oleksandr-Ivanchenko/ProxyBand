import React, { FC, useState } from 'react';
import './UserInfo.scss';
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Link as LinkMui,
  Typography
} from '@mui/material';
import { Link } from 'react-router-dom';
import { User } from '../../utils/interface';
import { ModalWindow } from '../ModalWindow';

interface UserInfoProps {
  user: User
}

export const UserInfo: FC<UserInfoProps> = ({ 
  user
}: UserInfoProps) => {
  const {
    id,
    name,
    username,
    email,
    address,
    website,
  } = user;
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Card sx={{ maxWidth: 345 }} key={id}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <p>User Name: {username}</p>
          <p>City: {address.city}</p>
          <p>Email: {email}</p>
          <LinkMui href={`http://${website}`} target="_blank" rel="noopener noreferrer">
            Link to Website
          </LinkMui>
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`posts/${id}`} className="User__link">
          <Button size="small">Posts</Button>
        </Link>
        <Button size="small" onClick={() => setOpen(true)}>
          Albums
        </Button>
      </CardActions>
      <ModalWindow 
        onClose={() => setOpen(false)}
        userId={id}
        open={open}
      />
    </Card>
  );
}
