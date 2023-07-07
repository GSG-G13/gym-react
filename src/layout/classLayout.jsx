import { Outlet } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import { ClassesList } from '../components';

const ClassLayout = () => (
  <Box>
    <Container>
      <Box sx={{ display: 'grid', gridTemplateColumns: '20% 1fr', gap: '50px' }}>
        <ClassesList />
        <Outlet />
      </Box>
    </Container>

  </Box>
);

export default ClassLayout;
