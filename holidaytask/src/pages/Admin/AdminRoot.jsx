import React from 'react'
import AdminFooter from '../../components/Admin/AdminFooter/AdminFooter'
import AdminNavbar from '../../components/Admin/AdminNavbar/AdminNavbar'
import { Outlet } from "react-router"

function AdminRoot() {
  return (
    <>
    <AdminNavbar/>
    <Outlet/>
    <AdminFooter/>
  </>
  )
}

export default AdminRoot