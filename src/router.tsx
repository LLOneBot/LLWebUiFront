import { createHashRouter } from 'react-router-dom';
import * as Pages from './pages';
import App from './App.tsx';

export const PagesRouter = createHashRouter([
  {
    path: '/',
    element: <App />,
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