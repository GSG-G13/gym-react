import { Box, Container } from '@mui/material';
import React, { useState } from 'react';
import {
  NavBarDashBoard, SearchDashboard, SideBar, Table,
} from '../../../components';
import FormDashBoard from '../../../components/formDashboard/FormDashBoard';
import UserContext from '../../../context';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'username',
    headerName: 'username',
    width: 150,
    editable: true,
  },
  {
    field: 'email',
    headerName: 'email',
    width: 150,
    editable: true,
  },
  {
    field: 'password',
    headerName: 'password',
    type: 'string',
    width: 110,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'password',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'gender',
    headerName: 'gender',
    type: 'string',
    width: 110,
    editable: true,
  },
  {
    field: 'height',
    headerName: 'height',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'weight',
    headerName: 'weight',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'goalweight',
    headerName: 'weight',
    type: 'number',
    width: 110,
    editable: true,
  },
];

const rows = [
  {
    id: 1, username: 'Snow', email: 'Jon@gmail.com', password: '123asd123', age: 20, gender: 'male', height: 160, weight: 90, goalweight: 60,
  },
  {
    id: 2, username: 'Snow', email: 'Jon@gmail.com', password: '123asd123', age: 20, gender: 'male', height: 160, weight: 90, goalweight: 60,
  },
  {
    id: 3, username: 'Snow', email: 'Jon@gmail.com', password: '123asd123', age: 20, gender: 'male', height: 160, weight: 90, goalweight: 60,
  },
  {
    id: 4, username: 'Snow', email: 'Jon@gmail.com', password: '123asd123', age: 20, gender: 'male', height: 160, weight: 90, goalweight: 60,
  },
  {
    id: 5, username: 'Snow', email: 'Jon@gmail.com', password: '123asd123', age: 20, gender: 'male', height: 160, weight: 90, goalweight: 60,
  },
  {
    id: 6, username: 'Snow', email: 'Jon@gmail.com', password: '123asd123', age: 20, gender: 'male', height: 160, weight: 90, goalweight: 60,
  },
  {
    id: 7, username: 'Snow', email: 'Jon@gmail.com', password: '123asd123', age: 20, gender: 'male', height: 160, weight: 90, goalweight: 60,
  },
  {
    id: 8, username: 'Snow', email: 'Jon@gmail.com', password: '123asd123', age: 20, gender: 'male', height: 160, weight: 90, goalweight: 60,
  },
  {
    id: 9, username: 'Snow', email: 'Jon@gmail.com', password: '123asd123', age: 20, gender: 'male', height: 160, weight: 90, goalweight: 60,
  },
];

const userInfo = ['username', 'email', 'password', 'age', 'gender', 'gender', 'height', 'weight', 'goalweight'];

const UserList = () => {
  const [showForm, setShowForm] = useState(false);
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <UserContext.Provider value={{ setShowForm }}>
      <Box>
        <NavBarDashBoard />
        <Box sx={{ display: 'flex' }} width="100%" height="100vh">
          <SideBar />
          <Container>
            <Box
              height="100%"
              sx={{
                display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 4, position: 'relative',
              }}
            >
              <SearchDashboard btnText="Add User" />
              <Table columns={columns} rows={rows} />
            </Box>
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%,-50%)',
                display: showForm ? 'block' : 'none',
              }}
            >
              <FormDashBoard userInfo={userInfo} />
            </Box>
          </Container>
        </Box>
      </Box>
    </UserContext.Provider>
  );
};

export default UserList;
