import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import GridViewIcon from '@mui/icons-material/GridView';
import LogoutIcon from '@mui/icons-material/Logout';
import BusinessCenterRoundedIcon from '@mui/icons-material/BusinessCenterRounded';
import { Typography } from '@mui/material';
import { useDispatch } from 'react-redux';

function NavBar(){
    const drawerWidth = 250;
    const dispatch = useDispatch();
    function menuIcon(value){
        if(value==='Dashboard' || value==='Reports') return <GridViewIcon/>
        else if(value==='Sign Out') return <LogoutIcon/>
        else return <BusinessCenterRoundedIcon/>
    }
    return(
        <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        
        <List sx={{backgroundColor:"hsl(249deg 68% 29%)", height:"100%"}}>
          {['Dashboard','Manage Subscription', 'Young Brain', 'Mid Career', 'Vendor',
          'Consultant','Reports'].map((item) => (
            <ListItem key={item} disablePadding sx={{color:"#e0e0e0",margin:"10px 0"}}>
              <ListItemButton>
                <ListItemIcon sx={{color:"#e0e0e0"}}>
                    {menuIcon(item)}
                </ListItemIcon>
                <Typography sx={{fontSize:"15px",fontFamily:"revert"}}>{item}</Typography>
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem disablePadding sx={{color:"#e0e0e0",margin:"10px 0"}}>
              {/*Added functionality to clear data and to clear redux action data on signout */}
              <ListItemButton onClick={()=>{
                  dispatch({ type: "REGISTER_DATA", payload: null }); 
                  dispatch({ type: "ALLOWANCE_DATA", payload: null });
                  sessionStorage.clear();
                  localStorage.clear();
                }}>
                <ListItemIcon sx={{color:"#e0e0e0"}}>
                    {menuIcon('Sign Out')}
                </ListItemIcon>
                <Typography sx={{fontSize:"15px",fontFamily:"revert"}}>Sign Out</Typography>
              </ListItemButton>
            </ListItem>
        </List>
      </Drawer>
    )
}

export default NavBar;