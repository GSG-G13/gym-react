import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import FormDashBoard from '../formDashboard/FormDashBoard';
import ButtonComponent from '../button/Button';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: '#000',
  border: '2px solid #000',
  boxShadow: 24,
  p: 2,

};

const DashboardNewPopUp = ({
  children, userInfo, setStates, axiosData, filedName, value, selectList,
}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <ButtonComponent
        onClick={handleOpen}
        color="colors.darkBlue"
      >
        {children}
      </ButtonComponent>
      <Modal
        open={open}
        onClose={handleClose}

      >
        <Box sx={style}>
          <FormDashBoard
            userInfo={userInfo}
            onClick={handleClose}
            setStates={setStates}
            axiosData={axiosData}
            filedName={filedName}
            value={value}
            selectList={selectList}
          />
        </Box>
      </Modal>
    </div>
  );
};

export default DashboardNewPopUp;
