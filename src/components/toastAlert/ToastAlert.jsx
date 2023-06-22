import React from 'react';

import { ToastContainer, toast } from 'react-toastify';

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
