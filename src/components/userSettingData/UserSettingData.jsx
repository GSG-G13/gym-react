/* eslint-disable no-underscore-dangle */
import { Box, Button, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import { useReducer } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import DashboardNewPopUp from '../newPopUpComp';
import useAuth from '../../hook/useAuth';

const userInfo = [
  'username',
  'email',
  'age',
  'gender',
  'height',
  'weight',
  'goalweight',
];

const initialState = {
  username: '',
  email: '',
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
const UserSettingData = () => {
  const { user: userSettingData, logout } = useAuth();

  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, initialState);
  const values = [
    state.username,
    state.email,
    state.age,
    state.gender,
    state.height,
    state.weight,
    state.goalweight,
  ];

  const handleChange = (e, filedName) => {
    const { value } = e.target;
    dispatch({
      filedName,
      value,
    });
  };

  const updateUser = async () => {
    try {
      await axios.put(`/api/users/${userSettingData._id}`, state);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUserInfo = async () => {
    try {
      await axios.delete('/api/users');
      logout();
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box
      sx={{
        p: '20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '700px',
      }}
    >
      <Box>
        <Typography variant="h1" sx={{ paddingBottom: '20px', textTransform: 'capitalize' }}>
          user information
        </Typography>
        <img
          src="https://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png"
          width="120px"
          height="120px"
          alt="pic-profile"
        />
      </Box>
      <Box
        sx={{
          my: 5,
          display: 'flex',
          flexDirection: 'column',
          gap: 1.5,
        }}
      >
        <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 3fr' }}>
          <Typography variant="h5" color="gray">
            username:
          </Typography>

          <Typography variant="h5">{userSettingData?.username}</Typography>
        </Box>
        <Divider />
        <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 3fr' }}>
          <Typography variant="h5" color="gray">
            Email:
          </Typography>

          <Typography variant="h5">{userSettingData?.email}</Typography>
        </Box>
        <Divider />
        <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 3fr' }}>
          <Typography variant="h5" color="gray">
            age:
          </Typography>

          <Typography variant="h5">{userSettingData?.age}</Typography>
        </Box>

        <Divider />

        <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 3fr' }}>
          <Typography variant="h5" color="gray">
            weight:
          </Typography>

          <Typography variant="h5">{userSettingData?.weight}</Typography>
        </Box>
        <Divider />
        <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 3fr' }}>
          <Typography variant="h5" color="gray">
            height:
          </Typography>

          <Typography variant="h5">{userSettingData?.height}</Typography>
        </Box>
        <Divider />
        <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 3fr' }}>
          <Typography variant="h5" color="gray">
            goal weight:
          </Typography>

          <Typography variant="h5">{userSettingData?.goalweight}</Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 2,
          }}
        >
          <DashboardNewPopUp
            setStates={handleChange}
            userInfo={userInfo}
            value={values}
            filedName={userInfo}
            axiosData={updateUser}
          >
            edit
          </DashboardNewPopUp>
          <Button
            sx={{
              padding: '0px 20px',
              backgroundColor: 'red',
              color: '#fff',
              fontWeight: 700,
              borderRadius: 2,
            }}
            type="button"
            onClick={deleteUserInfo}
          >
            delete
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
export default UserSettingData;
