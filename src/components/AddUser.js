import React,{useEffect} from 'react'
import {Formik , Field,Form, ErrorMessage} from 'formik';
// import {useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {NavLink } from 'react-router-dom';


import * as Yup from 'yup';
import "yup-phone";
import axios from 'axios';
import Dashboard from './Dashboard';
const AddUser = () => {
    // var navigate=useNavigate();
    let letters = /^[a-zA-Z ]*$/;


    const initialValues={
            userId:'',
            userName:'',
            password:'',
            email:'',
            phoneNumber:'',
            CNIC:'',
            address:'',
            designation:'',
       
    }

    const onSubmit= (values,action) => {
        let AddUser={
            id:values.userId,
              UserName:values.userName,
              Password:values.password,
              Email:values.email,
              Phone:values.phoneNumber,
              CNIC:values.CNIC,
              Address:values.address,
              Designation:values.designation
        }
         console.log(AddUser);

        axios
        .post(` http://localhost:7000/User/Add-User`,AddUser)
        .then((res)=>{
            console.log("pakitans");
            toast.success("User Added successfully",{
                position:"top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
              });
              

              action.resetForm();
              
        })
        .catch((error)=>{
            // alert("id should be unique");
            toast.error("id should be unique",{
                position:"top-center",
                autoClose: 600,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "colored",
              });
            
        })
    }  

    const validationSchema = Yup.object({
 
        userId: Yup.number().required('Required').test(
            'Is positive?', 
            'id must be a positive number', 
            (value) => value > 0
          ) ,
         userName: Yup.string().matches(letters, "name can only contain alphabet letters").min(3).max(20).required('Required') ,
         password:Yup.string().min(6).max(20).required('Please enter your password'),
         CNIC:Yup.string().min(13,'invalid CNIC').max(13,'invalid CNIC').required('Please enter your CNIC').test(
            'Is positive?', 
            'invalid cnic', 
            (value) => value > -1
          ) ,


         email: Yup.string()
        .email('Invalid email format')
        .required('Required'),
        address:Yup.string().required('Required'),
        phoneNumber:Yup.string().phone('pk',true,'invalid phone number').required('Required'),
        designation:Yup.string().required('Required')
       
    })
 
  return (
    <>
    <Dashboard />
    <div className="container-fluid">
    <ToastContainer />

        <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">

                <Formik  
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
    
    >
        {({values , setFieldValue ,setValues})=>
        <Form className='py-3 border rounded px-3 mt-3 '  >
                <div className='row mt-4 py-2'>
        <div className="col-md-12 headerHeading">       
        <h3 id="NavTitle" className='text-center headerHeading1'>Add User</h3>
        </div>
        </div>
                    {/* user Id  */}
                    <div className="mb-2">
                <label htmlFor='userId' >User Id</label>
                <Field type="number" className='form-control py-1 m-0' id="userId"
                 value={values.userId} onChange={(e)=>setFieldValue("userId",e.target.value)} />
                <ErrorMessage  name='userId'/>
               
                </div>
                {/* user Id */}

                {/* user name */}
                <div className="mb-2">
                <label htmlFor='userName' >User Name</label>
                <Field autoComplete='off' className='form-control py-1 m-0' type="text" id='userName'
                 placeholder="Username"
                 value={values.userName} onChange={(e)=>setFieldValue("userName",e.target.value)}/>
                <ErrorMessage  name='userName'/>
                
              </div>
                {/* user name */}


              {/* password */}
              <div className="mb-2">
                 <label htmlFor='password'>Password</label>
               <Field className='form-control m-0' type="password" id='password' placeholder="Password" 
                value={values.password} onChange={(e)=>setFieldValue("password",e.target.value)}
                
                />
                <ErrorMessage  name='password'/>

             </div>
              {/* password */}

             

              <div className="mb-2">
                <label htmlFor='email'>Email address</label>
                <Field autoComplete='off' className='form-control py-1 m-0' type="email" id='email' placeholder="Someone@example.com"
                value={values.email} 
                onChange={(e)=>setFieldValue("email",e.target.value)} 
                />
                <ErrorMessage  name='email'/>


                
             </div>

              


              {/* phoneNumber */}
             <div className="mb-2">
                <label htmlFor='phoneNumber'>Phone Number</label>
                <Field autoComplete='off' className='form-control py-1 m-0' type="number" id='phoneNumber' placeholder="Phone Number"
                value={values.phoneNumber} 
                onChange={(e)=>setFieldValue("phoneNumber",e.target.value)}
                 />
                <ErrorMessage  name='phoneNumber'/>

              </div>
              {/* phoneNumber */}

               {/* CNIC */}
             <div className="mb-2">
                <label htmlFor='CNIC'>CNIC</label>
                <Field autoComplete='off' className='form-control py-1 m-0' type="number" id='CNIC' placeholder="3540285906801"
                value={values.CNIC} 
                onChange={(e)=>setFieldValue("CNIC",e.target.value)}
                 />
                <ErrorMessage  name='CNIC'/>

              </div>
              {/* CNIC */}



              {/* Address */}
             <div className="mb-2">
                <label htmlFor='address'>Address</label>
                <Field autoComplete='off' className='form-control py-1 m-0' type="text" id='address' placeholder="Address"
                 value={values.address} 
                 onChange={(e)=>setFieldValue("address",e.target.value)}
                  />
                <ErrorMessage  name='address'/>

             </div>
              {/* Address */}

              {/* designation */}
              <div className="mb-2">
                <label htmlFor='designation' >Designation</label>
                <Field autoComplete='off' className='form-control py-1 m-0' type="text" id='designation'
                 placeholder="Designation"
                 value={values.designation} 
                 onChange={(e)=>setFieldValue("designation",e.target.value)}/>
                <ErrorMessage  name='designation'/>

             
              </div>
                {/* designation */}
               <div className='row mt-3'>
                <div className='col-md-12 text-center'>
                <button type='submit' id="HomeButton">Submit</button>
                </div>
               </div>
              
              </Form> }

              </Formik>
                
            </div>
            <div className="col-md-3"></div>
        </div>
    </div>
    </>
  )
}

export default AddUser