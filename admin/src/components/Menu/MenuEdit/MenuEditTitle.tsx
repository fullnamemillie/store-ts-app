import { Menu } from '@/types/sdk';
import { Typography } from '@mui/material';
import React from 'react';
import { useRecordContext } from 'react-admin';

const MenuEditTitle = () => {
  const menuItem = useRecordContext<Menu>();

  if (!menuItem) {
    return null;
  }

  return (
    <div>
      <Typography>{menuItem.title}</Typography>
    </div>
  );
};

export default MenuEditTitle;
