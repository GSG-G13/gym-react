import { ButtonGroup } from '@mui/material';
import axios from 'axios';
import ButtonComponent from '../button/Button';

const GroupButtons = ({ onClick, states }) => {
  const sendData = async () => {
    await axios.post('/api/announcements', {
      states,
    });
  };

  return (
    <ButtonGroup sx={{ display: 'flex', justifyContent: 'center', gap: 10 }} variant="outlined" aria-label="outlined button group">
      <ButtonComponent color="colors.darkBlue" secondOnClick={sendData}>Submit</ButtonComponent>
      <ButtonComponent color="colors.error" secondOnClick={onClick}>Cancel</ButtonComponent>
    </ButtonGroup>
  );
};

export default GroupButtons;
