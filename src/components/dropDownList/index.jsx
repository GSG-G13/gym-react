import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import axios from 'axios';
import DeleteButtonCell from '../deleteDataBtn';
import DashboardNewPopUp from '../newPopUpComp';

const DropDownList = ({
  row, url, userInfo, filedName,
}) => {
  const updateData = async () => {
    const res = await axios.put(`${url}/${row.id}`, row);
    console.log(res);
  };
  const rowData = Object.values(row.row);
  const editData = rowData.filter((data, i) => i !== 0);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MoreVertIcon />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem>
          <DashboardNewPopUp
            userInfo={userInfo}
            filedName={filedName}
            value={editData}
            axiosData={updateData}
          >
            Edit
          </DashboardNewPopUp>

        </MenuItem>
        <MenuItem onClick={handleClose}><DeleteButtonCell id={row.id} url={url} /></MenuItem>

      </Menu>
    </div>
  );
};

export default DropDownList;
