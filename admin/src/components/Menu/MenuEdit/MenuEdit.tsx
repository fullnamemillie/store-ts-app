import { Edit, NumberInput, SimpleForm, TextInput } from 'react-admin';

export const MenuEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" disabled fullWidth />
      <TextInput source="title" fullWidth />
      <NumberInput source="price" fullWidth />
      <TextInput source="description" fullWidth />
      <TextInput source="image" fullWidth />
    </SimpleForm>
  </Edit>
);
