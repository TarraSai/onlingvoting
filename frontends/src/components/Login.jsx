import { useFormik } from 'formik'
import React from 'react'
import axios from 'axios'
import { LoginSchema } from './Formvalidation'
import { useNavigate } from 'react-router-dom';



function Login() {
    const navigate = useNavigate();
    const {values,handleBlur,handleChange,handleSubmit,errors,touched}=useFormik({
        initialValues:{
            email:'',
            password:''
        },
        onSubmit:async(values,actions)=>{
            try{
                console.log(values)
               const data= await axios.post('http://localhost:3030/login',
                    values 
                )
               
                localStorage.setItem('token',data.data.token)
                navigate('/dashboard');

                

            }catch(error){
                console.log(error)
            }
            actions.resetForm()
        },
        validationSchema:LoginSchema,
    })
  return (
    <div>
        
      <form onSubmit={handleSubmit}>
      <label htmlFor='email'>Email:</label>
        <input
          type="text"
          name="email"

          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.email && touched.email ?<div>{errors.email}</div>:""}<br/>
        <label htmlFor='password'>Password:</label>
        <input
          type="text"
          name="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.password && touched.pasword?<div>{errors.password}</div>:""}<br/>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default Login