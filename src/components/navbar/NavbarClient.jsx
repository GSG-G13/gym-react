import * as React from 'react';

import PersonIcon from '@mui/icons-material/Person';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import LoginIcon from '@mui/icons-material/Login';
import {
  AppBar,
  Box, Toolbar,
  IconButton, Typography,
  Menu, Container, MenuItem, Tooltip,
} from '@mui/material';
import { NavLink } from 'react-router-dom';

const pages = ['home', 'store', 'class', 'chat', 'announcement'];
const settings = [{ name: 'Profile', icon: <AccountCircleIcon /> }, { name: 'Settings', icon: <SettingsIcon /> }, { name: 'SignIn', icon: <LoginIcon /> }];

const NavbarClient = () => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar sx={{
      width: '100%', backgroundColor: 'colors.primary', color: '#000',
    }}
    >
      <Container>
        <Toolbar sx={{
          display: 'flex',
          alignItems: 'center',

        }}
        >
          <Typography
            variant="h1"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              '&:hover': { color: '#000' },
            }}
          >
            GYM
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'end',
              gap: '60px',
            }}
            mr="60px"
          >
            {pages.map((page) => (

              <NavLink
                to={page === 'home' ? '/' : page}
                style={({ isActive }) => ({
                  backgroundColor: isActive ? '#002B5B' : '',
                  textDecoration: 'none',
                })}
              >

                <Typography
                  variant="h5"
                  key={page}
                  sx={{
                    color: '#000',
                    display: 'block',
                    textTransform: 'capitalize',
                  }}

                >
                  {page}
                </Typography>
              </NavLink>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton
                onClick={handleOpenUserMenu}
                sx={{ p: 0 }}
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
              {settings.map((setting) => (
                <MenuItem key={setting.name} onClick={handleCloseUserMenu}>
                  {setting.icon}
                  <Typography textAlign="center" ml="10px">{setting.name}</Typography>

                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavbarClient;
