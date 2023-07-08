import { Container } from '@mui/system';
import { Box } from '@mui/material';
import {
  UserSettingData,
} from '../../../components';
import Provider from '../../../context/Provider';

const UserSetting = () => (
  <Provider editBtnText="Edit info" deleteBtnText="Delete Account">
    <Box my={15} position="relative">
      <Container sx={{ display: 'flex', justifyContent: 'center' }}>
        <UserSettingData />

      </Container>
    </Box>
  </Provider>
);
export default UserSetting;
