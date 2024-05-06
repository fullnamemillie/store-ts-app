import { Menu } from '@/types/sdk';
import { Typography } from '@mui/material';
import React from 'react';
import { useRecordContext } from 'react-admin';

const MenuListExpand = () => {
  const menuItem = useRecordContext<Menu>();
  return (
    <div>
      <Typography variant="body1">Description</Typography>
      <Typography variant="body2">{menuItem.description}</Typography>
    </div>
  );
};

export default MenuListExpand;
