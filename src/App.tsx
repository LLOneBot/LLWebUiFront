import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import {
  Box,
  IconButton,
  Toolbar,
  Container,
} from '@mui/material';
import * as Components from './components';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';

function App() {
  const [ isDrawerClose, setIsDrawerClose ] = useState(true);

  return <Box>
    <Components.AppBar
      title='LiteLoader WebUI'
      leftElements={[<IconButton
        edge='start'
        color='inherit'
        onClick={() => setIsDrawerClose(false)}
        sx={{ marginRight: '36px' }}
      >
        <MenuIcon />
      </IconButton>]}
      rightElements={[<IconButton color='inherit'>
        <LogoutIcon />
      </IconButton>]}
    />
    <Box component='main' sx={{ overflow: 'auto' }}>
      <Toolbar />
      <Container maxWidth='lg' sx={{ mt: 4, mb: 4 }}>
        <Outlet />
      </Container>
    </Box>
    <Components.Drawer open={!isDrawerClose} onClose={() => setIsDrawerClose(true)} />
  </Box>
}

export default App
