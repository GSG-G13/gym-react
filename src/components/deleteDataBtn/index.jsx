import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import ButtonComponent from '../button/Button';

const DeleteButtonCell = ({ id, url }) => {
  const handleDelete = async () => {
    await axios.delete(`${url}/${id}`);
  };
  return (
    <ButtonComponent onClick={handleDelete}>
      <DeleteIcon />
    </ButtonComponent>
  );
};

export default DeleteButtonCell;
