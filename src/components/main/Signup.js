import React from 'react'
import { Formik } from 'formik'
import  Swal  from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
const Signup = () => {
  const navigate = useNavigate();
 
    const userSubmit = async (formdata,{resetForm})=> {
      console.log(formdata);
      
     const response = await fetch('http://localhost:5000/user/add', {
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
          title:'nice',
          text:'user registered!!'
        })
        resetForm();
        navigate('/main/login')
      }else{
        console.log('some error occured');
      }
    }
  
    return (
      <div className="container">
        <div className="card">
          <div className="card-body">
  
            <Formik 
              initialValues={{name : '', email : '', password : '', confirmpassword : ''}}
              onSubmit={userSubmit}
            >
              { ({values, handleSubmit, handleChange}) => (
                <form onSubmit={handleSubmit}>
                <h3 className='text-center'>Sign Up</h3>
                <label htmlFor='name'>Name</label>
                <input id="name" value={values.name} onChange={handleChange} className='form-control mb-3' required/>
                <label htmlFor='email'>Email</label>
                <input id="email" value={values.email} onChange={handleChange} className='form-control mb-3' required/>
                <label htmlFor='password'>Password</label>
                <input id="password" value={values.password} onChange={handleChange} type="password" className='form-control mb-3' required/>
                <label htmlFor='confirmpassword'>Confirm Password</label>
                <input id="confirmpassword" value={values.confirmpassword} onChange={handleChange} type="password" className='form-control mb-3' required/>
                <button type='submit' className='btn btn-primary mt-5'>Submit</button>
              </form>
              ) }
            </Formik> 
          </div>
        </div>
      </div>
    )
  
}

export default Signup;

