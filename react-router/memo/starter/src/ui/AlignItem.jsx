import { Divider, ListItem, ListItemText } from '@mui/material';
import React from 'react';

export default function AlignItem({ item }) {
  return (
    <>
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={item.title}
          secondary={<React.Fragment>{item.body}</React.Fragment>}
        />
      </ListItem>
      <Divider variant="fullWidth" component="li" />
    </>
  );
}
