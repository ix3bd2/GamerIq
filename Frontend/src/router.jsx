import { createBrowserRouter } from 'react-router-dom'

import App from './App.jsx';
import NotFound from './pages/NotFound.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },









    {
        path: '*',
        element: <NotFound />
    }
])
export default router;