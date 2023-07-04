import { useState, useEffect } from 'react';
import axios from 'axios';
import DashBoardLayOut from '../LayOut';

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
