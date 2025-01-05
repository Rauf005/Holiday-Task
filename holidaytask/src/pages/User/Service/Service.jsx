import React from 'react'
import style from "./style.module.css"

function Service() {
  return (
    <div>
      <section>
      <div className={style.hero}>
              <h1>Our Services</h1>
              <p><span>Home</span> | Services</p>
            </div>
      </section> 
      <section>
        <div className={style.ourserv}>
           <div className={style.services}>
                    <div className={style.servicetext}>
                    
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
        <div className={style.oursevtext}>
           <div className={style.video}>
          
                        <iframe
                          src="https://www.youtube.com/watch?v=i810CxN5Q6Q&pp=ygUGZmxvd2Vy"
                          width="840"
                          height="450"
                          frameBorder="0"
                          allow="autoplay; fullscreen; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>

          <div className={style.text}>
            <span>From $60 - $300</span>
            <p>For Heather Henson, of Boreal Blooms in Cold Lake, Alberta, Canada, growing flowers that can be dried and incorporated into late fall and winter floral arrangements has been a game-changer. During her growing season, this farmer-florist relies on a vivid palette of annuals, perennials and ornamental grasses to supply her studio.</p>
            <div>
              <div className={style.st}>
              <div>
              <img src="https://preview.colorlib.com/theme/florist/img/icon/icon.png" alt="" />
              <p>Priority delivery program. Red White & Bloom will work with each commercial customer to determine a weekly delivery schedule.</p>
              </div>
              <div>
              <img src="https://preview.colorlib.com/theme/florist/img/icon/icon.png" alt="" />
              <p>Priority delivery program. Red White & Bloom will work with each commercial customer to determine a weekly delivery schedule.</p>
              </div>
              </div>
              <div className={style.st}>
              <div>
              <img src="https://preview.colorlib.com/theme/florist/img/icon/icon.png" alt="" />
              <p>Priority delivery program. Red White & Bloom will work with each commercial customer to determine a weekly delivery schedule.</p>
              </div>
              <div>
              <img src="https://preview.colorlib.com/theme/florist/img/icon/icon.png" alt="" />
              <p>Priority delivery program. Red White & Bloom will work with each commercial customer to determine a weekly delivery schedule.</p>
              </div>
              </div>
              
            </div>
            <p>For Heather Henson, of Boreal Blooms in Cold Lake, Alberta, Canada, growing flowers that can be dried and incorporated into late fall and winter floral arrangements has been a game-changer. During her growing season, this farmer-florist relies on a vivid palette of annuals, perennials and ornamental grasses to supply her studio.</p>
          </div>
          <div className={style.quote}>
            <h2>Get a quote</h2>
            <form action="">
              <div>
              <input type="text" placeholder='Name'/>
              <input type="text" placeholder='Number'/>
              </div>
              <div>
              <input type="email" placeholder='Email'/>
              <input type="text" placeholder='Type Service'/>
              </div>
              
              <input type="textarea" id={style.area} placeholder='Message'/>
              
              <button type='submit'> SEND</button>
            </form>
          </div>
        </div>
        </div>
      </section>
    </div>
  )
}

export default Service
