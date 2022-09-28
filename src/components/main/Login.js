import { Formik } from 'formik'
import React from 'react'
import Swal from 'sweetalert2';

const Login = () => {
  const userSubmit = async (formdata,{resetForm})=> {
    console.log(formdata);
    
   const response = await fetch('http://localhost:5000/user/authenticate', {
      method:'POST',
      body: JSON.stringify(formdata),
      headers:{
        'Content-Type':'application/json'
      }
    })
    if(response.status === 200){
      console.log('request sent');
      Swal.fire({
        icon:'success',
        title:'welcome',
        text:'user login!!'
      })
      const data = await response.json();
      sessionStorage.setItem('user', JSON.stringify(data));
      
    }else if(response.status===401) 
    {
      Swal.fire({
        icon:"question",
        title:"😅",
        text:"Email Password Incorrect"
      })
      resetForm();
    }
  }
  return (
    <div className='container  vh-100  d-flex justify-content-center align-items-center'>
        <div className="col-md-5 col-lg-5">
        <div className="card p-4">
          <h1 className='text-center rounded-5'>Login Here</h1>
          <Formik initialValues={{
            email:"",
            password:""
          }} onSubmit={userSubmit}>
            {({values,handleChange,handleSubmit})=>(
              <form className=' ' onSubmit={handleSubmit}>
                <div className='mt-2'>
                <label htmlFor="email">Email:</label>
                <input className='form-control' type="email" name="email" id="email" value={values.email} onChange={handleChange} placeholder="Enter Your Email" required/>
                </div>
                <div className='mt-2'>
                <label htmlFor="password">Password:</label>
                <input className='form-control' type="password" name="password" id="password" value={values.password} onChange={handleChange} placeholder="Enter Your Password" required/>
                </div>
                <div className='mt-3 d-flex justify-content-center'>
                <button className='btn btn-primary rounded-circle px-5 py-2'>Submit</button>'
                </div>
              </form>
            )}
          </Formik>
        </div>
        </div>
      </div>
  )
}

export default Login