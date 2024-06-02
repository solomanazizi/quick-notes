import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import HomePage from '../Pages/HomePage/HomePage';
import TemplatePage from '../Pages/TemplatePage/TemplatePage';
import EditTemplatePage from '../Pages/EditTemplatePage/EditTemplatePage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <HomePage />,
      },
      {
        path: 'template/:id',
        element: <TemplatePage />,
      },
      {
        path: 'edit-template',
        element: <EditTemplatePage />,
      },
    ],
  },
]);
