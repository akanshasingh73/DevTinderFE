import NavBar from './NavBar';
import { Outlet } from 'react-router-dom';
import React from 'react';

const Body = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default Body;
