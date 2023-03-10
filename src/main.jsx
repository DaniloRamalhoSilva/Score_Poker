import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import ScoreAppProvider from './context/ScoreAppProvider';

import App from './App';
import Home from './pages/Home';
import Login from './pages/Login';
import Settings from './pages/Settings';
import Register from './pages/Register';
import Perfil from './pages/Perfil';
import PlayersTable from './pages/PlayersTable';
import Table from './pages/Table';
import PodioTable from './pages/PodioTable';
import OpenTable from './pages/OpenTable';

import 'bootstrap/dist/css/bootstrap.min.css';

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/settings',
        element: <Settings />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/perfil/:id',
        element: <Perfil />,
      },
      {
        path: '/table',
        element: <PlayersTable />,
      },
      {
        path: 'table/:id/match',
        element: <Table />,
      },
      {
        path: 'table/:id/match/podium',
        element: <PodioTable />,
      },
      {
        path: 'table/open',
        element: <OpenTable />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ScoreAppProvider>
      <RouterProvider router={router} />
    </ScoreAppProvider>
  </React.StrictMode>,
);
