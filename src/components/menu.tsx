import { Menu as AntMenu } from 'antd';
import { useLocation, Link } from 'react-router-dom';

export const Menu = () => {
  const location = useLocation();
  const currentPath = location.pathname.slice(1);
  const currentPageKey = currentPath !== '' ? currentPath : 'home';

  return <AntMenu theme='dark' selectedKeys={[currentPageKey]} items={[
    {
      key: 'home',
      label: <Link to='/'>Home</Link>,
    },
    {
      key: 'plugin',
      label: <Link to='/plugin'>Plugin</Link>,
    },
    {
      key: 'file',
      label: <Link to='/file'>File</Link>,
    },
  ]} />
}