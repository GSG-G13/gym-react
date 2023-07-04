import { ButtonGroup } from '@mui/material';
import axios from 'axios';
import ButtonComponent from '../button/Button';

const GroupButtons = ({
  onClick, states, btnText, deleteBtn, setShowForm,
}) => {
  const sendData = async () => {
    await axios.post('/api/announcements', {
      states,
    });
  };

  return (
    <ButtonGroup sx={{ display: 'flex', justifyContent: 'center', gap: 10 }} variant="outlined" aria-label="outlined button group">
      <ButtonComponent color="colors.darkBlue" secondOnClick={sendData}>
        {' '}
        {btnText || 'Submit'}
      </ButtonComponent>
      <ButtonComponent color="colors.error" secondOnClick={onClick}>{deleteBtn || 'Cancel'}</ButtonComponent>
    </ButtonGroup>
  );
};

export default GroupButtons;
