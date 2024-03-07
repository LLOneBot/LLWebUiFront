import { Link, Outlet } from 'react-router-dom';

export const Header = () => {
  return <>
    <div>
      <h1>Welcome to the app!</h1>
      <div>
        <Link to='/'>Home</Link>
        <Link to='/plugin'>Plugin</Link>
        <Link to='/file'>File</Link>
      </div>
    </div>
    <div>
      <Outlet />
    </div>
  </>
}