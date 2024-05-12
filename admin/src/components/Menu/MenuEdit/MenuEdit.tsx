import { Edit, NumberInput, SimpleForm, TextInput } from 'react-admin';
import MenuEditTitle from './MenuEditTitle';
import CloudinaryInput from '@/components/Cloudinary/CloudinaryInput/CloudinaryInput';

export const MenuEdit = () => (
  <Edit title={<MenuEditTitle />}>
    <SimpleForm>
      <TextInput source="title" label="Title" fullWidth />
      <CloudinaryInput source="image" label="Image" />
      <NumberInput source="price" label="Price" fullWidth />
      <TextInput source="description" label="Description" fullWidth />
    </SimpleForm>
  </Edit>
);
