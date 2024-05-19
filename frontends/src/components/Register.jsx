import React, { useState } from 'react'
import {useFormik} from 'formik'
import axios from 'axios'
import  {ValidationSchema}  from './Formvalidation'
function Register() {


  const {values,handleChange,handleSubmit,handleBlur,errors,touched}=useFormik({
    initialValues:{
      name:'',
      email:'',
      number:'',
      password:'',
      cpassword:''
    },
    onSubmit:async(values,actions)=>{
      try{
        await axios.post('http://localhost:3030/register',values)

      }catch(error){
        console.log(error)
      }
      actions.resetForm()

    },
    validationSchema:ValidationSchema
  })

  return (
    <div>

<form onSubmit={handleSubmit} autoComplete='off'>
  <label htmlFor='name'>NAME:</label>
  <input type="text" name='name' id='name' onChange={handleChange}  value={values.name} onBlur={handleBlur}/><br/>
  {errors.name && touched.name?<div style={{color:"red"}}>{errors.name}</div>:null}

  <label htmlFor='email'>Email:</label>
  <input type="email" name='email' id='email' onChange={handleChange}  value={values.email}onBlur={handleBlur}/><br/>
  {errors.email && touched.email ?<div style={{color:"red"}}>{errors.email}</div>:null}

  <label htmlFor='number'>Number:</label>
  <input type="text" name='number' id='number'onChange={handleChange}  value={values.number}onBlur={handleBlur}/><br/>
  {errors.number && touched.number? <div style={{color:"red"}}>{errors.number}</div>:null}

  <label htmlFor='password'>Password:</label>
  <input type="password" name='password' id='password' onChange={handleChange}  value={values.password}onBlur={handleBlur}/><br/>
  {errors.password && touched.password?<div style={{color:"red"}}>{errors.password}</div>:null}

  <label htmlFor='password'>Cpassword:</label>
  <input type="password" name='cpassword'id='cpassword'onChange={handleChange}  value={values.cpassword}onBlur={handleBlur}/><br/>
  {errors.cpassword && touched.cpassword?<div style={{color:"red"}}>{errors.cpassword}</div>:null}

  <button type='submit'>submit</button>
</form>

    </div>
  )
}

export default Register