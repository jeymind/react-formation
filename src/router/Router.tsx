import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Character from '../components/Character/Character';
import Favorites from '../components/Favorites/Favorites';
import Home from '../components/Home/Home';
import NotFound from '../components/NotFound/NotFound';
import routes from './routes';

const Router = () => {
  return (
    <Routes>
      <Route path={routes.HOME} element={<Home />} />
      <Route path={routes.CHARACTER} element={<Character />} />
      <Route path={routes.FAVORITES} element={<Favorites />} />
      <Route path="/" element={<Navigate to={routes.HOME} />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
