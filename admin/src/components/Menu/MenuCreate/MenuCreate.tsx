import { Create, NumberInput, SimpleForm, TextInput } from 'react-admin';

export const MenuCreate = () => (
  <Create title="Create new item">
    <SimpleForm>
      <TextInput source="title" label="Title" fullWidth />
      <NumberInput source="price" label="Price" fullWidth />
      <TextInput source="description" label="Description" fullWidth />
      <TextInput source="image" label="Image" fullWidth />
    </SimpleForm>
  </Create>
);
