import React, { FC } from 'react';
import CloudinaryInputUi from '../CloudinaryInputUi/CloudinaryInputUi';
import { InputProps, useNotify } from 'react-admin';
import { useCloudinarySignatureQuery } from '@/types/sdk';
import axios, { AxiosError } from 'axios';
import { CloudinaryUploadInt } from '@/types/cloudinary-upload';
import { useController } from 'react-hook-form';

const CloudinaryInput: FC<InputProps> = ({ label, source }) => {
  const computedLabel = String(label ?? source);
  const { data: cloudSignature, loading } = useCloudinarySignatureQuery();

  const notify = useNotify();

  const {
    field: { onChange, value },
  } = useController({ name: source });

  const onImageSelected = async (image: File) => {
    if (!cloudSignature?.cloudinarySignature) {
      return;
    }

    const { cloudName, apiKey, publicId, signature, timestamp } =
      cloudSignature.cloudinarySignature;
    const url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;

    const formData = new FormData();
    formData.append('file', image);
    formData.append('api_key', apiKey);
    formData.append('public_id', publicId);
    formData.append('signature', signature);
    formData.append('timestamp', String(timestamp));
    formData.append('folder', 'menu');

    let data: CloudinaryUploadInt;

    try {
      ({ data } = await axios.post<CloudinaryUploadInt>(url, formData));
    } catch (error) {
      notify((error as AxiosError).message);
    }

    onChange(data!.public_id);
  };

  return (
    <div>
      <CloudinaryInputUi
        label={computedLabel}
        value={value}
        disabled={loading}
        onImageSelected={onImageSelected}
      />
    </div>
  );
};

export default CloudinaryInput;
