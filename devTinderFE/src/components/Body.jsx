import { BASE_URL } from '../utils/constant';
import Footer from './Footer';
import NavBar from './NavBar';
import { Outlet } from 'react-router-dom';
import React from 'react';
import { addUser } from '../utils/userSlice';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const Body = () => {
  const dispatch = useDispatch();

  const fetchUser = async () => {
    try {
      const userProfile = await axios.get(BASE_URL + '/profile/view', {
        withCredentials: true,
      });
      dispatch(addUser(userProfile.data));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Body;
