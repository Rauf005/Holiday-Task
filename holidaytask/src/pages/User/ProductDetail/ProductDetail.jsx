import React from 'react'
import { NavLink , Link} from 'react-router-dom';
import style from "./style.module.css"

function ProductDetail() {
  return (
    <div>
       <section>
            <div className={style.hero}>
              <h1>Detail</h1>
              <p><span>Home</span> | Detail</p>
            </div>
            </section>
            <section>
              <div className={style.detail}>

              </div>
            </section>
    </div>
  )
}

export default ProductDetail
