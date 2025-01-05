import React from 'react'
import UserFooter from '../components/User/UserFooter/UserFooter'
import UserNavbar from '../components/User/UserNavbar/UserNavbar'
import { Outlet } from 'react-router-dom'

function UserRoot() {
  return (
    <>
    <UserNavbar/>
    <Outlet/>
    <UserFooter/>
      
    </>
  )
}

export default UserRoot
