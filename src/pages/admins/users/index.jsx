/* eslint-disable no-underscore-dangle */
import { Box } from '@mui/material';
import React, { useEffect, useReducer, useState } from 'react';
import axios from 'axios';
import {
  AddButton, AddForm, DashTable, EditForm, SearchInpDash,
} from '../../../dashboardComponents';

const userInfo = ['username', 'email', 'password', 'age', 'gender', 'height', 'weight', 'goalweight'];
const userInfoTable = ['username', 'email', 'age', 'gender', 'height', 'weight', 'goalweight', 'role'];
const EdituserInfo = ['username', 'email', 'age', 'height', 'weight', 'gender', 'goalweight', 'role'];
const initialState = {
  username: '',
  email: '',
  password: '',
  age: '',
  gender: '',
  height: '',
  weight: '',
  goalweight: '',
};

const reducer = (state, action) => ({
  ...state,
  [action.filedName]: action.value,
});
const UserDash = () => {
  const [user, setUser] = useState({});

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
    state.role,
  ];

  const [userData, setUserData] = useState({
    username: user?.username,
    email: user?.email,
    age: user?.age,
    gender: user?.gender,
    weight: user?.weight,
    height: user?.height,
    goalweight: user?.goalweight,
    role: user?.role,
  });
  const [showForm, setShowForm] = useState(false);
  const [showEditForm, setEditShowForm] = useState(false);
  const [users, setUsers] = useState([]);

  const handleChange = (e, filedName) => {
    const { value } = e.target;
    dispatch({
      filedName,
      value,
    });
  };

  const getUsers = async () => {
    try {
      const { data } = await axios.get('/api/users');
      setUsers(data.allUsers);
    } catch (error) {
      console.log(error);
    }
  };
  const addUser = async () => {
    try {
      await axios.post('/api/users/signup', state);

      getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async (id) => {
    try {
      axios.delete(`/api/users/${id}`);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  const getUserById = async (id) => {
    const { data } = await axios.get(`/api/users/${id}`);
    setUser(data.user);
    setUserData({
      username: data.user?.username,
      email: data.user?.email,
      age: data.user?.age,
      gender: data.user?.gender,
      weight: data.user?.weight,
      height: data.user?.height,
      goalweight: data.user?.goalweight,
      role: data.user?.role,
    });
  };

  const updateUser = async () => {
    try {
      axios.put(`/api/users/${user._id}`, userData);
      setEditShowForm(false);
      getUsers();
      setUserData({
        username: '',
        email: '',
        age: '',
        gender: '',
        weight: '',
        height: '',
        goalweight: '',
        role: '',
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <Box mt={10}>
      <Box
        sx={{
          display: 'flex',
          gap: 2,
        }}
      >
        <SearchInpDash />
        <AddButton text="Add User" setShowForm={setShowForm} showForm={showForm} />
      </Box>

      <Box mt={5}>
        <DashTable
          array={users}
          userInfo={userInfoTable}
          deleteFunction={deleteUser}
          updateFunction={updateUser}
          setEditShowForm={setEditShowForm}
          showEditForm={showEditForm}
          getData={getUserById}
        />
      </Box>

      <Box
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          height: '100%',
          width: '40%',
          backgroundColor: '#111010',
          p: '20px 20px',
          transform: `translateX(${showForm ? 0 : '100%'})`,
          transition: '0.5s ease-in-out',
        }}
      >
        <AddForm
          setShowForm={setShowForm}
          showForm={showForm}
          axiosData={addUser}
          setState={handleChange}
          values={values}
          filedName={userInfo}
          head={userInfo}
          title="Add User"
        />
      </Box>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          height: '100%',
          width: '40%',
          backgroundColor: '#111010',
          p: '20px 20px',
          transform: `translateX(${showEditForm ? 0 : '100%'})`,
          transition: '0.5s ease-in-out',
        }}
      >
        <EditForm
          setShowForm={setEditShowForm}
          showForm={showEditForm}
          axiosData={updateUser}
          setState={setUserData}
          values={user}
          state={userData}
          filedName={EdituserInfo}
          head={EdituserInfo}
          title="Edit User"
        />
      </Box>
    </Box>
  );
};

export default UserDash;
