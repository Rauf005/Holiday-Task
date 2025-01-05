import axios from 'axios';
import style from "./style.module.css";
import React, { useState, useEffect } from 'react';
import { FaHeart } from "react-icons/fa";
import { CiShoppingBasket } from "react-icons/ci";
import { NavLink, Link } from 'react-router-dom';
import { IoIosSearch } from "react-icons/io";

function Shop() {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [showAllItems, setShowAllItems] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('');

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

 
  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  
  const sortedItems = filteredItems.sort((a, b) => {
    if (sortOption === 's') {
      return a.price - b.price;  
    } else if (sortOption === 'v') {
      return b.price - a.price;  
    }
    return 0; 
  });

  const currentItems = showAllItems ? sortedItems : sortedItems.slice(0, itemsPerPage);

  const handleShowAll = () => {
    setShowAllItems(true);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  if (loading) return <div>Loading...</div>;

  if (error) return <div>{error}</div>;

  return (
    <div className={style.shop}>
      <div className={style.hero}>
        <h1>Shop</h1>
        <p><span>Home</span> | Shop</p>
      </div>
      <section>
        <div className={style.ss}>
          <form action="">
            <input
              type="text"
              placeholder='Search'
              value={searchQuery}
              onChange={handleSearchChange}
            />
            
          </form>
          <select id={style.sort} onChange={handleSortChange}>
            <option value="" disabled selected>Sort</option>
            <option value="v">Expensive</option>
            <option value="s"> Cheap</option>
          </select>
        </div>
        <div className={style.products}>
          <div className={style.cards}>
            {currentItems.map((item) => (
              <div className={style.card} key={item.id}>
                <div className={style.cardimg}>
                  <img src={item.image} alt={item.name} />
                  <div className={style.cardhover}>
                    <p><IoIosSearch /></p>
                    <p><FaHeart /></p>
                    <p><CiShoppingBasket /></p>
                  </div>
                </div>
                <p>{item.name}</p>
                <span>{item.price}₼</span>
              </div>
            ))}
          </div>

          {filteredItems.length > itemsPerPage && !showAllItems && (
            <button onClick={handleShowAll} className={style.morebtn}>
              View All Products
            </button>
          )}
        </div>
      </section>
    </div>
  );
}

export default Shop;
