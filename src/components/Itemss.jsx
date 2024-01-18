import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
  } from "react-router-dom";

  const router = createBrowserRouter(
    createRoutesFromElements(
        <Route  path="/" element={<Routelayot/>}>
            <Route path="/" element={<Products/>}/>
        </Route>
    )
  );

import React from 'react'
import Routelayot from "./Routelayot";
import Products from "./Products";
const Itemss = () => {
  return (
    <div>
           <RouterProvider router={router} />
    </div>
  )
}

export default Itemss