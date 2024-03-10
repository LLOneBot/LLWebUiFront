import { useNavigate } from 'react-router-dom';
import {
  Drawer as MuiDrawer, DrawerProps,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ExtensionIcon from '@mui/icons-material/Extension';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';

export const Drawer = ({ open, onClose }: DrawerProps) => {
  const navigate = useNavigate();

  return <MuiDrawer open={open} onClose={onClose}>
    <Box sx={{ width: 250 }} onClick={onClose}>
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={() => navigate('/')}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary='Home' />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => navigate('/plugin')}>
            <ListItemIcon>
              <ExtensionIcon />
            </ListItemIcon>
            <ListItemText primary='Plugin' />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => navigate('/file')}>
            <ListItemIcon>
              <InsertDriveFileIcon />
            </ListItemIcon>
            <ListItemText primary='File' />
          </ListItemButton>
        </ListItem>
        { /* TODO: Installed plugin list */ }
      </List>
    </Box>
  </MuiDrawer>
};
