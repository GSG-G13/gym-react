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

const SideBar = () => (
  <Paper sx={{
    width: 240, maxWidth: '100%', minHeight: '100vh', backgroundColor: '#F1F2F7',
  }}
  >
    <Typography variant="h5" align="left" p="20px">
      <DragHandleIcon />
      MENU
    </Typography>
    <MenuList>
      <MenuItem>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <Typography variant="h5" align="left">Home</Typography>

      </MenuItem>
      <Divider />

      <MenuItem>
        <ListItemIcon>
          <PersonIcon />
        </ListItemIcon>
        <Typography variant="h5" align="left">Users</Typography>
      </MenuItem>
      <Divider />

      <MenuItem>
        <ListItemIcon>
          <InventoryIcon />
        </ListItemIcon>
        <Typography variant="h5" align="left">Products</Typography>
      </MenuItem>
      <Divider />
      <MenuItem>
        <ListItemIcon>
          <FitnessCenterIcon />
        </ListItemIcon>
        <Typography variant="h5" align="left">Classes</Typography>
      </MenuItem>
      <Divider />
      <MenuItem>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <Typography variant="h5" align="left">Orders</Typography>
      </MenuItem>
      <Divider />
      <MenuItem>
        <ListItemIcon>
          <CampaignIcon />
        </ListItemIcon>
        <Typography variant="h5" align="left">Announcements</Typography>
      </MenuItem>
      <Divider />
      <MenuItem>
        <ListItemIcon>
          <GroupAddIcon />
        </ListItemIcon>
        <Typography variant="h5" align="left">Subscriptions</Typography>
      </MenuItem>
    </MenuList>
  </Paper>
);

export default SideBar;
