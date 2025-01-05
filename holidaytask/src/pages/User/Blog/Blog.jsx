import React from 'react'
import style from "./style.module.css"
import { NavLink , Link} from 'react-router-dom';

function Blog() {
  return (
    <div>
      <div className={style.hero}>
              <h1>Our Blog</h1>
              <p><span>Home</span> | Blog</p>
            </div>
            <section>
        <div className={style.florist}>
          
          <div className={style.floristcards}>
          <div className={style.floristcard}>
            <img src="https://preview.colorlib.com/theme/florist/img/blog/blog-1.jpg" alt="" />
            <h3>8 Romantic Gifts to Celebrate Your Wedding Anniversary</h3>
            <p>Flowers have a language all their own. In Victorian times, receiving a…</p>
            <span>MAY 22, 2020</span>
          </div>
          <div className={style.floristcard}>
            <img src="https://preview.colorlib.com/theme/florist/img/blog/blog-2.jpg" alt="" />
            <h3>Red Rose - Flower of love of Greek Mythology</h3>
            <p>Flowers have a language all their own. In Victorian times, receiving a…</p>
            <span>MAY 22, 2020</span>
          </div>
          <div className={style.floristcard}>
            <img src="https://preview.colorlib.com/theme/florist/img/blog/blog-3.jpg" alt="" />
            <h3>Beautiful Mandalas Made From Flowers by Kathy Klein</h3>
            <p>Flowers have a language all their own. In Victorian times, receiving a…</p>
            <span>MAY 22, 2020</span>
          </div>
          <div className={style.floristcard}>
            <img src="https://preview.colorlib.com/theme/florist/img/blog/blog-4.jpg" alt="" />
            <h3>Pansies and Violas for Cut Flowers</h3>
            <p>Flowers have a language all their own. In Victorian times, receiving a…</p>
            <span>MAY 22, 2020</span>
          </div>
          <div className={style.floristcard}>
            <img src="https://preview.colorlib.com/theme/florist/img/blog/blog-5.jpg" alt="" />
            <h3>6 Unique Features of the Floret Online Workshop</h3>
            <p>Flowers have a language all their own. In Victorian times, receiving a…</p>
            <span>MAY 22, 2020</span>
          </div>
          <div className={style.floristcard}>
            <img src="https://preview.colorlib.com/theme/florist/img/blog/blog-6.jpg" alt="" />
            <h3>Beyond Red Roses: Valentine’s Day Gift Guide</h3>
            <p>Flowers have a language all their own. In Victorian times, receiving a…</p>
            <span>MAY 22, 2020</span>
          </div>
          <div className={style.floristcard}>
            <img src="https://preview.colorlib.com/theme/florist/img/blog/blog-7.jpg" alt="" />
            <h3>A Year in Flowers Makes the New York Times Bestseller List</h3>
            <p>Flowers have a language all their own. In Victorian times, receiving a…</p>
            <span>MAY 22, 2020</span>
          </div>
          <div className={style.floristcard}>
            <img src="https://preview.colorlib.com/theme/florist/img/blog/blog-8.jpg" alt="" />
            <h3>Launching A Year in Flowersinto the World</h3>
            <p>Flowers have a language all their own. In Victorian times, receiving a…</p>
            <span>MAY 22, 2020</span>
          </div>
          <div className={style.floristcard}>
            <img src="https://preview.colorlib.com/theme/florist/img/blog/blog-9.jpg" alt="" />
            <h3>Pansies and Violas for Cut Flowers</h3>
            <p>Flowers have a language all their own. In Victorian times, receiving a…</p>
            <span>MAY 22, 2020</span>
          </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog
