import React from 'react';
// import WarningAmberIcon from '@mui/icons-material/WarningAmber';

// eslint-disable-next-line import/no-extraneous-dependencies
import { ToastContainer, toast } from 'react-toastify';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'react-toastify/dist/ReactToastify.css';

const ToastAlert = () => {
  const errorMassage = () => toast('Error!');
  return (
    <div className="Alert-section">
      <button type="button" onClick={errorMassage}> Alert Msg!</button>
      <ToastContainer />
    </div>
  );
};
export default ToastAlert;
