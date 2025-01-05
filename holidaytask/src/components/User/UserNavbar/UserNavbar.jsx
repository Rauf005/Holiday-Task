import React from 'react'
import { NavLink } from 'react-router-dom';
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import style from "./style.module.css"
import { IoIosSearch } from "react-icons/io";

function UserNavbar() {
  return (
    <div className={style.navbar}>
      <div className={style.image}>
        <img src="https://preview.colorlib.com/theme/florist/img/logo.png" alt="" />
      </div>
      <div className={style.links}>
        <ul>
          <NavLink
            className={style.td}
            to="/"
            style={({ isActive }) => {
              return isActive ? { color: "#F45DB1" } : {};
            }}
          >
            <li>Home</li>
          </NavLink>

          <NavLink
            className={style.td}

            to="/about"
            style={({ isActive }) => {
              return isActive ? { color: "#F45DB1" } : {};
            }}
          >
            <li>About</li>
          </NavLink>

          <NavLink
            className={style.td}

            to="/service"
            style={({ isActive }) => {
              return isActive ? { color: "#F45DB1" } : {};
            }}
          >
            <li>Services</li>
          </NavLink>
          <NavLink
            className={style.td}

            to="/shop"
            style={({ isActive }) => {
              return isActive ? { color: "#F45DB1" } : {};
            }}
          >
            <li>Shop</li>
          </NavLink>
          <li>Pages
            <div className={style.pages}>
              <NavLink
                className={style.ta}

                to="/favorites"
                style={({ isActive }) => {
                  return isActive ? { color: "#F45DB1" } : {};
                }}
              >
                <p>Wishlist</p>
              </NavLink>
              <NavLink
                className={style.ta}

                to="/basket"
                style={({ isActive }) => {
                  return isActive ? { color: "#F45DB1" } : {};
                }}
              >
                <p>Basket</p>
              </NavLink>
              <p>Checkout</p>
              <p>Portfolio</p>
            </div>
          </li>

          <NavLink
            className={style.td}

            to="/blog"
            style={({ isActive }) => {
              return isActive ? { color: "#F45DB1" } : {};
            }}
          >
            <li>Blog</li>
          </NavLink>
          <NavLink
            className={style.td}

            to="/contact"
            style={({ isActive }) => {
              return isActive ? { color: "#F45DB1" } : {};
            }}
          >
            <li>Contact</li>
          </NavLink>
        </ul>
      </div>

      <div className={style.icons}>
        <div className={style.search}>
          <p><IoIosSearch /></p>
        </div>
        <div className={style.wishlist}>
          <p><NavLink style={{ color: "black" }} to="/favorites" ><FaRegHeart /></NavLink></p>
          <span>(05)</span>
        </div>
        <div className={style.basket}>
          <p><NavLink style={{ color: "black" }} to="/basket" ><MdOutlineShoppingBag /></NavLink></p>
          <span>(01)</span>
          <h5>$65.0</h5>
        </div>
      </div>
    </div>
  )
}

export default UserNavbar
