import style from "./style.module.css"
import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate, useParams } from 'react-router-dom'
import axios from "axios"
import { useState } from 'react'
function BooksDetail () {
    let [book,setBook]=useState({})
    let {id}=useParams()
    let navigate=useNavigate()
    async function GetProduct(){
        let result=await  axios.get(`http://localhost:3000/flowers/${id}`)
        setBook(result.data)
    }
    useEffect( ()=>{
       GetProduct()
    },[id])   
  return (
   <>
   <div  className={style.info}>
   <img src={book.image} alt="" />

   <div className={style.text}>
   <p > <strong>Name:</strong> {book.name}</p>
   <p><strong >Categories:</strong> {book.categories}</p>
   <p><strong >Product Code:</strong> {book.product_code}</p>
   <p><strong>Point:</strong> {book.reward_points}</p>
   <p><strong>Price:</strong> {book.price}</p>

   <button className="btn btn-primary " onClick={()=>navigate("/admin/products")}>Go Back</button>

   </div>

    
     

    </div>
   </>
  )
}

export default BooksDetail