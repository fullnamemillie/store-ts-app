import { cloudinary } from '@/services/cloudinary';
import { AdvancedImage } from '@cloudinary/react';
import { thumbnail } from '@cloudinary/url-gen/actions/resize';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Skeleton,
  Typography,
} from '@mui/material';
import { FC, useRef } from 'react';

export interface CloudinaryInputUiProps {
  label: string;
  value?: string;
  disabled: boolean;
  onImageSelected: (image: File) => void;
}

const CloudinaryInputUi: FC<CloudinaryInputUiProps> = ({
  label,
  value,
  disabled,
  onImageSelected,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const onFileInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (!e.target.files) {
      return;
    }

    const [file] = Array.from(e.target.files);

    onImageSelected(file);
  };

  const onUploadClick = () => {
    inputRef.current?.click();
  };

  const image = cloudinary.image(value || '123!');

  image.resize(thumbnail().width(233).height(288));

  return (
    <div style={{ marginBottom: '20px' }}>
      <input
        type="file"
        ref={inputRef}
        style={{ display: 'none' }}
        onChange={onFileInputChange}
      />
      <Card variant="outlined">
        <CardHeader title={label} />
        <CardContent>
          {value ? (
            <AdvancedImage cldImg={image} width={233} height={288} />
          ) : (
            <Skeleton variant="rectangular" width={233} height={288} />
          )}
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            style={{ backgroundColor: '#623e63', color: 'white' }}
            onClick={onUploadClick}
            disabled={disabled}
          >
            <Typography>Upload image</Typography>
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default CloudinaryInputUi;

// {
//   /* <img
//               src={value}
//               alt={`${label} upload`}
//               width={233}
//               height={288}
//               style={{ objectFit: 'cover', objectPosition: 'center' }}
//             /> */
// }
