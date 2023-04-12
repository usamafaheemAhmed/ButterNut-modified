import React,{useState,useEffect, useMemo} from 'react'
import {Formik , Field,Form, ErrorMessage} from 'formik';
// import {useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NavLink } from 'react-router-dom';
import Dashboard from './Dashboard';

import * as Yup from 'yup';
import "yup-phone";
import axios from 'axios';

const AddUserList = () => {
    // var navigate=useNavigate();

   
    const [myId, setMyId] = useState("");
    const [myUserName, setMyUserName] = useState("");
    const [myPassword, setMyPassword] = useState("");
    const [myEmail, setMyEmail] = useState("");
    const [myPhone, setMyPhone] = useState("");
    const [myCNIC, setMyCNIC] = useState("");
    const [myAddress, setMyAddress] = useState("");
    const [myDesignation, setMyDesignation] = useState("");

    const [updatedValues, setUpdatedValues] = useState(false);
    const [myList, setMyList] = useState([]);

    let letters = /^[a-zA-Z ]*$/;

    let updateHandler=(elem)=>{
      document.getElementById("formContainer").classList.remove("d-none");

      setMyId(elem.id);
      setMyUserName(elem.UserName);
      setMyPassword(elem.Password);
      setMyEmail(elem.Email);
      setMyPhone(elem.Phone);
      setMyCNIC(elem.CNIC);
      setMyAddress(elem.Address);
      setMyDesignation(elem.Designation)
      // console.log(elem)
      
      setUpdatedValues(true);
  }
    useEffect(() => {
        axios
  .get(` http://localhost:7000/User`)
  .then((res)=>
   {
      setMyList(res.data)
    //   console.log(res.data)
    
} 
  ) 
    }, [])

    

    

      const initialValues ={
            userId: updatedValues ? myId: "",
            userName: updatedValues ? myUserName : '',
            password: updatedValues ? myPassword :'',
            email: updatedValues ? myEmail:'',
            phoneNumber: updatedValues ? myPhone:'',
            CNIC: updatedValues ? myCNIC: '' ,
            address: updatedValues ? myAddress: '',
            designation: updatedValues ? myDesignation: ''
       
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
        //  console.log(AddUser);
         let userId=values.userId;

        axios
        .patch(` http://localhost:7000/User/Update-User/${userId}`,AddUser)
        .then((res)=>{
            toast.success("User updated successfully",{
                position:"top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
              });

              setTimeout(function() {
                // action.resetForm();
             window.location.reload();
              }, 1000);

              action.resetForm();
              
        })
      
    }  

    const validationSchema = Yup.object({
 
        userId: Yup.number().required('Required').test(
            'Is positive?', 
            'id must be a positive number', 
            (value) => value > 0
          ) ,
         userName: Yup.string().matches(letters, "name can only contain alphabet letters").min(3).max(20).required('Required'),
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

    let deleteHandler=(elem)=>{
      
        // console.log(elem)
        if(window.confirm("Are you sure to want to delete "+elem.UserName)){
          var obj=elem.id;
            axios
            .delete(`http://localhost:7000/User/Delete-User/${obj}`)
             .then((res)=>{
            //    console.log(res)
             }
         
             );
        
             toast.success("user deleted successfully",{
              position:"top-center",
              autoClose: 900,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });   
        
            setTimeout(function() {
                // action.resetForm();
             window.location.reload();
              }, 1000);
            
            }
      }

      let resetHandler=()=>{

         window.location.reload();
    }
 
  return (
    
    <>    <Dashboard/>
    <div className="container-fluid">
        <div className="row mt-4">
        <ToastContainer />

            <div className="col-md-3"></div>
            <div className="col-md-6 ">

     <div id='formContainer' className=' border rounded d-none'>
                <Formik  
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
    enableReinitialize
    
    >
        {({values , setFieldValue ,setValues})=>
              <Form className='p-3'  >
                <div className='row mt-4 py-2'>
        <div className="col-md-12 headerHeading">       
        <h3 id="NavTitle" className='text-center headerHeading1'>Update User List</h3>
        </div>
        </div>
                    {/* user Id  */}
                    <div className="mb-2">
                <label htmlFor='userId' >User Id</label>
                <input readOnly type="number" className='form-control py-1 m-0' id="userId"
                 value={values.userId} onChange={(e)=>setFieldValue("userId",e.target.value)} />
                <ErrorMessage  name='userId'/>
               
                </div>
                {/* user Id */}

                {/* user name */}
                <div className="mb-2">
                <label htmlFor='userName' >User Name</label>
                <Field autoComplete='off' className='form-control py-1 m-0'  type="text" id='userName'
                 placeholder="user name"
                 value={values.userName} onChange={(e)=>setFieldValue("userName",e.target.value)}/>
                <ErrorMessage  name='userName'/>
                
              </div>
                {/* user name */}


              {/* password */}
              <div className="mb-2">
                 <label htmlFor='password'>Password</label>
               <Field className='form-control m-0' type="text" id='password' placeholder="password" 
                value={values.password} onChange={(e)=>setFieldValue("password",e.target.value)}
                
                />
                <ErrorMessage  name='password'/>

             </div>
              {/* password */}

             

              <div className="mb-2">
                <label htmlFor='email'>Email address</label>
                <Field autoComplete='off' className='form-control py-1 m-0'  type="email" id='email' placeholder="abc@example.com"
                value={values.email} 
                onChange={(e)=>setFieldValue("email",e.target.value)} 
                />
                <ErrorMessage  name='email'/>


                
             </div>

              


              {/* phoneNumber */}
             <div className="mb-2">
                <label htmlFor='phoneNumber'>Phone Number</label>
                <Field autoComplete='off' className='form-control py-1 m-0'  type="number" id='phoneNumber' placeholder="phone number"
                value={values.phoneNumber} 
                onChange={(e)=>setFieldValue("phoneNumber",e.target.value)}
                 />
                <ErrorMessage  name='phoneNumber'/>

              </div>
              {/* phoneNumber */}

               {/* CNIC */}
             <div className="mb-2">
                <label htmlFor='CNIC'>CNIC</label>
                <Field autoComplete='off' className='form-control py-1 m-0'  type="number" id='CNIC' placeholder="3540285906801"
                value={values.CNIC} 
                onChange={(e)=>setFieldValue("CNIC",e.target.value)}
                 />
                <ErrorMessage  name='CNIC'/>

              </div>
              {/* CNIC */}



              {/* Address */}
             <div className="mb-2">
                <label htmlFor='address'>Address</label>
                <Field autoComplete='off' className='form-control py-1 m-0'  type="text" id='address' placeholder="address"
                 value={values.address} 
                 onChange={(e)=>setFieldValue("address",e.target.value)}
                  />
                <ErrorMessage  name='address'/>

             </div>
              {/* Address */}

              {/* designation */}
              <div className="mb-2">
                <label htmlFor='designation' >Designation</label>
                <Field autoComplete='off' className='form-control py-1 m-0'  type="text" id='designation'
                 placeholder="designation"
                 value={values.designation} 
                 onChange={(e)=>setFieldValue("designation",e.target.value)}/>
                <ErrorMessage  name='designation'/>

             
              </div>
                {/* designation */}

                <div className='row mt-3'>
                  <div className='col-md-12 text-center'>
                  <button type='submit' id="HomeButton">Update</button>
                  </div>
                </div>
              
              </Form> }

                </Formik>
              {/* <button className='btn btn-primary my-1 py-1' onClick={resetHandler}>Reset Form</button> */}

                </div>

                
            </div>
            <div className="col-md-3"></div>
            <div className="row">
                 {/* table */}

    <div className='table-responsive  mt-5'>
         <table className="table text-center border table-bordered table-hover">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">UserName</th>
      <th scope="col">Password</th>
      <th scope="col">Email</th>
      <th scope="col">Phone Number</th>
      <th scope="col">CNIC</th>
      <th scope="col">Address</th>
      <th scope="col">Designation</th>

      <th>Operations</th>

      

    </tr>
  </thead>
  <tbody>
  {/* {myList.slice(Math.max(myList.length - 1, 0))} */}
{


// console.log("hy",myList.slice(Math.max(0, 2)))
}

  {  myList.map((elem,index)=>{
   
        let {id,UserName,Password,Email,Phone,CNIC,Address,Designation}=elem;
return(
    
    <tr key={index}>
      <td scope="row">{id}</td>
      <td scope="row">{UserName}</td>
      <td>{Password}</td>
      <td>{Email}</td>
      <td>{Phone}</td>
      <td>{CNIC}</td>
      <td>{Address}</td>
      <td>{Designation}</td>


     
      

      <td>
           <button  type='btn' onClick={()=>updateHandler(elem)} id="UpdateButton">Update</button>
           <button onClick={()=>deleteHandler(elem)} type='btn' className="my-1" id="DeleteButton">Delete</button>
           </td> 
  
    </tr>
    );
        
    })}
  </tbody>
</table>
        </div>

    {/* table */}
            </div>
        </div>
    </div>
    </>
  )
}

export default AddUserList