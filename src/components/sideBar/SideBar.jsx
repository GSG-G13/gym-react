import * as React from 'react';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import InventoryIcon from '@mui/icons-material/Inventory';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CampaignIcon from '@mui/icons-material/Campaign';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import { NavLink } from 'react-router-dom';

const SideBar = () => (
  <Paper sx={{
    width: 240, maxWidth: '100%', backgroundColor: '#F1F2F7', paddingTop: 2,
  }}
  >
    <Typography variant="h5" align="left" p="20px" fontWeight={600}>
      <DragHandleIcon />
      MENU
    </Typography>
    <MenuList>
      <MenuItem>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <NavLink
          style={({ isActive }) => ({
            backgroundColor: isActive ? '#FF4601' : '',
            textDecoration: 'none',
            padding: '5px 10px',

            borderRadius: '5px',
            transition: 'all 0.5s ease',
            textTransform: 'capitalize',
            color: isActive ? '#fff' : 'black',
          })}
          to="/"
        >
          Home

        </NavLink>

      </MenuItem>
      <Divider />

      <MenuItem>
        <ListItemIcon>
          <PersonIcon />
        </ListItemIcon>
        <NavLink
          style={({ isActive }) => ({
            backgroundColor: isActive ? '#FF4601' : '',
            textDecoration: 'none',
            padding: '5px 10px',

            borderRadius: '5px',
            transition: 'all 0.5s ease',
            textTransform: 'capitalize',
            color: isActive ? '#fff' : 'black',
          })}
          to="users"
        >
          Users

        </NavLink>
      </MenuItem>
      <Divider />

      <MenuItem>
        <ListItemIcon>
          <InventoryIcon />
        </ListItemIcon>
        <NavLink
          style={({ isActive }) => ({
            backgroundColor: isActive ? '#FF4601' : '',
            textDecoration: 'none',
            padding: '5px 10px',

            borderRadius: '5px',
            transition: 'all 0.5s ease',
            textTransform: 'capitalize',
            color: isActive ? '#fff' : 'black',
          })}
          to="products"
        >
          Products

        </NavLink>
      </MenuItem>
      <Divider />
      <MenuItem>
        <ListItemIcon>
          <FitnessCenterIcon />
        </ListItemIcon>
        <NavLink
          style={({ isActive }) => ({
            backgroundColor: isActive ? '#FF4601' : '',
            textDecoration: 'none',
            padding: '5px 10px',

            borderRadius: '5px',
            transition: 'all 0.5s ease',
            textTransform: 'capitalize',
            color: isActive ? '#fff' : 'black',
          })}
          to="classes"
        >
          Classes

        </NavLink>
      </MenuItem>
      <Divider />
      <MenuItem>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <NavLink
          style={({ isActive }) => ({
            backgroundColor: isActive ? '#FF4601' : '',
            textDecoration: 'none',
            padding: '5px 10px',

            borderRadius: '5px',
            transition: 'all 0.5s ease',
            textTransform: 'capitalize',
            color: isActive ? '#fff' : 'black',
          })}
          to="orders"
        >
          Orders

        </NavLink>
      </MenuItem>
      <Divider />
      <MenuItem>
        <ListItemIcon>
          <CampaignIcon />
        </ListItemIcon>
        <NavLink
          style={({ isActive }) => ({
            backgroundColor: isActive ? '#FF4601' : '',
            textDecoration: 'none',
            padding: '5px 10px',

            borderRadius: '5px',
            transition: 'all 0.5s ease',
            textTransform: 'capitalize',
            color: isActive ? '#fff' : 'black',
          })}
          to="announcements"
        >
          Announcements

        </NavLink>
      </MenuItem>
      <Divider />
      <MenuItem>
        <ListItemIcon>
          <GroupAddIcon />
        </ListItemIcon>
        <NavLink
          style={({ isActive }) => ({
            backgroundColor: isActive ? '#FF4601' : '',
            textDecoration: 'none',
            padding: '5px 10px',
            borderRadius: '5px',
            transition: 'all 0.5s ease',
            textTransform: 'capitalize',
            color: isActive ? '#fff' : 'black',
          })}
          to="subscriptions"
        >
          Subscriptions

        </NavLink>
      </MenuItem>
    </MenuList>
  </Paper>
);

export default SideBar;
