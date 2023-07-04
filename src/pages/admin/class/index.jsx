import { useState } from 'react';
import axios from 'axios';
import { columns, rows } from '../../../dummyData/classDashBoardDummyData';
import DashBoardLayOut from '../LayOut';

const ClassDashBoard = () => {
  const [className, setClassName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [userCount, setUserCount] = useState(0);

  const userInfo = ['Classname', 'Description', 'Price', 'UserCount'];
  const states = [className, description, price, userCount];
  const setStates = [setClassName, setDescription, setPrice, setUserCount];

  const axiosData = async () => {
    await axios.post('http://localhost:5050/api/classes/648f3defbc0c71b0ca8840ca', {
      states,
    });
  };

  return (
    <DashBoardLayOut
      userInfo={userInfo}
      columns={columns}
      rows={rows}
      axiosData={axiosData}
      setStates={setStates}
      buttonName="Add Class"
    />
  );
};

export default ClassDashBoard;
