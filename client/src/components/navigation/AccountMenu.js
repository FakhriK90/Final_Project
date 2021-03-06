import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import PersonAdd from '@mui/icons-material/PersonAdd';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import Settings from '@mui/icons-material/Settings';
import HomeIcon from '@mui/icons-material/Home';
import { purple } from '@mui/material/colors';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Logout from '@mui/icons-material/Logout';
import { logout } from '../../redux/actions/actions';
import { Link } from 'react-router-dom'

export default function AccountMenu() {
  
  const userId = useSelector(state => state.profileReducer.user)
    const history=useHistory()
  const dispatch = useDispatch()
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        
        <Tooltip title="Account settings">
          <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
            <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
          <Link to="/homeclient" style={{textDecoration:"none", color:"black"}} >
          <MenuItem>
          <HomeIcon /> Home
        </MenuItem>
        </Link>
        <Link to="/profile" style={{textDecoration:"none", color:"black"}} >
        <MenuItem>
          <PersonPinIcon /> My Profile
        </MenuItem>
        </Link>
       <Link to={`/cartclient/${userId._id}`}>
        <MenuItem>
          <ShoppingCartRoundedIcon /> My Cart
        </MenuItem>
        </Link> 
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={()=>{dispatch(logout());;history.push('/')}} fontSize="large" sx={{ color: purple[400] }} >
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
