import {Avatar, Box, Button, Checkbox, FormControlLabel, TextField, Typography,} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const UrlReg = /^https?:\/\/.+/;

export const Login = () => {
  const params = Object.fromEntries((new URLSearchParams(window.location.search)).entries());
  const paramUrl = params.url && UrlReg.test(params.url) ? params.url : '';

  return (
  <Box
    sx={{
      marginTop: 8,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}
  >
    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
      <LockOutlinedIcon />
    </Avatar>
    <Typography component='h1' variant='h5'>登陆 WebUI</Typography>
    <Box component='form' onSubmit={(e) => {
      e.preventDefault();

      const form = new FormData(e.currentTarget);
      const data = Object.fromEntries(form.entries());

      console.log(data);
    }} sx={{ mt: 1 }}>
      <TextField
        margin='normal'
        fullWidth
        required
        name='url'
        type='url'
        autoComplete='url'
        label='WebAPI 地址'
        value={paramUrl}
      />
      <TextField
        margin='normal'
        fullWidth
        required
        name='username'
        autoComplete='username'
        label='用户名'
        autoFocus
      />
      <TextField
        margin='normal'
        fullWidth
        required
        name='password'
        type='password'
        autoComplete='password'
        label='密码'
      />
      <FormControlLabel
        control={<Checkbox name='remember' color='primary' />}
        label='7 天内免登录'
      />
      <Button
        type='submit'
        fullWidth
        variant='contained'
        sx={{ mt: 3, mb: 2 }}
      >
        登陆
      </Button>
    </Box>
  </Box>);
}