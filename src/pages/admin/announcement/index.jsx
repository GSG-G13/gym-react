import { useState, useEffect } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import DashBoardLayOut from '../LayOut';
import ButtonComponent from '../../../components/button/Button';

const DeleteButtonCell = (row) => {
  const handleDelete = async () => {
    const { id } = row;
    await axios.delete(`/api/announcements/${id}`);
  };
  return (
    <ButtonComponent onClick={handleDelete}>
      <DeleteIcon />
    </ButtonComponent>
  );
};

const announcementColumns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'title',
    headerName: 'Title',
    width: 150,
    editable: true,
  },
  {
    field: 'description',
    headerName: 'Description',
    type: 'string',
    width: 110,
    editable: true,
  },
  {
    field: 'image',
    headerName: 'Image',
    type: 'string',
    width: 110,
    editable: true,
  },
  {
    field: 'delete',
    headerName: 'Delete',
    width: 100,
    renderCell: DeleteButtonCell,
  },
];

const AnnouncementDashboard = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const [tableData, setTableData] = useState([]);

  const userInfo = ['Title', 'Description', 'Image'];
  const states = [title, description, image];
  const setStates = [setTitle, setDescription, setImage];
  const sendData = async () => {
    await axios.post('/api/announcements', {
      states,
    });
  };

  const getAnnouncmeent = async () => {
    const { data } = await axios.get('/api/announcements');
    setTableData(data.announcements);
  };
  useEffect(() => {
    getAnnouncmeent();
  }, []);

  return (
    <DashBoardLayOut
      buttonName="Add Announcmennt"
      columns={announcementColumns}
      rows={tableData}
      userInfo={userInfo}
      setStates={setStates}
      axiosData={sendData}
    />
  );
};

export default AnnouncementDashboard;
