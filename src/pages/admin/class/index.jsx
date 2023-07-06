import axios from 'axios';
import { useEffect, useState } from 'react';
import DashBoardLayOut from '../LayOut';

const userInfo = ['classname', 'Description', 'Trainer', 'Price', 'Participant'];
const columns = [
  {
    field: 'className',
    headerName: 'ClassName',
  },
  {
    field: 'description',
    headerName: 'Description',

  },
  {
    field: 'price',
    headerName: 'Price',
  },
  {
    field: 'username',
    headerName: 'userName',
  },

];

const ClassDashBoard = () => {
  const [classData, setClassData] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');

  const getClasses = async () => {
    try {
      const { data: { classesData } } = await axios.get('/api/classes');
      const allClassData = [];
      classesData.map((classItem) => allClassData.push({
        ...classItem,
        username: classItem.trainerId.username,
      }));
      setClassData(allClassData);
    } catch (error) {
      setErrorMsg('There Is No Classes');
    }
  };
  console.log(classData);
  useEffect(() => {
    getClasses();
  }, []);
  return (
    <DashBoardLayOut
      userInfo={userInfo}
      columns={columns}
      rows={classData}
      error={errorMsg}
    />

  );
};
export default ClassDashBoard;
