import React from 'react';
import UserWrapper from '../../User-Wrapper/User__Wrapper';
import {useGetUsersQuery} from '../../../context/api/userApi'

const Manage = () => {
  const { data, error, isLoading } = useGetUsersQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading users</div>;

  return (
    <div>
      <h2>Manage Users</h2>
      <UserWrapper isAdmin={true} data={data} />
    </div>
  );
};

export default Manage;
