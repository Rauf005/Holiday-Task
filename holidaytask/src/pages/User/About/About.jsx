import React from 'react'
import style from "./style.module.css"
import { NavLink , Link} from 'react-router-dom';

function About() {
  return (
    <div className={style.aboutm}>
      <section>
      <div className={style.hero}>
        <h1>About Us</h1>
        <p><span>Home</span> | About</p>
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
        <div className={style.services}>
          <div className={style.servicetext}>
          <h4>Our services</h4>
          <h1>Florist’s services</h1>
        <div className={style.servicecarts}>
        <div className={style.servicecart}>
            <div className={style.simg}>
              <img src="https://preview.colorlib.com/theme/florist/img/services/services-1.png" alt="" />
            </div>
            <h3>Custom orders</h3>
            <p>Flower helps you perfectly express how important your significant.</p>
          </div> 
          <div className={style.servicecart}>
            <div className={style.simg}>
              <img src="https://preview.colorlib.com/theme/florist/img/services/services-2.png" alt="" />
            </div>
            <h3>Event decoration</h3>
            <p>Flower helps you perfectly express how important your significant.</p>
          </div>
          <div className={style.servicecart}>
            <div className={style.simg}>
              <img src="https://preview.colorlib.com/theme/florist/img/services/services-3.png" alt="" />
            </div>
            <h3>Green landscape</h3>
            <p>Flower helps you perfectly express how important your significant.</p>
          </div>
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
             <section>
                    <div className={style.florist}>
                      <div className={style.floristhead}>
                        <div>
                          <p>Our Team Member</p>
                          <h1>Flower Experts</h1>
                        </div>
                        <button><Link className={style.ta} to="/blog" >View All Posts</Link></button>
                      </div>
                      <div className={style.floristcards}>
                      <div className={style.floristcard}>
                        <img src="https://preview.colorlib.com/theme/florist/img/team/team-3.jpg" alt="" />
                        <h1>Richard Osborne</h1>
                        <p>Manager</p>
                        <span>MAY 22, 2020</span>
                      </div>
                      <div className={style.floristcard}>
                        <img src="https://preview.colorlib.com/theme/florist/img/team/team-2.jpg" alt="" />
                        <h1>Kate Miller</h1>
                        <p>Manager</p>
                        <span>MAY 22, 2020</span>
                      </div>
                      <div className={style.floristcard}>
                        <img src="https://preview.colorlib.com/theme/florist/img/team/team-4.jpg" alt="" />
                        <h1>Anna White</h1>
                        <p>Manager</p>
                        <span>MAY 22, 2020</span>
                      </div>
                      <div className={style.floristcard}>
                        <img src="https://preview.colorlib.com/theme/florist/img/team/team-1.jpg" alt="" />
                        <h1>Jane Gray</h1>
                        <p>Manager</p>
                        <span>MAY 22, 2020</span>
                      </div>
                      </div>
                    </div>
                  </section>
    </div>
  )
}

export default About
