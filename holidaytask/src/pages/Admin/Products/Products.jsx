import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import style from "./style.module.css"

function Products() {



    const [flowers, setFlowers] = useState([]);

  
    useEffect(() => {
      axios.get('http://localhost:3000/flowers') 
        .then(response => {
            setFlowers(response.data);
        })
        .catch(error => {
          console.error("Error", error);
        });
    }, []);
  
    
    const handleDelete = (id) => {
      axios.delete(`http://localhost:3000/flowers/${id}`)
        .then(() => {
            setFlowers(flowers.filter(flower => flower.id !== id));
        })}

  return (
    <div className={style.products}>
        <button style={{marginBottom:"30px", display: "flex",}} className="btn btn-success">
      <NavLink
                                        style={{ textDecoration: "none", color: "white" }}
                                        to={`/admin/addproduct`}
                                      >
                                        Add 
                                      </NavLink>
      </button>
      
      <table className="table " >
        <thead className="table table-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Actions</th>

          </tr>
        </thead >
        <tbody>
        {flowers.map((flower, index) => (
              <tr key={index}>
            <th scope="row">{flower.id}</th>
            <td><img src={flower.image} alt="" /></td>
            <td>{flower.name}</td>
            <td>{flower.price}</td>
            <td>
                <button className="btn btn-primary mx-3">
                <NavLink
                                        style={{ textDecoration: "none", color: "white" }}
                                        to={`/admin/detail/${flower.id}`}
                                      >
                                        Info
                                      </NavLink>
                </button>
                <button className='btn btn-warning mx-3'>
                <NavLink
                                        style={{ textDecoration: "none", color: "white" }}
                                        to={`/admin/edit/${flower.id}`}
                                      >
                                        Edit
                                      </NavLink>
                </button>
                <button  onClick={() => handleDelete(flower.id)}  className='btn btn-danger mx-3'>Delete</button>
            </td>
          </tr>
          
        ))}
        </tbody>
      </table>

      
    </div>
  );
}

export default Products;
