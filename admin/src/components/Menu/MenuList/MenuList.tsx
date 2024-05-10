import {
  Datagrid,
  List,
  TextField,
  FunctionField,
  EditButton,
  TextInput,
} from 'react-admin';
import MenuListExpand from '@/components/Menu/MenuList/MenuListExpand';
import { Menu } from '@/types/sdk';

const filters = [<TextInput source="title" label="Search by name" />];

export const MenuList = () => (
  <List filters={filters} exporter={false}>
    <Datagrid
      expand={<MenuListExpand />}
      rowClick="expand"
      bulkActionButtons={false}
    >
      <TextField source="title" />
      <FunctionField
        label="Price"
        render={(record: Menu) => `${record.price} $`}
      />
      <EditButton />
    </Datagrid>
  </List>
);
