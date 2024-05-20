import React from 'react';
import Product from '../../Product__wrapper/Product';
import { useGetUsersQuery } from '../../../context/api/userApi';

const ManageP = () => {
  const { data, error, isLoading } = useGetUsersQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading users</div>;

  return (
    <div>
      <h2>Manage Products</h2>
      <Product isAdmin={true} pData={data}/>
    </div>
  );
};

export default ManageP;
