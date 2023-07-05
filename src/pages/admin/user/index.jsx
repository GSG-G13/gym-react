import { useEffect, useReducer, useState } from 'react';
import axios from 'axios';
import { columns } from '../../../dummyData/index';
import DashBoardLayOut from '../LayOut';

const userInfo = ['username', 'email', 'password', 'age', 'gender', 'height', 'weight', 'goalweight'];
const initialState = {
  username: '',
  age: '',
  email: '',
  gender: '',
  height: '',
  weight: '',
  goalWeight: '',
  password: '',
  confirmPassword: '',
};

const reducer = (state, action) => ({
  ...state,
  [action.filedName]: action.value,
});
const UserList = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const values = [
    state.username,
    state.email,
    state.password,
    state.age,
    state.gender,
    state.height,
    state.weight,
    state.goalweight,
  ];
  const [users, setUsers] = useState([]);
  console.log(users);

  const handleChange = (e, filedName) => {
    const { value } = e.target;
    dispatch({
      filedName,
      value,
    });
  };

  const addUser = async () => {
    try {
      await axios.post('/api/users/signup', state);
    } catch (error) {
      console.log(error);
    }
  };

  const getUsers = async () => {
    try {
      const { data } = await axios.get('/api/users');
      setUsers(data.allUsers);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <DashBoardLayOut
      buttonName="Add User"
      userInfo={userInfo}
      columns={columns}
      rows={users}
      setStates={handleChange}
      filedName={userInfo}
      value={values}
      axiosData={addUser}

    />
  );
};

export default UserList;
