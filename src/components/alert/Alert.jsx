import * as React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

const Alerts = () => (
  <Stack sx={{ width: '25%' }} spacing={2}>
    <Alert severity="error" sx={{ fontSize: '15px' }}>
      <AlertTitle sx={{ fontSize: '16px' }}>Error</AlertTitle>
      This is an error alert —

      <strong>check it out!</strong>
    </Alert>
    <Alert severity="warning" sx={{ fontSize: '15px' }}>
      <AlertTitle sx={{ fontSize: '16px' }}>Warning</AlertTitle>
      This is a warning alert —

      <strong>check it out!</strong>
    </Alert>
    <Alert severity="info" sx={{ fontSize: '15px' }}>
      <AlertTitle sx={{ fontSize: '16px' }}>Info</AlertTitle>
      This is an info alert —

      <strong>check it out!</strong>
    </Alert>
    <Alert severity="success" sx={{ fontSize: '15px' }}>
      <AlertTitle sx={{ fontSize: '16px' }}>Success</AlertTitle>
      This is a success alert —

      <strong>check it out!</strong>
    </Alert>
  </Stack>
);
export default Alerts;
