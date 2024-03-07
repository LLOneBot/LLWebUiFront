import { createHashRouter } from 'react-router-dom';
import * as Pages from './pages';
import { Header } from './header';

export const PagesRouter = createHashRouter([
  {
    path: '/',
    element: <Header />,
    children: [
      {
        path: '/',
        element: <Pages.Home/>,
      },
      {
        path: '/plugin',
        element: <Pages.Plugin/>,
      },
      {
        path: '/file',
        element: <Pages.File/>,
      },
    ]
  },
]);