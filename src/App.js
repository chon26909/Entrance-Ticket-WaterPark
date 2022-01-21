import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
//routes
import routes from './routes';

//components
import Fallback from './components/Fallback/Fallback';
import AdminLayout from './layouts/AdminLayout';
import ProtectedRoute from "./auth/ProtectedRoute"
import { Redirect } from 'react-router-dom';

const Login = React.lazy(() => import('./pages/LoginPage'));

function App() {

  return (
    <BrowserRouter>
      <React.Suspense fallback={<Fallback />}>

        <Routes>
          {/* public routes */}
          <Route path='login' element={<Login />} />

          <Route path='/' element={<Navigate to="/dashboard" />} />


          {/* private routes */}
          <Route element={<ProtectedRoute />}>

            <Route element={<AdminLayout />}>
              {
                routes.map((route, key) => {
                  return <Route key={key} path={route.path} element={< route.element />} />
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
