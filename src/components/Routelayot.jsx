import React from 'react'
import { Outlet } from 'react-router-dom'
import Futter from './Futter'
import Naver from './Naver'

const Routelayot = () => {
  return (
   <>
<Naver/>
<Outlet/>
<Futter/>
   
   </>
  )
}

export default Routelayot