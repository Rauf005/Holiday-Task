import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import style from "./style.module.css"
import { NavLink } from 'react-router-dom';

function UserFooter() {
  return (
    <div className={style.footer}>
      <section>
      <div className={style.images}>
        <div className='aa'><img src="https://blossmcart.com/wp/wp-content/uploads/2023/03/Violets.jpg" alt="" />
        <div className={style.follow}>
          <p><FaInstagram /></p>
        <span>Follow Us</span>
        <a href="">@florist</a>
        </div>
        </div>
        <div>
          <img src="https://img1.wsimg.com/isteam/stock/uyrloGey7VH22Vnz6/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1280,h:853" alt="" />
          <div className={style.follow}>  <p><FaInstagram /></p>
        <span>Follow Us</span>
        <a href="">@florist</a>
        </div>
        </div>
        <div><img src="https://cdn.pixabay.com/photo/2018/03/07/07/14/lotus-3205378_960_720.jpg" alt="" />
        <div className={style.follow}>  <p><FaInstagram /></p>
        <span>Follow Us</span>
        <a href="">@florist</a>
        </div>
        </div>
        <div><img src="https://i.pinimg.com/736x/cd/f6/cf/cdf6cf7c9f23249b5f5faf1644a6e159.jpg" alt="" />
        <div className={style.follow}>  <p><FaInstagram /></p>
        <span>Follow Us</span>
        <a href="">@florist</a>
        </div>
        </div>
        <div ><img src="https://helloeucalyptus.com/cdn/shop/files/Tezza-2246_0f9d4652-003b-4ec3-b42d-db41edf624ae.jpg?v=1710480720" alt="" />
        <div className={style.follow}>  <p><FaInstagram /></p>
        <span>Follow Us</span>
        <a href="">@florist</a>
        </div>
        </div>
      </div>
      </section>
<div className={style.footertext}>
  <div className={style.textimg}>
    <img src="https://preview.colorlib.com/theme/florist/img/logo.png.webp" alt="" />
  </div>
  <p>The floristry business has a significant market in the corporate and social event world, as flowers</p>
  <div className={style.socials}>
  <FaFacebookF />
  <FaTwitter />
  <FaInstagram />
  <FaLinkedinIn />
  </div>
</div>
<div className={style.foot_links}>
  <div className={style.comp_acc}>
    <div className={style.company}>
      <h2>Company</h2>
      <ul>
      <NavLink
            className={style.td}
            to="/about">
            <li>About Us</li>
          </NavLink>
          <NavLink
            className={style.td}
            to="/service">
            <li>Services</li>
          </NavLink>
          <NavLink
            className={style.td}
            to="/contact">
            <li>Contact Us</li>
          </NavLink>
        
      </ul>
    </div>
    <div className={style.account}>
      <h2>Account</h2>
      <ul>
      <NavLink
            className={style.td}
            to="/basket">
            <li>My Cart</li>
          </NavLink>
          <NavLink
            className={style.td}
            to="/favorites">
            <li>Wishlist</li>
          </NavLink>
        <li>Login/Register</li>
      </ul>
    </div>
  </div>
  <div className={style.newletter}>
    <h2>Newletter</h2>
    <p>Subcribe to our newsletter to get more free tips. No Spam, Promise.</p>
    <form action="">
    <input type="email" placeholder='Email' />
    <button type='submit'>Subscribe</button>
    </form>
  </div>
  <div className={style.touch}>
    <h2>Get in touch</h2>
    <p>69 North Cleveland Street, Memphis,USA.</p>
    <p>(123) 8111 9210 - (012) 1111 6868</p>
    <p>Florisr@supportthem.com</p>
  </div>
</div>
<div className={style.end}>
  <p>Copyright ©2025 All rights reserved | This template is made with <span><FaHeart /></span>  by <span>Colorlib</span></p>
</div>
    </div>
  )
}

export default UserFooter
