import React, { FC } from 'react';

interface MenuItemProps {
  imagePath: string;
  title: string;
  description: string;
  price: number;
}

// const values: MenuItemProps = {
//   imagePath: '/assets/iphone-15/iphone-15-black.jpg',
//   title: 'iPhone 15',
//   description: 'A total powerhouse.',
//   price: 799,
// };

const MenuItem: FC<MenuItemProps> = ({
  imagePath,
  title,
  price,
  description,
}) => {
  return (
    <div className="w-72 shadow-xl rounded-2xl px-4 border mb-4 flex flex-col justify-center items-center">
      <img
        className="h-72 object-cover object-center pt-4"
        src={imagePath}
        alt="iphone-15"
      />
      <div>
        <h1 className="text-center pt-2 text-2xl font-semibold">{title}</h1>
        <p className="text-center text-lg py-2">{description}</p>
        <p className="text-center text-xl text-medium font-medium pb-3">
          From ${price}
        </p>
      </div>
    </div>
  );
};

export default MenuItem;
