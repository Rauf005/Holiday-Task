import React from 'react'
import { useFormik } from 'formik';
import axios from "axios"
import * as Yup from 'yup';
import style from "./style.module.css"

function AddProduct() {

    const formik = useFormik({
        initialValues: {
          name: '',
          categories:"",
          product_code: "",
          reward_points:"",
          price:"",
          availability:"",
          image:""

        },
        validationSchema: Yup.object({
            name: Yup.string()
              .max(50, 'Must be 50 characters or less')
              .min(3, 'Must be 3 characters more')
              .required('Required'),
              categories: Yup.string()
            .max(50, 'Must be 50 characters or less')
            .min(20, 'Must be 20 characters more')
            .required('Required'),
            product_code: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .min(3, 'Must be 3 characters more')
            .required('Required'),
            reward_points: Yup.string()
            .required('Required'),
            price: Yup.string()
            .max(10, 'Must be 10 characters or less')
            .min(1, 'Must be 1 characters more')
            .required('Required'),
            availability: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .min(3, 'Must be 3 characters more')
            .required('Required'),
            image: Yup.string()
            .max(120, 'Must be 120 characters or less')
            .min(5, 'Must be 5 characters more')
            .required('Required'),
          }),
        onSubmit: values => {
          axios.post("http://localhost:3000/flowers",values)
          .then(()=>console.log("result: " + values)  );
          formik.resetForm();
        },
      });
      return (
        <div style={{width:"100%",minHeight:"600px",display:"flex",alignItems:"center",justifyContent:"center"}}>
          <form id={style.addform} onSubmit={formik.handleSubmit}>
          <label htmlFor="categories">Categories </label>
          <input
            id="categories"
            name="categories"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.categories}
          />
          {formik.touched.categories && formik.errors.categories? (
         <div>{formik.errors.categories}</div>
       ) : null}
        
           <label htmlFor="name">Name</label>
          
             <input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
             {formik.touched.name && formik.errors.name ? (
         <div style={{color:"red"}}>{formik.errors.name}</div>
       ) : null}
    
    <label htmlFor="product_code"> Product Code </label>
          
             <input
            id="product_code"
            name="product_code"
            type="product_code"
            onChange={formik.handleChange}
            value={formik.values.product_code}
          />
             {formik.touched.product_code && formik.errors.product_code ? (
         <div style={{color:"red"}}>{formik.errors.product_code}</div>
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
         <div style={{color:"red"}}>{formik.errors.reward_points}</div>
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
      <div style={{color:"red"}}>{formik.errors.price}</div>
    ) : null}
    
    <label htmlFor="availability">Availability </label>
          
             <input
            id="availability"
            name="availability"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.availability}
          />
             {formik.touched.availability && formik.errors.availability ? (
         <div style={{color:"red"}}>{formik.errors.availability}</div>
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
      <div style={{color:"red"}}>{formik.errors.image}</div>
    ) : null}
          <button type="submit">Submit</button>
          
        </form>
        
        </div>
      );
  
}

export default AddProduct