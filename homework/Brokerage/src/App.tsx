// import { useState } from 'react'
import './App.css'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from './context/user.context';
import { useContext, useEffect, useState } from 'react';
import  { ProductContext } from './context/products.context';

function App() {

  const { user } = useContext(UserContext);
  // const  products  = useContext(ProductContext)
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate('/sign-in')
    }
    else{
      navigate('/products');
    }
  })
  return (
    <>
      <h1>Hello for {user?.name}  {user?.lname}</h1>
    </>
  );
}

export default App
