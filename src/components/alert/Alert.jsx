import * as React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

const Alerts = ({ type, message }) => {
  if (type === 'error') {
    return (
      <Stack sx={{ width: '100%' }} spacing={2}>
        <Alert severity="error" sx={{ fontSize: '15px' }}>
          <AlertTitle sx={{ fontSize: '16px' }}>Error</AlertTitle>
          <strong>{ message}</strong>
        </Alert>
      </Stack>
    );
  }

  if (type === 'warning') {
    return (
      <Stack sx={{ width: '25%' }} spacing={2}>
        <Alert severity="warning" sx={{ fontSize: '15px' }}>
          <AlertTitle sx={{ fontSize: '16px' }}>Warning</AlertTitle>
          {message}

          <strong>check it out!</strong>
        </Alert>
      </Stack>
    );
  }

  if (type === 'info') {
    return (
      <Stack sx={{ width: '25%' }} spacing={2}>
        <Alert severity="info" sx={{ fontSize: '15px' }}>
          <AlertTitle sx={{ fontSize: '16px' }}>Info</AlertTitle>
          {message}
          <strong>check it out!</strong>
        </Alert>
      </Stack>
    );
  }

  if (type === 'success') {
    return (
      <Stack sx={{ width: '25%' }} spacing={2}>

        <Alert severity="success" sx={{ fontSize: '15px' }}>
          <AlertTitle sx={{ fontSize: '16px' }}>Success</AlertTitle>
          {message}

          <strong>check it out!</strong>
        </Alert>
      </Stack>
    );
  }
  return (
    <Stack sx={{ width: '25%', border: '2px solid red' }} spacing={2}>
      <Alert severity="error" sx={{ fontSize: '15px' }}>
        <AlertTitle sx={{ fontSize: '16px' }}>Error</AlertTitle>
        {message}

        <strong>check it out!</strong>
      </Alert>
    </Stack>
  );
};
export default Alerts;
