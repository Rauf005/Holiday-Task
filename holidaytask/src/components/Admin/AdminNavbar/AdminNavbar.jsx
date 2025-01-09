import React from 'react'
import style from "./style.module.css"
import { NavLink } from 'react-router-dom';

function AdminNavbar() {
  return (
    <div className={style.navbar}>
      <div className={style.image}>
        <img src="https://preview.colorlib.com/theme/florist/img/logo.png" alt="" />
      </div>
      <div className={style.links}>
        <ul>
          <NavLink
            className={style.td}
            to="/admin"
            style={({ isActive }) => {
              return isActive ? { color: "#F45DB1" } : {};
            }}
          >
            <li>Dashboard</li>
          </NavLink>
          <NavLink
            className={style.td}
            to="/admin/addproduct"
            style={({ isActive }) => {
              return isActive ? { color: "#F45DB1" } : {};
            }}
          >
            <li>Add</li>
          </NavLink>
         
          
          <NavLink
            className={style.td}
            to="/admin/products"
            style={({ isActive }) => {
              return isActive ? { color: "#F45DB1" } : {};
            }}
          >
            <li>Products</li>
          </NavLink>
        </ul>
      </div>

      
    </div>
  )
}

export default AdminNavbar
