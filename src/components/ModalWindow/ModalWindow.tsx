import React, { useState, useEffect, Fragment } from 'react';
import { List, ListItem, Divider, ListItemText, Dialog, Typography, Button } from '@mui/material';
import { Album } from '../../utils/interface';
import { getAlbums } from '../../api/UsersService';
import './ModalWindow.scss';


interface ModalWindowProps {
  open: boolean;
  onClose: () => void;
  userId: number;
}

export const ModalWindow = (props: ModalWindowProps) => {
  const { onClose, open, userId } = props;
  const [albums, setAlbums] = useState<Album[]>([])

  useEffect(() => {
    if(open) {
      getAlbums(userId).then((newAlbums) => {
        setAlbums(newAlbums)
      })
    }
  }, [userId, open]);

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open} className="Modal">
      <Typography variant="h5" className="Modal__title">
        Albums
      </Typography>
      <Divider />
      <List sx={{ pt: 0 }}>
        {open && albums.map((album) => (
          <Fragment key={album.id}>
            <ListItem button>
              <ListItemText primary={album.title} />
            </ListItem>
            <Divider />
          </Fragment>
        ))}
        <Button size="small" onClick={handleClose} className="Modal__button">
          Ok
        </Button>
      </List>
    </Dialog>
  );
}