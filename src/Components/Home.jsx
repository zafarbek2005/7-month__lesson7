import React from 'react'
import {useGetUsersQuery} from '../context/api/userApi'
import User__Wrapper from './User-Wrapper/User__Wrapper';
import Product from './Product__wrapper/Product';
import { useGetProdutsQuery } from '../context/api/Productapi';

export const Home = () => {
    let {data} = useGetUsersQuery()
    let {productData} = useGetProdutsQuery()
  console.log(productData);
  return (
   <>
   
   <User__Wrapper isAdmin={false} data = {data}/>
   <Product isAdmin={false} pData={productData}/>
   
   
   
   
   
   </>
  )
}
