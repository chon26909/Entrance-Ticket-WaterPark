import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';

//components
import Fallback from './components/Fallback/Fallback';
import AdminLayout from './layouts/AdminLayout';
import ProtectedRoute from "./auth/ProtectedRoute"

//pages
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const Login = React.lazy(() => import('./pages/LoginPage'))

function App() {

  const activeSidebar = true;

  return (
    <BrowserRouter>
      <React.Suspense fallback={<Fallback />}>
        <Routes>
          <Route path='/login' element={ <Login/> } />
        </Routes>
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route path='/' element={ <Navigate to='/dashboard' /> }/>
            <Route path='/dashboard' element={<AdminLayout />}>
              <Route index element={<Dashboard />} />
            </Route>
          </Route>
        </Routes>
      </React.Suspense>
    </BrowserRouter>
  );
}

export default App;
