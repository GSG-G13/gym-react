import * as React from 'react';

import PersonIcon from '@mui/icons-material/Person';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import LoginIcon from '@mui/icons-material/Login';
import {
  AppBar,
  Box, Toolbar,
  IconButton,
  Menu, Container, MenuItem, Tooltip,
} from '@mui/material';
import { Link, NavLink } from 'react-router-dom';

const pages = ['home', 'store', 'class', 'chat', 'announcement'];
const settings = [{ name: 'profile', icon: <AccountCircleIcon /> }, { name: 'setting', icon: <SettingsIcon /> }, { name: 'signin', icon: <LoginIcon /> }];

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
          <Link
            to="/"
            style={{
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
            {pages.map((page) => (

              <NavLink
                to={page === 'home' ? '/' : page}
                style={({ isActive }) => ({
                  backgroundColor: isActive ? '#002B5B' : '',
                  textDecoration: 'none',
                  padding: '5px 10px',
                  color: isActive ? '#fff' : '#002B5B',
                })}
                key={page}
              >
                {page}
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
                  <Link to={setting.name}>
                    {setting.name}
                  </Link>

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
