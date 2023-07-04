import { Box, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import GroupButtons from '../formDashboard/GroupButtons';

const UserSettingData = () => {
  const userSettingData = JSON.parse(localStorage.getItem('userData'));
  return (
    <Box sx={{
      p: '20px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      width: '700px',
    }}
    >
      <Box>

        <Typography variant="h1" sx={{ paddingBottom: '20px' }}>user information </Typography>
        <img
          src="https://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png"
          width="120px"
          height="120px"
          alt="pic-profile"
        />
      </Box>
      <Box sx={{
        my: 5, display: 'flex', flexDirection: 'column', gap: 1.5,
      }}
      >
        <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 3fr' }}>

          <Typography variant="h5" color="gray">
            username:

          </Typography>

          <Typography variant="h5">
            {userSettingData.username}

          </Typography>
        </Box>
        <Divider />
        <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 3fr' }}>

          <Typography variant="h5" color="gray">
            Email:

          </Typography>

          <Typography variant="h5">
            {userSettingData.email}

          </Typography>
        </Box>
        <Divider />
        <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 3fr' }}>

          <Typography variant="h5" color="gray">
            age:

          </Typography>

          <Typography variant="h5">
            {userSettingData.age}

          </Typography>
        </Box>

        <Divider />

        <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 3fr' }}>

          <Typography variant="h5" color="gray">
            weight:

          </Typography>

          <Typography variant="h5">
            {userSettingData.weight}

          </Typography>
        </Box>
        <Divider />
        <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 3fr' }}>

          <Typography variant="h5" color="gray">
            height:

          </Typography>

          <Typography variant="h5">
            {userSettingData.height}

          </Typography>
        </Box>
        <Divider />
        <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 3fr' }}>

          <Typography variant="h5" color="gray">
            goal weight:

          </Typography>

          <Typography variant="h5">
            {userSettingData.goalweight}

          </Typography>
        </Box>

      </Box>
      <GroupButtons btnText="Edit" deleteBtn="delete" />

    </Box>
  );
};
export default UserSettingData;
