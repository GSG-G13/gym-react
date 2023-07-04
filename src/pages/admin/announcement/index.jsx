import { useState } from 'react';
import axios from 'axios';
import { columns, rows } from '../../../dummyData/announcementData';
import DashBoardLayOut from '../LayOut';

const AnnouncementDashboard = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const userInfo = ['Title', 'Description', 'Image'];
  const states = [title, description, image];
  const setStates = [setTitle, setDescription, setImage];
  const sendData = async () => {
    await axios.post('/api/announcements', {
      states,
    });
  };
  return (
    <DashBoardLayOut
      buttonName="Add Announcmennt"
      columns={columns}
      rows={rows}
      userInfo={userInfo}
      setStates={setStates}
      axiosData={sendData}
    />
  );
};

export default AnnouncementDashboard;
