import React from 'react'
import style from "./style.module.css"
import { FaMapMarker } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

function Contact() {
  return (
    <div>
      <section>
      <div className={style.hero}>
              <h1>Contact Us</h1>
              <p><span>Home</span> | Contact</p>
            </div>
      </section>
      <section>
        <div className={style.contact}>
          <div className={style.touch}>
            <h1>Get in touch</h1>
            <strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed et dolore.</strong>
            <p> <b><FaMapMarker /></b>69 North Cleveland Street, Memphis,USA.</p>
            <p> <b><FaPhoneAlt /></b> (123) 8111 9210 - (012) 1111 6868</p>
            <p> <b><IoMdMail /></b> Florisr@supportthem.com</p>
          </div>
          <div className={style.reg}>
            <h1>Contact Us</h1>
            <form action="">
              <input  type="Email" placeholder='Email' />
              <input id={style.area} type="textarea" placeholder='Message' />
              <button type='submit'> Send</button>
            </form>
          </div>
          <div className={style.map}>
          <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d93379.52104393607!2d-86.38687!3d39.694442!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886ca48c841038a1%3A0x70cfba96bf847f0!2sPlainfield%2C%20IN%2C%20USA!5e1!3m2!1sen!2sbd!4v1735997108074!5m2!1sen!2sbd"
      width="400"
      height="260"
      style={{ border: '0' }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
          </div>

        </div>
      </section>
    </div>
  )
}

export default Contact
