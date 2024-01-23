import React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
    createRoutesFromElements,
    Route,
  } from "react-router-dom";
import Card from './Card';
import Routelayot from '../Routelayot';

  const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Routelayot/>}>
            <Route path='/' element={<Card/>} />

        </Route>

    )
  );

const Cardds = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default Cardds