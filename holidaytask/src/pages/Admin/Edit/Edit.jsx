
import style from "./style.module.css"
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; 
import { useFormik } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';

function Edit() {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const [flower, setFlower] = useState(null); 

  
  useEffect(() => {
    axios.get(`http://localhost:3000/flowers/${id}`)
      .then(response => {
        setFlower(response.data);
      })
    
  }, [id]);

  
  const formik = useFormik({
    enableReinitialize: true, 
    initialValues: {
      name: flower?.name || '',
      categories: flower?.categories || '',
      product_code: flower?.product_code || '',
      reward_points: flower?.reward_points|| '',
      price: flower?.price || '',
      availability: flower?.availability|| '',
      image: flower?.image || ''

    },
    validationSchema: Yup.object({
      name: Yup.string().max(50, 'Must be 50 characters or less').min(3, 'Must be 3 characters or more').required('Required'),
      categories: Yup.array().max(70, 'Must be 70 characters or less').min(3, 'Must be 3 characters or more').required('Required'),
      product_code: Yup.string().max(15, 'Must be 15 characters or less').min(3, 'Must be 3 characters or more').required('Required'),
      reward_points: Yup.number().required('Required'),
      price: Yup.number().required('Required').min(1, 'Price must be positive'),
      availability: Yup.string().max(20, 'Must be 20 characters or less').min(3, 'Must be 3 characters or more').required('Required'),
      image: Yup.string().required('Required')
    }),
    onSubmit: async (values) => {
      try {
        const response = await axios.put(`http://localhost:3000/flowers/${id}`, values);
        console.log('Flowers updated successfully:', response.data);
        navigate('/admin/products'); 
      } catch (error) {
        console.error('Error ', error.response ? error.response.data : error.message);
      }
    }
  });

  if (!flower) {
    return <div>Loading...</div>; 
  }

  return (
    <div style={{ width: "100%", minHeight: "600px", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <form id={style.editform }onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name </label>
        <input
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? (
          <div style={{ color: "red" }}>{formik.errors.name}</div>
        ) : null}
        

        <label htmlFor="categories">Categories </label>
        <input
          id="categories"
          name="categories"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.categories}
        />
        {formik.touched.categories && formik.errors.categories ? (
          <div style={{ color: "red" }}>{formik.errors.categories}</div>
        ) : null}
        

        <label htmlFor="product_code">Product Code </label>
        <input
          id="product_code"
          name="product_code"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.product_code}
        />
        {formik.touched.product_code && formik.errors.product_code ? (
          <div style={{ color: "red" }}>{formik.errors.product_code}</div>
        ) : null}
        

        <label htmlFor="reward_points">Reward Points </label>
        <input
          id="reward_points"
          name="reward_points"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.reward_points}
        />
        {formik.touched.reward_points && formik.errors.reward_points ? (
          <div style={{ color: "red" }}>{formik.errors.reward_points}</div>
        ) : null}
        

        <label htmlFor="price">Price </label>
        <input
          id="price"
          name="price"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.price}
        />
        {formik.touched.price && formik.errors.price ? (
          <div style={{ color: "red" }}>{formik.errors.price}</div>
        ) : null}
        

        <label htmlFor="availability">Availability </label>
        <input
          id="availability"
          name="availability"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.availability}
        />
        {formik.touched.image && formik.errors.image ? (
          <div style={{ color: "red" }}>{formik.errors.image}</div>
        ) : null}
        
        <label htmlFor="image">Image </label>
        <input
          id="image"
          name="image"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.image}
        />
        {formik.touched.image && formik.errors.image ? (
          <div style={{ color: "red" }}>{formik.errors.image}</div>
        ) : null}
       


        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default Edit;
