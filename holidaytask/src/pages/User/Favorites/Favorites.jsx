import React from 'react'
import style from "./style.module.css"
import { useContext } from 'react'
import { favoriteContext } from '../../../Context/FavoriteContext'



function Favorites() {
  let { favorites,setFavorites } = useContext(favoriteContext)
  function  handleDeleteFavorite(id){
    let deleteFavorite=favorites.filter(favorite=>favorite.id!==id)
    setFavorites(deleteFavorite)
  }

  return (
    <div>
      <div className={style.hero}>
              <h1>Wishlist</h1>
              <p><span>Home</span> | Wishlist</p>
            </div>
    </div>
  )
}

export default Favorites
