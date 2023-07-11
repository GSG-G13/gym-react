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
import axios from 'axios';
import { useState } from 'react';
import useAuth from '../../hook/useAuth';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const NavBarDashBoard = () => {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const logoutAdmin = async () => {
    try {
      await axios.get('/api/users/signout');
      logout();
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AppBar
      sx={{ width: '100vw', backgroundColor: '#5A67BA', padding: '0 20px' }}
    >
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
          <FitnessCenterIcon
            sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, fontSize: 20 }}
          />
          Gym
        </Link>

        <Box
          sx={{
            flexGrow: 0,
            display: 'flex',
            alignItems: 'center',
            gap: 1,
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
            {settings.map((setting) => (
              <MenuItem key={setting} onClick={handleCloseUserMenu}>
                <Typography
                  onClick={setting === 'Logout' ? logoutAdmin : null}
                  textAlign="center"
                >
                  {setting}
                </Typography>
              </MenuItem>
            ))}
          </Menu>
          <Typography variant="h6">Admin</Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default NavBarDashBoard;
