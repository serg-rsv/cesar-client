import { useState } from 'react';
import {
  Box,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
  Button,
  SelectChangeEvent,
} from '@mui/material';
import { INewMessage } from 'types/types';

interface IEncryptionFormProps {
  isLoading: boolean;
  onSubmit: (newMessage: INewMessage) => void;
}

const EncryptionForm = ({ onSubmit, isLoading }: IEncryptionFormProps) => {
  const [text, setText] = useState('');
  const [encryptionType, setEncryptionType] = useState<'cesar' | 'xor'>(
    'cesar'
  );
  const [key, setKey] = useState('');

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleEncryptionTypeChange = (event: SelectChangeEvent<string>) => {
    if (event.target.value === 'cesar' || event.target.value === 'xor') {
      setEncryptionType(event.target.value);
    }
  };

  const handleKeyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKey(event.target.value);
  };

  const renderKeyInput = () => {
    switch (encryptionType) {
      case 'cesar': {
        return (
          <TextField
            label="Key"
            type="number"
            value={key}
            onChange={handleKeyChange}
            required
          />
        );
      }
      case 'xor': {
        return (
          <TextField
            label="Key"
            value={key}
            onChange={handleKeyChange}
            required
          />
        );
      }
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({ text, type: encryptionType, key });
    setText('');
    setKey('');
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
    >
      <TextField
        label="Text"
        value={text}
        onChange={handleTextChange}
        multiline
        minRows={3}
        required
      />
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gridGap: '16px',
          alignItems: 'center',
        }}
      >
        <FormControl>
          <InputLabel required sx={{ backgroundColor: 'white', pl: 1, pr: 1 }}>
            Encryption Type
          </InputLabel>
          <Select value={encryptionType} onChange={handleEncryptionTypeChange}>
            <MenuItem value="cesar">Cesar</MenuItem>
            <MenuItem value="xor">XOR</MenuItem>
          </Select>
        </FormControl>
        {renderKeyInput()}
        <Button
          type="submit"
          variant="contained"
          disabled={isLoading}
          sx={{ height: '100%' }}
        >
          Encrypt
        </Button>
      </Box>
    </Box>
  );
};

export default EncryptionForm;
