import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';

function TodoItem({ text, icon, handleFuncComplited, className }) {
  return (
    <ListItem sx={{ p: 0, mb: '10px', borderRadius: '5px' }} onClick={handleFuncComplited} className={className}>
      <ListItemButton sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {text} {icon}
      </ListItemButton>
    </ListItem>
  );
}

export default TodoItem;