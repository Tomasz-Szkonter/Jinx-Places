import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Tomasz Szkonter',
      image:
        'https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK_400x400.png',
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
