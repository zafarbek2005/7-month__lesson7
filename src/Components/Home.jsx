import React from 'react'
import {useGetUsersQuery} from '../context/api/userApi'
import User__Wrapper from './User-Wrapper/User__Wrapper';
import Product from './Product__wrapper/Product';

export const Home = () => {
    let {data} = useGetUsersQuery()

  return (
   <>
   
   <User__Wrapper isAdmin={false} data = {data}/>
   <Product isAdmin={false} pData={data}/>
   
   
   
   
   
   </>
  )
}
