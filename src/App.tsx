import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import {
  Box,
  IconButton,
  Toolbar,
  Container, createTheme, ThemeProvider,
} from '@mui/material';
import * as Components from './components';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';

import '@fontsource-variable/noto-sans-sc';
import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/700.css';

const appTheme = createTheme({
  typography: {
    fontFamily: [
      '"Inter"',
      '"Noto Sans SC Variable"',
      'sans-serif'
    ].join(','),
  },
})

function App() {
  const [ isDrawerClose, setIsDrawerClose ] = useState(true);

  return <ThemeProvider theme={appTheme}>
    <Box display={"flex"} alignItems={"stretch"} height={"100vh"}>
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
      <Box component='main' flexGrow={1} sx={{ overflow: 'auto', bgcolor: "#f7f7f7" }}>
        <Toolbar />
        <Container maxWidth='lg' sx={{ mt: 4, mb: 4 }}>
          <Outlet />
        </Container>
      </Box>
      <Components.Drawer open={!isDrawerClose} onClose={() => setIsDrawerClose(true)} />
    </Box>
  </ThemeProvider>
}

export default App
