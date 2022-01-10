import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

//components
import Fallback from './components/Fallback/Fallback';
import AdminLayout from './layouts/AdminLayout';
import ProtectedRoute from "./auth/ProtectedRoute"

//pages
const Login = React.lazy(() => import('./pages/LoginPage'));

const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const Member = React.lazy(() => import('./pages/MembersPage'));
const Ticket = React.lazy(() => import('./pages/TicketPage'));

const routes = [
  { path: 'dashboard', element: Dashboard },
  { path: 'member', element: Member },
  { path: 'ticket', element: Ticket }
]

function App() {

  const activeSidebar = true;

  return (
    <BrowserRouter>
      <React.Suspense fallback={<Fallback />}>

        <Routes>
          {/* public routes */}
          <Route path='login' element={<Login />} />

          {/* private routes */}
          <Route element={<ProtectedRoute />}>

            <Route element={<AdminLayout />}>
              {
                routes.map((route) => {
                  return <Route key={route.path} path={route.path} element={< route.element />} />
                })
              }
            </Route>

          </Route>
        </Routes>

      </React.Suspense>
    </BrowserRouter>
  );
}

export default App;
