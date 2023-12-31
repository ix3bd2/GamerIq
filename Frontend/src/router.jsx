import { createBrowserRouter } from 'react-router-dom'

import App from './App.jsx';

import GameKeys from './pages/gameKeys.jsx';
import NotFound from './pages/NotFound.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/games',
        element : <GameKeys/>
    },
    {
        path: '*',
        element: <NotFound />
    }
])
export default router;