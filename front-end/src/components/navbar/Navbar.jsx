import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import "./Navbar.scss";

function Navbar() {
  const [active, setActive] = useState(false);
  const [user, setUser] = useState(null); // State for user data
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const { pathname } = useLocation();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  useEffect(() => {
    // Retrieve user data from local storage
    const userData = localStorage.getItem('user');
    if (userData) {
      const user = JSON.parse(userData);
      setUser(user);
      // Also store the username separately
      localStorage.setItem('username', user.name);
    }
  }, []);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('username');
    setUser(null);
    handleClose(); // Close the menu after logout
  };

  return (
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link className="link" to="/">
            <img src="./img/Logo3.png" className="logo-image" alt="logo" />
            <span className="text">reelanceFiesta</span>
          </Link>
          <span className="dot">.</span>
        </div>
        <div className="links">
          <span><Link to="/MyGigs" className="link">My Services</Link></span>
          <span><Link to="/gigs" className="link">Explore</Link></span>
          <span><Link to="/Messages" className="link">Message</Link></span>
          {user ? (
            <div className="userActions">
              <Tooltip title="Account settings">
                <IconButton
                  onClick={handleClick}
                  size="small"
                  sx={{ ml: 2 }}
                  aria-controls={open ? 'account-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                >
                  <Avatar
                    sx={{
                      width: 32,
                      height: 32,
                      color: active ? '#7796cb' : 'black', // Change color based on active state
                      bgcolor: active ? 'black' : '#7796cb', // Change background color based on active state
                    }}
                  >
                    {user.name[0]}
                  </Avatar>
                </IconButton>
              </Tooltip>
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    bgcolor: '#7796cb', // Set the dropdown background color to black
                    color: 'white', // Set the text color to white
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                      color: 'black', // Set avatar text color to black
                      bgcolor: '#7796cb', // Set avatar background color to #bf1d1d
                    },
                    '&::before': {
                      content: '""',
                      display: 'block',
                      position: 'absolute',
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: '#7796cb', // Ensure the arrow color matches the background
                      transform: 'translateY(-50%) rotate(45deg)',
                      zIndex: 0,
                      color:'white'
                    },
                  },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
              >
                <MenuItem sx={{ color: 'white' }}>
                  <Avatar /> {user.name}
                </MenuItem>
                <MenuItem sx={{ color: 'white' }} onClick={handleClose}>
                  <Avatar /> My account
                </MenuItem>
                <Divider sx={{ bgcolor: 'gray' }} />
                <Link to={"/signin"}><MenuItem sx={{ color: 'white' }} onClick={handleClose}>
                  <ListItemIcon sx={{ color: 'white' }}>
                    <PersonAdd sx={{ bgcolor: '#d1d2f9', borderRadius: '50%', p: 0.5 }} fontSize="small" />
                  </ListItemIcon>
                  Add another account
                </MenuItem></Link>
                <MenuItem sx={{ color: 'white' }} onClick={handleClose}>
                  <ListItemIcon sx={{ color: 'white' }}>
                    <Settings sx={{ bgcolor: '#d1d2f9', borderRadius: '50%', p: 0.5 }} fontSize="small" />
                  </ListItemIcon>
                  Settings
                </MenuItem>
                <MenuItem sx={{ color: 'white' }} onClick={handleLogout}>
                  <ListItemIcon sx={{ color: 'white' }}>
                    <Logout sx={{ bgcolor: '#d1d2f9', borderRadius: '50%', p: 0.5 }} fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
            </div>
          ) : (
            <Link to="/Signin" className="link"><button className="butt"><span>Freelancer</span></button></Link>
          )}
        </div>
      </div>
      <div className="menu">
        <Link className="link menuLink menuhover" to="/gigs">Graphics & Design</Link>
        <Link className="link menuLink menuhover" to="/gigs">Video & Animation</Link>
        <Link className="link menuLink menuhover" to="/gigs">Writing & Translation</Link>
        <Link className="link menuLink menuhover" to="/gigs">AI Services</Link>
        <Link className="link menuLink menuhover" to="/gigs">Digital Marketing</Link>
        <Link className="link menuLink menuhover" to="/gigs">Music & Audio</Link>
        <Link className="link menuLink menuhover" to="/gigs">Programming & Tech</Link>
        <Link className="link menuLink menuhover" to="/gigs">Business</Link>
        <Link className="link menuLink menuhover" to="/gigs">Lifestyle</Link>
      </div>
    </div>
  );
}

export default Navbar;
