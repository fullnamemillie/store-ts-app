import { Create, NumberInput, SimpleForm, TextInput } from 'react-admin';

export const MenuCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="id" disabled />
      <TextInput source="title" />
      <NumberInput source="price" />
      <TextInput source="description" />
      <TextInput source="image" />
    </SimpleForm>
  </Create>
);
