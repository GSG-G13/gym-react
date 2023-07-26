/* eslint-disable no-shadow */
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import axios from 'axios';
import DeleteButtonCell from '../deleteDataBtn';
import DashboardNewPopUp from '../newPopUpComp';

const reducer = (state, action) => ({
  ...state,
  [action.filedName]: action.value,
});
const DropDownList = ({
  row, url, userInfo, initialState,
}) => {
  const [changeAble, setChangeAble] = React.useState(false);
  const [state, dispatch] = React.useReducer(reducer, initialState);
  console.log(state);
  const handleChange = (e, filedName) => {
    setChangeAble(true);
    const { value } = e.target;
    dispatch({
      filedName,
      value,
    });
  };
  const updateData = async () => {
    const res = await axios.put(`${url}/${row.id}`, state);
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
            filedName={userInfo}
            value={changeAble ? state : editData}
            axiosData={updateData}
            setStates={handleChange}

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
