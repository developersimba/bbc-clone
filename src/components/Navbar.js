import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { signOut } from 'firebase/auth';
import { Button } from '@mui/material';
import { auth } from '../firebase/setup';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {

    const navigate = useNavigate()

    const logout = async()=>{
        try{
            await signOut(auth)
            navigate("/")
        }catch(err){
            console.error(err)
        } 
    }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{bgcolor:"#3AAFA9"}} elevation={0} position="static">
        <Toolbar variant="dense">
          <Typography  component="div">
            YS2 dictionary
          </Typography>
          {auth.currentUser && <Button onClick={logout} sx={{bgcolor:"white",color:"black",ml:"10px"}} size="small" >Logout</Button>}
        </Toolbar>
      </AppBar>
    </Box>
  );
}