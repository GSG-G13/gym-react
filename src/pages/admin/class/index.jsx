import axios from 'axios';
import { useEffect, useReducer, useState } from 'react';
import DashBoardLayOut from '../LayOut';
import DropDownList from '../../../components/dropDownList';

const classInfo = ['className', 'description', 'price', 'userCount', 'trainerId'];

const initialState = {
  className: '',
  description: '',
  price: '',
  userCount: '',
  trainerId: '',
};
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
  {
    field: 'delete',
    headerName: 'Delete',
    width: 100,
    renderCell: (row) => <DropDownList userInfo={classInfo} initialState={initialState} row={row} url="/api/classes" />,
  },

];

const reducer = (state, action) => ({
  ...state,
  [action.filedName]: action.value,
});

const ClassDashBoard = () => {
  const [classData, setClassData] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');
  const [state, dispatch] = useReducer(reducer, initialState);
  const [trainers, setTrainers] = useState([]);
  console.log(errorMsg);
  const values = [
    state.className,
    state.description,
    state.price,
    state.userCount,
  ];
  const handleChange = (e, filedName) => {
    const { value } = e.target;
    dispatch({
      filedName,
      value,
    });
  };
  const addClass = async () => {
    try {
      await axios.post(`/api/classes/${state.trainerId}`, state);
    } catch (error) {
      console.log(error);
    }
  };

  const getClasses = async () => {
    try {
      const { data: { classesData } } = await axios.get('/api/classes');
      const allClassData = [];
      classesData.map((classItem) => allClassData.push({
        ...classItem,
        username: classItem.trainerId?.username,
      }));
      setClassData(classesData);
    } catch (error) {
      setErrorMsg('There Is No Classes');
    }
  };

  const getUsers = async () => {
    try {
      const { data: { allUsers } } = await axios.get('/api/users');

      const trainersList = allUsers.filter((user) => user.role === 'trainer');
      setTrainers(trainersList);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getClasses();
    getUsers();
  }, []);

  return (
    <DashBoardLayOut
      buttonName="Add Class"
      userInfo={classInfo}
      columns={columns}
      rows={classData}
      error={errorMsg}
      setStates={handleChange}
      filedName={classInfo}
      value={values}
      axiosData={addClass}
      selectList={trainers}
    />

  );
};
export default ClassDashBoard;
