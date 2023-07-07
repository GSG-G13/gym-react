import { ButtonGroup } from '@mui/material';
import ButtonComponent from '../button/Button';

const GroupButtons = ({ onClick, axiosData }) => (
  <ButtonGroup sx={{ display: 'flex', justifyContent: 'center', gap: 10 }} variant="outlined" aria-label="outlined button group">
    <ButtonComponent color="colors.darkBlue" secondOnClick={axiosData}>Submit</ButtonComponent>
    <ButtonComponent color="colors.error" secondOnClick={onClick}>Cancel</ButtonComponent>
  </ButtonGroup>
);

export default GroupButtons;
