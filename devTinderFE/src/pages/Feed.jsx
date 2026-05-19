import React, { useState, useEffect } from 'react';

import { getUserFeed } from '../services/userService';
import UserCard  from '../components/atoms/UserCard';

const Feed = () => {
  const [data, setData] = useState(null);
  
  const getUserData = async () => {
    try {
      const { data } = await getUserFeed();
      setData(data);
    } catch (err) {
      console.error('Error fetching feed:', err);
      return [];
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return data?.users && data.users.length > 0 ? (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4'>
      {data.users.map((user) => (
        <UserCard
          key={user._id}
          name={user.name}
          age={user.age}
          gender={user.gender}
          photo={user.photo}
          about={user.about}
          skills={user.skills}
        />
      ))}
    </div>
  ) : (
    <p className='text-center text-gray-500 mt-10'>
      No users to show. Try again later!
    </p>
  );
};

export default Feed;
