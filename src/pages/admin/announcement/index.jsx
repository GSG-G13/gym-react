import { useState, useEffect } from 'react';
import axios from 'axios';
import EditIcon from '@mui/icons-material/Edit';
import DashBoardLayOut from '../LayOut/index.jsx';
import DashboardNewPopUp from '../../../components/newPopUpComp';
import { Alerts } from '../../../components/index.js';

const EditButtonCell = (line) => {
  const { row } = line;
  const {
    _id, title, description, image,
  } = row;

  const announcmentFields = ['New Title', 'New Description', 'New Image'];
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const [newImage, setNewImage] = useState(image);

  const states = [newTitle, newDescription, newImage];
  const setStates = [setNewTitle, setNewDescription, setNewImage];
  const handleEdit = async () => {
    try {
      await axios.put(`api/announcements/${_id}`, { states });
        <Alerts type="info" message="announcmeent edited successfuly" />;
    } catch (error) {
      <Alerts type="error" message={error.message} />;
    }
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
    const { data, status } = await axios.get('/api/announcements');
    if (status === 200 || status === 201) {
      setTableData(data.announcements);
    }
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
      setStates={setStates}
      axiosData={postAnnouncement}
      testProp={tableData}
    />
  );
};

export default AnnouncementDashboard;
