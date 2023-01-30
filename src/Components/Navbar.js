import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import mgimg from ".././assets/images/mg_logo.png";
const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static" sx={{boxShadow:'none'}}>
      <Toolbar style={{display:'flex',justifyContent:'space-between',backgroundColor:'aliceblue'}}>
        <div class="img">
          <img src={mgimg} alt="#" style={{width:'180px'}} />
        </div>
        <Button color="inherit" style={{color:'#0078c3',fontWeight:'800'}}>Logout</Button>
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default Navbar
