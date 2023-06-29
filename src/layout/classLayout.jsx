import { Outlet } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import { ClassesList } from '../components';

const ClassLayout = () => (
  <Box>
    <Container style={{ maxWidth: 1600 }}>
      <Box sx={{ display: 'flex' }}>
        <ClassesList />
        <Outlet />
      </Box>
    </Container>

  </Box>
);

export default ClassLayout;
