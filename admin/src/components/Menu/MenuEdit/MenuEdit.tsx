import { Edit, NumberInput, SimpleForm, TextInput } from 'react-admin';
import MenuEditTitle from './MenuEditTitle';

export const MenuEdit = () => (
  <Edit title={<MenuEditTitle />}>
    <SimpleForm>
      <TextInput source="title" label="Title" fullWidth />
      <NumberInput source="price" label="Price" fullWidth />
      <TextInput source="description" label="Description" fullWidth />
      <TextInput source="image" label="Image" fullWidth />
    </SimpleForm>
  </Edit>
);
