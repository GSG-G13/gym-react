import { Outlet } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import { ClassesList } from '../components';

const ClassLayout = () => (
  <Box minHeight="100vh">
    <Container>
      <Box sx={{
        display: 'grid', gridTemplateColumns: '20% 1fr', gap: '50px', minHeight: '100px',
      }}
      >
        <ClassesList />
        <Outlet />
      </Box>
    </Container>

  </Box>
);

export default ClassLayout;
