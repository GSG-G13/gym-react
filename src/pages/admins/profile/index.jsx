/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import {
  Box, Input, Button, InputLabel,
} from '@mui/material';
import axios from 'axios';
import useAuth from '../../../hook/useAuth';

const ProfileDash = () => {
  const { user } = useAuth();

  const [changeable, setChangeAble] = useState(false);
  const [adminInput, setAdminInput] = useState({
    username: user.username,
    email: user.email,
    gender: user.gender,
    weight: user.weight,
    height: user.height,
    goalweight: user.goalweight,
    role: user.role,
  });

  const updateAdminData = async () => {
    try {
      await axios.put(`/api/users/${user._id}`, adminInput);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: '30px',
      margin: 'auto',
      flex: 0.5,
      width: '70%',
      mt: 2,
    }}
    >
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvw7Qj0D8juH6wMd_b1__unfPEJrmSBc3bkg&usqp=CAU"
        alt="profile admin"
        style={{
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          margin: 'auto',
        }}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        <InputLabel sx={{ fontSize: '13px', color: '#fff' }}>userName:</InputLabel>
        <Input
          readOnly={changeable}
          onClick={() => setChangeAble(!changeable)}
          onChange={(e) => setAdminInput({ ...adminInput, username: e.target.value })}
          sx={{
            color: '#fff',
            fontSize: 12,
            height: '50px',
            flex: 0.9,
            p: '5px 10px',

            width: '100%',
            borderBottom: '1px solid #ccc',
          }}
          type="text"
          value={adminInput.username ? adminInput.username : user.username}
        />
        <InputLabel sx={{ fontSize: '13px', color: '#fff' }}>Email:</InputLabel>

        <Input
          readOnly={changeable}
          onClick={() => setChangeAble(!changeable)}
          onChange={(e) => setAdminInput({ ...adminInput, email: e.target.value })}
          sx={{
            color: '#fff',
            fontSize: 12,
            height: '50px',
            flex: 0.9,
            p: '5px 10px',

            width: '100%',
            borderBottom: '1px solid #ccc',

          }}
          type="text"
          value={adminInput.email ? adminInput.email : user.email}
        />
        <InputLabel sx={{ fontSize: '13px', color: '#fff' }}>Gender:</InputLabel>

        <Input
          readOnly={changeable}
          onClick={() => setChangeAble(!changeable)}
          onChange={(e) => setAdminInput({ ...adminInput, gender: e.target.value })}
          sx={{
            color: '#fff',
            fontSize: 12,
            height: '50px',
            flex: 0.9,
            p: '5px 10px',

            width: '100%',
            borderBottom: '1px solid #ccc',

          }}
          type="text"
          value={adminInput.gender ? adminInput.gender : user.gender}
        />
        <InputLabel sx={{ fontSize: '13px', color: '#fff' }}>Weight:</InputLabel>

        <Input
          readOnly={changeable}
          onClick={() => setChangeAble(!changeable)}
          onChange={(e) => setAdminInput({ ...adminInput, weight: e.target.value })}
          sx={{
            color: '#fff',
            fontSize: 12,
            height: '50px',
            flex: 0.9,
            p: '5px 10px',

            width: '100%',
            borderBottom: '1px solid #ccc',

          }}
          type="text"
          value={adminInput.weight ? adminInput.weight : user.weight}
        />
        <InputLabel sx={{ fontSize: '13px', color: '#fff' }}>Height:</InputLabel>
        <Input
          readOnly={changeable}
          onClick={() => setChangeAble(!changeable)}
          onChange={(e) => setAdminInput({ ...adminInput, height: e.target.value })}
          sx={{
            color: '#fff',
            fontSize: 12,
            height: '50px',
            flex: 0.9,
            p: '5px 10px',

            width: '100%',
            borderBottom: '1px solid #ccc',

          }}
          type="text"
          value={adminInput.height ? adminInput.height : user.height}
        />

        <InputLabel sx={{ fontSize: '13px', color: '#fff' }}>GoalWeight:</InputLabel>
        <Input
          readOnly={changeable}
          onClick={() => setChangeAble(!changeable)}
          onChange={(e) => setAdminInput({ ...adminInput, goalweight: e.target.value })}
          sx={{
            color: '#fff',
            fontSize: 12,
            height: '50px',
            flex: 0.9,
            p: '5px 10px',

            width: '100%',
            borderBottom: '1px solid #ccc',

          }}
          type="text"
          value={adminInput.goalweight ? adminInput.goalweight : user.goalweight}
        />
        <InputLabel sx={{ fontSize: '13px', color: '#fff' }}>role:</InputLabel>
        <Input
          readOnly={changeable}
          onClick={() => setChangeAble(!changeable)}
          onChange={(e) => setAdminInput({ ...adminInput, role: e.target.value })}
          sx={{
            color: '#fff',
            fontSize: 12,
            height: '50px',
            flex: 0.9,
            p: '5px 10px',

            width: '100%',
            borderBottom: '1px solid #ccc',

          }}
          type="text"
          value={adminInput.role ? adminInput.role : user.role}
        />
      </Box>
      <Button
        variant="outlined"
        sx={{
          backgroundColor: '#fff',
          border: '1px solid #5A67BA',
          color: '#5A67BA',
        }}
        onClick={updateAdminData}
      >
        Edit

      </Button>
    </Box>
  );
};
export default ProfileDash;
