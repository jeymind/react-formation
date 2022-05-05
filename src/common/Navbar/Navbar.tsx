import '@/styles/navbar.css';
import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import routes from '@/router/routes';

const Navbar: FC = () => {
  return (
    <div className="navigation topnav">
      <NavLink to={routes.HOME}>Home</NavLink>
      <NavLink to={routes.CHARACTER}>Character</NavLink>
      <NavLink to={routes.FAVORITES}>Favorite</NavLink>
    </div>
  );
};

export default Navbar;
