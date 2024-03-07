import { PagesRouter } from './router';
import { RouterProvider } from 'react-router-dom';

function App() {
  return (
    <RouterProvider router={PagesRouter} />
  )
}

export default App
