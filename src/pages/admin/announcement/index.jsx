import { useState } from 'react';
import { columns, rows } from '../../../dummyData/announcementData';
import DashBoardLayOut from '../LayOut';

const AnnouncementDashboard = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const userInfo = ['Title', 'Description', 'Image'];
  const states = [title, description, image];
  const setStates = [setTitle, setDescription, setImage];

  return (
    <DashBoardLayOut
      buttonName="Add Announcmennt"
      columns={columns}
      rows={rows}
      userInfo={userInfo}
      states={states}
      setStates={setStates}
    />
  );
};

export default AnnouncementDashboard;
