import {
  IconButton,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import LockOpenIcon from '@mui/icons-material/LockOpen';

import { IMessage } from 'types/types';

interface IProps {
  isLoading: boolean;
  message: IMessage;
  onEncrypt: (id: number) => void;
  onDecrypt: (id: number) => void;
}

const MessageItem = ({ isLoading, message, onEncrypt, onDecrypt }: IProps) => {
  return (
    <ListItem>
      <ListItemText primary={message.text} />
      <ListItemSecondaryAction>
        <IconButton
          edge="end"
          disabled={isLoading}
          onClick={() => {
            message.isDecrypted ? onEncrypt(message.id) : onDecrypt(message.id);
          }}
        >
          {message.isDecrypted ? <LockIcon /> : <LockOpenIcon />}
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default MessageItem;
