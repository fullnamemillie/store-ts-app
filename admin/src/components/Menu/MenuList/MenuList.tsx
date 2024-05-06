import {
  Datagrid,
  List,
  NumberField,
  TextField,
  FunctionField,
} from 'react-admin';
import MenuListExpand from '@/components/Menu/MenuList/MenuListExpand';
import { Menu } from '@/types/sdk';

export const MenuList = () => (
  <List>
    <Datagrid expand={<MenuListExpand />} rowClick="expand">
      <TextField source="title" />
      <FunctionField
        label="Price"
        render={(record: Menu) => `${record.price} $`}
      />
      <NumberField source="price" />
    </Datagrid>
  </List>
);
