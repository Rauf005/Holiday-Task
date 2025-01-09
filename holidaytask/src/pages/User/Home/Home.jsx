
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import style from "./style.module.css"
import React, { useState, useEffect } from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { FaCircleInfo } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { CiShoppingBasket } from "react-icons/ci";
import { NavLink , Link} from 'react-router-dom';
import { IoIosSearch } from "react-icons/io";

function Home() {

  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [showAllItems, setShowAllItems] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  
  useEffect(() => {
    axios
      .get('http://localhost:3000/flowers')
      .then((response) => {
        setItems(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError('Data yoxdur');
        setLoading(false);
      });
  }, []);


  const currentItems = showAllItems ? items : items.slice(0, itemsPerPage);


  const handleShowAll = () => {
    setShowAllItems(true);
  };


  if (loading) return <div>Loading...</div>;


  if (error) return <div>{error}</div>;

  return (
    <div className={style.home}>
      <section id='carousel'>
        <div className={style.da} style={{ display: 'block', width: 1565 }}>
          <Carousel>
            <Carousel.Item interval={1500}>
              <img
                className="d-block w-100"
                src="https://preview.colorlib.com/theme/florist/img/hero/hero-1.jpg.webp"
                alt="Image One"
              />
              <Carousel.Caption className="text-start" style={{ color: 'black' }}>
                <div className={style.as}>
                <p>Fresh flower & gift shop</p>
                <h2>Making Beautiful Flower A Part Of Your Life</h2>
                <button><Link className={style.ta} to="/shop" >Shop Now</Link></button>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <img
                className="d-block w-100"
                src="https://preview.colorlib.com/theme/florist/img/hero/hero-2.jpg.webp"
                alt="Image Two"
              />
              <Carousel.Caption className="text-start" style={{ color: 'black' }}>
              <div className={style.as}>
                <p>Fresh flower & gift shop</p>
                <h2>Making Beautiful Flower A Part Of Your Life</h2>
                <button><Link className={style.ta} to="/shop" >Shop Now</Link></button>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </section>
      <section>
        <div className={style.linfo}>
          <div className={style.info}>
            <img src="https://preview.colorlib.com/theme/florist/img/benefit/benefit-1.png" alt="" />
            <div>
              <h3>100% Freshness</h3>
              <p>Most people are unaware of the less common flower</p>
            </div>
          </div>
          <div className={style.info}>
            <img src="https://preview.colorlib.com/theme/florist/img/benefit/benefit-2.png" alt="" />
            <div>
              <h3>Made by artist</h3>
              <p>Most people are unaware of the less common flower</p>
            </div>
          </div>
          <div className={style.info}>
            <img src="https://preview.colorlib.com/theme/florist/img/benefit/benefit-3.png" alt="" />
            <div>
              <h3>Own courier</h3>
              <p>Most people are unaware of the less common flower</p>
            </div>
          </div>
          <div className={style.info}>
            <img src="https://preview.colorlib.com/theme/florist/img/benefit/benefit-4.png" alt="" />
            <div>
              <h3>Deliverency</h3>
              <p>Most people are unaware of the less common flower</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className={style.flowersorts}>
          <div className={style.flowersort}>
            <img src="https://preview.colorlib.com/theme/florist/img/categories/categories-1.jpg" alt="" />
            <div className={style.flowertext}>
              <h3>Fresh Flowers</h3>
              <span>( 25 items )</span>
            </div>
          </div>
          <div className={style.flowersort}>
            <img src="https://preview.colorlib.com/theme/florist/img/categories/categories-2.jpg" alt="" />
            <div className={style.flowertext}>
              <h3>Succulent plants</h3>
              <span>( 63 items )</span>
            </div>
          </div>
          <div className={style.flowersort}>
            <img src="	https://preview.colorlib.com/theme/florist/img/categories/categories-3.jpg" alt="" />
            <div className={style.flowertext}>
              <h3>Cactus plants</h3>
              <span>( 58 items )</span>
            </div>
          </div>
          <div className={style.flowersort}>
            <img src="https://preview.colorlib.com/theme/florist/img/categories/categories-4.jpg" alt="" />
            <div className={style.flowertext}>
              <h3>Funiture tree</h3>
              <span>( 44 items )</span>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className={style.about}>
          <div className={style.aboutext}>
            <div>
              <span>About us</span>
              <h1>We provide all kinds of fresh flower services</h1>
            </div>
            <p>For Heather Henson, of Boreal Blooms in Cold Lake, Alberta, Canada, growing flowers that can be dried and incorporated into late fall and winter floral arrangements has been a game-changer. During her growing season, this farmer-florist relies on a vivid palette of annuals, perennials and ornamental grasses to supply her studio.</p>
          </div>
          <div className={style.bb}>
            <div className={style.video}>

              <iframe
                src="https://www.youtube.com/watch?v=i810CxN5Q6Q&pp=ygUGZmxvd2Vy"
                width="740"
                height="500"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className={style.aa}>
              <span>Slow Flowers’ Floral Insights</span>
              <h2>Dried flowers are having a renaissance</h2>
              <p>This awareness has been stimulated by sustainable sourcing practices and the desire on the part of North American flower growers to “extend the season” beyond the last frost.</p>
              <button><Link className={style.ta} to="/contact" >Contact Us</Link></button>
            </div>
          </div>

        </div>
      </section>
      <section>
        <div className={style.products}>
          <h4>Our flower
          </h4>
          <h1>New Arrivals</h1>
          <div className={style.cards}>

            {currentItems.map((item) => (
              <div className={style.card} key={item.id}>

                <div className={style.cardimg}>
                  <img src={item.image} alt={item.name} />
                  <div className={style.cardhover}>
                    <p><IoIosSearch /></p>
                    <p><FaHeart /></p>
                    <p> <CiShoppingBasket /></p>


                  </div>
                </div>

                <p>{item.name}</p>
                <span>{item.price}₼</span>

              </div>
            ))}
          </div>




          {items.length > itemsPerPage && !showAllItems && (
            <button onClick={handleShowAll} className={style.morebtn}>
              View All Products
            </button>
          )}
        </div>
      </section>
      <section>
        <div className={style.custom}>
          <div>
            <p>Custom flower</p>
            <h1>Let our flowers make your party more perfect.</h1>
          </div>
          <div className={style.buttonlar}>
            
            <button ><Link className={style.ta} to="/shop" >Order Now</Link></button>
            <button  className={style.con}><Link className={style.ta} to="/contact" >Contact Us</Link></button>
          </div>
        </div>
      </section>
      <section>
        <div className={style.florist}>
          <div className={style.floristhead}>
            <div>
              <p>Latest posts</p>
              <h1>Florist tricks</h1>
            </div>
            <button><Link className={style.ta} to="/blog" >View All Posts</Link></button>
          </div>
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
          </div>
        </div>
      </section>
      <section>
        <div className={style.comment}>
          <div className={style.commentext}>
          <p>“I just wanted to say thank you for making such gorgeous arrangements for our
            birthday celebration. I couldn’t get over how perfect they were for the
            party. You did a fantastic job, and I appreciate it very much”</p>
          <h5>Alejando Houston</h5>
          <h6>Businessman</h6>
          </div>
        </div>
      </section>
    </div>
  );

}

export default Home;
