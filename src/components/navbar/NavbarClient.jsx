/* eslint-disable operator-linebreak */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable array-callback-return */
import { useState } from 'react';
import axios from 'axios';
import PersonIcon from '@mui/icons-material/Person';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import LoginIcon from '@mui/icons-material/Login';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from '@mui/material';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../../hook/useAuth';

const unAuthenticatedPages = ['home', 'store', 'class'];
const authenticatedPages = [...unAuthenticatedPages, 'chat', 'announcement'];

const NavbarClient = () => {
  const [anchorElUser, setAnchorElUser] = useState(null);

  const { user: userData, logout } = useAuth();

  console.log('navbar', userData);

  const settings = [
    { name: 'profile', icon: <AccountCircleIcon /> },
    { name: 'setting', icon: <SettingsIcon /> },
    { name: userData ? 'signout' : 'signin', icon: <LoginIcon /> },
  ];
  const navigate = useNavigate();

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const logoutFun = async () => {
    try {
      axios.delete('/api/users/signout');
      logout();
      navigate('/signin');
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <AppBar
      sx={{
        width: '100%',
        backgroundColor: '#3c353533',
        color: '#000',
        px: '30px',
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          alignItems: 'center',
          boxShadow: 'none',
        }}
      >
        <Link
          to="/"
          style={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: '#fff',
            textDecoration: 'none',
            '&:hover': { color: '#000' },
            fontSize: '1.75rem',
          }}
        >
          G<span style={{ color: '#FF4601' }}>Y</span>M
        </Link>

        <Box
          sx={{
            flexGrow: 1,
            display: { xs: 'none', md: 'flex' },
            justifyContent: 'end',
            gap: '60px',
          }}
          mr="60px"
        >
          {(userData ? authenticatedPages : unAuthenticatedPages).map(
            (page) => (
              <NavLink
                to={page === 'home' ? '/' : page}
                style={({ isActive }) => ({
                  backgroundColor: isActive ? '#FF4601' : '',
                  textDecoration: 'none',
                  padding: '5px 10px',
                  borderRadius: '5px',
                  transition: 'all 0.5s ease',
                  textTransform: 'capitalize',
                  color: 'white',
                })}
                key={page}
              >
                {page}
              </NavLink>
            ),
          )}
        </Box>

        {userData ? (
          <Box
            sx={{
              flexGrow: 0,
              display: 'flex',
              gap: 1,
              alignItems: 'center',
            }}
          >
            <Tooltip title="Open settings">
              <IconButton
                onClick={handleOpenUserMenu}
                sx={{ p: 0, color: '#FF4601' }}
              >
                <PersonIcon />
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
              {settings.map((setting) => {
                const link =
                  setting.name === 'signout' ? 'signin' : setting.name;
                return (
                  <MenuItem key={setting.name} onClick={handleCloseUserMenu}>
                    {setting.icon}
                    <Link
                      onClick={setting.name === 'signout' ? logoutFun : null}
                      to={link}
                      style={{
                        textDecoration: 'none',
                        paddingLeft: '10px',
                        textTransform: 'capitalize',
                        color: '#000',
                      }}
                    >
                      {setting.name}
                    </Link>
                  </MenuItem>
                );
              })}
            </Menu>
            <Typography
              variant="h4"
              sx={{ color: '#fff', textTransform: 'capitalize' }}
            >
              {userData && userData?.username}
            </Typography>
          </Box>
        ) : (
          <Link
            style={{
              color: '#ff4601',
            }}
            to="/signin"
          >
            <LoginIcon />
          </Link>
        )}
      </Toolbar>
    </AppBar>
  );
};
export default NavbarClient;
