import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import { Link, useNavigate } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import axios from 'axios';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const NavBarDashBoard = () => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const logoutAdmin = async () => {
    try {
      await axios.delete('/api/users/signout');
      localStorage.clear();
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AppBar sx={{ width: '100vw', backgroundColor: '#5A67BA', padding: '0 20px' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Link
          variant="h3"
          noWrap
          component="a"
          to="/"
          style={{
            mr: 2,
            display: 'flex',
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          <FitnessCenterIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, fontSize: 20 }} />

          Gym
        </Link>

        <Box sx={{
          flexGrow: 0, display: 'flex', alignItems: 'center', gap: 1,
        }}
        >
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="Remy Sharp" sx={{ width: 25, height: 25 }} />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >

            <MenuItem onClick={handleCloseUserMenu}>
              <IconButton
                sx={{ p: 0, color: '#5A67BA' }}
              >
                <PersonIcon />
              </IconButton>
              <Link to="profile" style={{ textDecoration: 'none', color: '#5A67BA' }}>Profile</Link>
            </MenuItem>
            <MenuItem onClick={handleCloseUserMenu}>
              <IconButton
                sx={{ p: 0, color: '#5A67BA' }}
              >
                <LogoutIcon />
              </IconButton>
              <Typography onClick={logoutAdmin} textAlign="center" sx={{ color: '#5A67BA' }}>Logout</Typography>
            </MenuItem>

          </Menu>
          <Typography variant="h6">Admin</Typography>

        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default NavBarDashBoard;
