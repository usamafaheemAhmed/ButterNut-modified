import React,{ useEffect } from 'react';
import '../App.css'
import { NavLink, useNavigate } from "react-router-dom";



import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import axios from 'axios';
import {useFormik} from 'formik';
import * as Yup from 'yup';

const Login = () => {
  var navigate=useNavigate();

  useEffect(()=>{
    sessionStorage.clear();
        },[]);
    
    const formik=  useFormik({
    initialValues:{
      
        email:"",
        password: "",
    
    },
    
      onSubmit: (values,action) => {

let mydata={
  email: values.email,
  password: values.password,
}
   axios
   .get("http://localhost:7000/User")
    .then((res)=>{
      
      let data=res.data;
      let emailInput=mydata.email;
      let passwordInput=mydata.password;

      let lengthOfResData=res.data.length;
      

        for(let i=0 ; i <=lengthOfResData;  i++){
          if(emailInput === data[i].Email && passwordInput === data[i].Password){
            localStorage.setItem("UserName", res.data[i].UserName);
            if( localStorage.getItem("UserName") === "Admin"){
              navigate('/Dashboard');
            }
            else{
              navigate('/My-Orders');
            }

             toast.success("login successfully",{
              position:"top-center",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });


            break;
          }
         
          
         
         
        }
    
      }

    
  
 
    )
    .catch((error)=>{
      toast.error("email or password is not correct",{
        position:"top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
     
    });
   



    },

    
     validationSchema : Yup.object({
 
      email: Yup.string()
     .email('Invalid email format')
     .required('Required'),
     password:Yup.string().min(6).required('Please enter your password')
     
 
  })



    })
  

  
  return (
    <>
    <div className="container-fluid">
    <div className="row">
    
      <div className="row header py-5">
      <div className="col-md-2"></div>
      <div className="col-md-7">
        <h3 className='text-center headerHeading'>LOGIN PAGE</h3>
      </div>
      <div className="col-md-2"></div>
      <div className="col-md-1">
        <NavLink to="/" className='text-center' id="headerHeading1">Back</NavLink>
      </div>
      </div>

    <div className="col-md-3"></div>
    <div className="col-md-6">
    <ToastContainer />
    <form  className='mt-5 p-4 shadow border rounded' onSubmit={formik.handleSubmit}>


                        <div className='row mt-3'>
                            <div className='col-md-1'></div>
                            <div className='col-md-10'>
            <label htmlFor='email'>Email</label>
            <input autoComplete='off' className='form-control m-0' type="email" id='email' placeholder="someone@example.com" name="email"
            onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
            {formik.touched.email && formik.errors.email ? <div className='text-danger'>{formik.errors.email}</div> : null}
              </div>
              <div className='col-md-1'></div>
              </div>

              <div className='row mt-3'>
                            <div className='col-md-1'></div>
                            <div className='col-md-10'>
                 <label htmlFor='password'>Password</label>
               <input className='form-control m-0' type="password" id='password' placeholder="Password" name='password'
               onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} />
               {formik.touched.password && formik.errors.password ? <div className='text-danger'>{formik.errors.password}</div> : null}
            </div>
              <div className='col-md-1'></div>
              </div>

              <div className='row my-4'>
                            <div className='col-md-12 text-center'>
               <button type='submit' id='SubmitButton'>Login</button>
               </div>
               </div>
            
              </form> 

    </div>
    <div className="col-md-3"></div>
    </div>
    </div>
    </>
  )
}

export default Login