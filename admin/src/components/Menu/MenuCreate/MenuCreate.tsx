import CloudinaryInput from '@/components/Cloudinary/CloudinaryInput/CloudinaryInput';
import { Create, NumberInput, SimpleForm, TextInput } from 'react-admin';

export const MenuCreate = () => (
  <Create title="Create new item">
    <SimpleForm>
      <TextInput source="title" label="Title" fullWidth />
      <CloudinaryInput source="image" label="Image" />
      <NumberInput source="price" label="Price" fullWidth />
      <TextInput source="description" label="Description" fullWidth />
    </SimpleForm>
  </Create>
);
