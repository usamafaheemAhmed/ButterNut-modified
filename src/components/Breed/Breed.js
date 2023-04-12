import React from 'react';
import './Breed.css';
import FreshFact4 from '../../images/FreshFact4.PNG';

import MyAutoComponent from './MyAutoComponent';
import { NavLink } from "react-router-dom";





function Breed() {
  return (
    <div class="container-fluid">

        {/* header */}
        <div className="row header py-5">
        <div className="col-md-2"></div>
        <div className="col-md-8">
        <h3 className='text-center headerHeading'>What breed is <span>{localStorage.getItem("dogName")}</span>?</h3>
        </div>
        <div className="col-md-2"></div>
       </div>
          {/* header end */}



      {/* Dog Name */}
      <div class="row mt-5">
        <div class="col-md-2"></div>
        <div class="col-md-8 text-center">
          <p id="Header">-----------<span>{localStorage.getItem("dogName")}</span> is a.----------</p>
        </div>
        <div class="col-md-2"></div>
      </div>

      {/* Breed Input */}
      {/* <div class="row mt-5">
        <div class="col-md-3"></div>
        <div class="col-md-6 text-center">
          <input placeholder='Breed...' class="form-control" id="BreedInput"/>
        </div>
        <div class="col-md-3"></div>
      </div> */}

      {/* Checkbox */}
      {/* <div class="row mt-3">
        <div class="col-md-3"></div>
        <div class="col-md-6 text-center">
          <input type="checkbox" id="BreedCheckBox" onClick={BreedChecked}/>
          <label id="BreedBoxText">I don't know his breed</label>
        </div>
        <div class="col-md-3"></div>
      </div> */}
      <div className='my-3'>
      <MyAutoComponent/>
      </div>
      

      {/* Fresh Fact */}
      <div class="row mt-5"></div>
      <div class="row mt-5"></div>
      <div class="row mt-5"></div>
      <div className="row freshRow ">
        <div className="col-md-3"></div>
        <div className="col-md-6 ">
          
          <h3 className="freshFact">Fresh Fact</h3> 
          <img className="float-end" src={FreshFact4} alt="" />
          <p className="p2  ">We feed <b>555 different breeds</b> at Butternut Box, as well as a whole pack of wonderful rescues. 
                Fresh, tasty food is a hit no matter what breed, age, or size.</p>
        </div>
        <div className="col-md-3"></div>

       </div>



      {/* nnnn */}
     

      <footer className=" footer  shadow py-4">
           <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
            <NavLink  to='/Age' type="button" className="btn  back py-2"><i class="fa fa-angle-left"></i>BACK</NavLink>
            
             <NavLink to='/Food-Type'  type="button" className="btn  float-end continue py-2">CONTINUE <i className="fa fa-angle-right"></i></NavLink>
            </div>
            <div className="col-md-4"></div>
            </div>
           </footer>

    </div>
  )
}

export default Breed