import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GameLog from './pages/GameLog';
import NotFoundPage from './pages/NotFoundPage';
import MainLayout from './layouts/MainLayout';
import SignIn from './pages/SignIn';
import './index.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="gamelog" element={<GameLog />} />
      <Route path="sign-in" element={<SignIn />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

const App = () => {
  return (
    <> 
      <RouterProvider router={router} />
    </>
  );
};

export default App;
