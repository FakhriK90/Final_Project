import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import AssignmentIcon from '@mui/icons-material/Assignment';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import ListItemButton from '@mui/material/ListItemButton';
import LogoutIcon from '@mui/icons-material/Logout';
import List from '@mui/material/List';
import { Link } from 'react-router-dom'



export const mainListItems = (
  <div>
    <List>
    <Link to="/home" style={{textDecoration:"none", color:"black"}} >
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <HomeOutlinedIcon fontSize="large" />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>
          </Link>
          <Link to="/manageusers" style={{textDecoration:"none", color:"black"}} >
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <EmojiPeopleIcon fontSize="large" />
              </ListItemIcon>
              <ListItemText primary="Clients" />
            </ListItemButton>
          </ListItem>
          </Link>
          <Link to="/adminproduct" style={{textDecoration:"none", color:"black"}}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ProductionQuantityLimitsIcon fontSize="large" />
              </ListItemIcon>
              <ListItemText primary="Products" />
            </ListItemButton>
          </ListItem>
          </Link>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AssessmentOutlinedIcon fontSize="large" />
              </ListItemIcon>
              <ListItemText primary="Reports" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <BorderColorOutlinedIcon fontSize="large" />
              </ListItemIcon>
              <ListItemText primary="Orders" />
            </ListItemButton>
          </ListItem>
        </List>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem>
    {/* <Link to="/" style={{textDecoration:"none", color:"black"}}>
    
            <ListItemButton>
              <ListItemIcon>
                <LogoutIcon onClick={()=>{dispatch(logout());;history.push('/')}} fontSize="large" />
              </ListItemIcon>
            </ListItemButton>
          
          </Link> */}
  </div>
);