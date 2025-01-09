import React from 'react'
import style from "./style.module.css"
import { FaHeart } from "react-icons/fa";
function AdminFooter() {
  return (
    <div>
      <div className={style.end}>
        <p>Copyright ©2025 All rights reserved | This template is made with <span><FaHeart /></span>  by <span>Colorlib</span></p>
      </div>
          
    </div>
  )
}

export default AdminFooter
