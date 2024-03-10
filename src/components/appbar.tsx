import {
  AppBar as MuiAppBar,
  Toolbar,
  Typography
} from '@mui/material';

interface AppBarProps {
  title: string,
  leftElements?: JSX.Element[],
  rightElements?: JSX.Element[], 
}

export const AppBar = ({ title, leftElements = [], rightElements = [] }: AppBarProps) => {
  return <MuiAppBar position='absolute'>
    <Toolbar>
      { ...leftElements }
      <Typography
        component='h1'
        variant='h6'
        color='inherit'
        sx={{
          whiteSpac: 'nowrap',
          flexGrow: 1,
        }}
      >
        {title}
      </Typography>
      { ...rightElements }
    </Toolbar>
  </MuiAppBar>
}