import { createBrowserRouter } from 'react-router-dom'
import App from '../App';
import People from '../People';

export const routes = createBrowserRouter ([
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/:id',
        element: <People />,
    }
]);