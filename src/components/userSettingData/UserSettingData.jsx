import { Box, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import GroupButtons from '../formDashboard/GroupButtons';
import Provider from '../../context/Provider';

const UserSettingData = () => (
  <Provider editBtnText="Edit" deleteBtnText="delete">
    <Box sx={{
      border: '2px solid red',
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
            heleena dar

          </Typography>
        </Box>
        <Divider />
        <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 3fr' }}>

          <Typography variant="h5" color="gray">
            Email:

          </Typography>

          <Typography variant="h5">
            hell2020@gmail.com

          </Typography>
        </Box>
        <Divider />
        <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 3fr' }}>

          <Typography variant="h5" color="gray">
            age:

          </Typography>

          <Typography variant="h5">
            25

          </Typography>
        </Box>
        <Divider />
        <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 3fr' }}>

          <Typography variant="h5" color="gray">
            passsword:

          </Typography>

          <Typography variant="h5">
            123456789

          </Typography>
        </Box>
        <Divider />
        <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 3fr' }}>

          <Typography variant="h5" color="gray">
            confirm password:

          </Typography>

          <Typography variant="h5">
            123456789

          </Typography>
        </Box>
        <Divider />
        <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 3fr' }}>

          <Typography variant="h5" color="gray">
            weight:

          </Typography>

          <Typography variant="h5">
            66

          </Typography>
        </Box>
        <Divider />
        <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 3fr' }}>

          <Typography variant="h5" color="gray">
            height:

          </Typography>

          <Typography variant="h5">
            166

          </Typography>
        </Box>
        <Divider />
        <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 3fr' }}>

          <Typography variant="h5" color="gray">
            goal weight:

          </Typography>

          <Typography variant="h5">
            50

          </Typography>
        </Box>

      </Box>
      <GroupButtons />

    </Box>
  </Provider>
);
export default UserSettingData;
