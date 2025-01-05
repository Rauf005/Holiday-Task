import React, { useState, useEffect } from 'react';
import { FaHeart } from "react-icons/fa";
import { CiShoppingBasket } from "react-icons/ci";
import { useParams } from 'react-router-dom'; 
import axios from 'axios'; 
import style from "./style.module.css";

function ProductDetail() {

  const [item, setItem] = useState(null);  
  const [loading, setLoading] = useState(true);  
  const [error, setError] = useState(null);  

  
  const { id } = useParams();

  useEffect(() => {
    
    axios
      .get(`http://localhost:3000/flowers/${id}`)
      .then((response) => {
        setItem(response.data);  
        setLoading(false);  
      })
      .catch((error) => {
        setError('Məhsul məlumatları yüklənərkən xəta baş verdi'); 
        setLoading(false);  
      });
  }, [id]); 

  
  if (loading) return <div>Yüklənir...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <section>
        <div className={style.hero}>
          <h1>Detail</h1>
          <p><span>Home</span> | Detail</p>
        </div>
      </section>

      {item && (
        <section>
          <div className={style.detail}>
            <div className={style.card} key={item.id}>
              <div className={style.cardimg}>
                <img src={item.image} alt={item.name} />
                <div className={style.cardhover}>
                  <p><FaHeart /></p>
                  <p><CiShoppingBasket /></p>
                </div>
              </div>
              <p>{item.name}</p>
              <p>{item.categories}</p>
              <b>{item.availability}</b>
              <span>{item.price}₼</span>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default ProductDetail;
