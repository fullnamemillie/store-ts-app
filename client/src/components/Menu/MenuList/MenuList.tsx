import React, { FC } from 'react';
import MenuItem from '../MenuItem/MenuItem';
import { Iphone } from '../../../types/iphone';

interface MenuListProps {
  iphones: Iphone[];
}

const MenuList: FC<MenuListProps> = ({ iphones }) => {
  return (
    <div className="flex flex-wrap gap-5">
      {iphones.map(({ image, ...iphone }) => (
        <div className="">
          <MenuItem
            key={iphone.id}
            imagePath={`/assets/iphones/${image}`}
            {...iphone}
          />
        </div>
      ))}
    </div>
  );
};

export default MenuList;
