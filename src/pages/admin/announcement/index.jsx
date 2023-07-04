import { useState, useEffect } from 'react';
import axios from 'axios';
import EditIcon from '@mui/icons-material/Edit';
import DashBoardLayOut from '../LayOut';
import DashboardNewPopUp from '../../../components/newPopUpComp';

const EditButtonCell = (row) => {
  const announcmentFields = ['New Title', 'New Description', 'New Image'];
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newImage, setNewImage] = useState('');

  const states = [newTitle, newDescription, newImage];
  const setStates = [setNewTitle, setNewDescription, setNewImage];
  const handleEdit = async () => {
    const { id } = row;
    await axios.put(`api/announcements/${id}`, { states });
  };

  return (
    <DashboardNewPopUp
      userInfo={announcmentFields}
      states={states}
      setStates={setStates}
      axiosData={handleEdit}

    >
      <EditIcon />
    </DashboardNewPopUp>
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
    field: 'edit',
    headerName: 'Edit',
    width: 100,
    renderCell: EditButtonCell,
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

  const getAnnouncmeent = async () => {
    const { data } = await axios.get('http://localhost:5050/api/announcements');
    setTableData(data.announcements);
  };
  useEffect(() => {
    getAnnouncmeent();
  }, []);
  const postAnnouncement = async () => {
    await axios.post('/api/announcements', {
      states,
    });
  };

  return (
    <DashBoardLayOut
      buttonName="Add Announcmennt"
      columns={announcementColumns}
      rows={tableData}
      userInfo={userInfo}
      states={states}
      setStates={setStates}
      axiosData={postAnnouncement}
    />
  );
};

export default AnnouncementDashboard;
