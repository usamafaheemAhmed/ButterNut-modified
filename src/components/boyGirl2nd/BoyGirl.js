import React,{ useEffect } from "react";
import "./boyGirl.css";

import fish from"../../images/fish.svg";
import { NavLink } from "react-router-dom";
const BoyGirl = () => {
  
  let gender="boy";
  let genderSex="no";
  
  useEffect(() => {
    localStorage.setItem("Gender", gender);
    localStorage.setItem("genderSex", genderSex);
  });

  let girlbtnHandler=()=>{
    document.getElementById("girlId").classList.remove("notselectedbtn");
    document.getElementById("girlId").classList.add("selectedbtn");
    document.getElementById("boyId").classList.remove("selectedbtn");
    document.getElementById("boyId").classList.add("notselectedbtn");
    document.getElementById("forSex").innerHTML="she spayed";
    gender="girl";
    localStorage.setItem("Gender", gender);
    

  }
  let boybtnHandler=()=>{
   
    document.getElementById("boyId").classList.add("selectedbtn");
    document.getElementById("boyId").classList.remove("notselectedbtn");

    document.getElementById("girlId").classList.add("notselectedbtn");
    document.getElementById("girlId").classList.remove("selectedbtn");

    gender="boy";
    localStorage.setItem("Gender", gender);
    document.getElementById("forSex").innerHTML="he neutered";
  }

  let noNeutered=()=>{

    document.getElementById("noId").classList.remove("notselectedbtn");
    document.getElementById("noId").classList.add("selectedbtn");
    document.getElementById("yesId").classList.remove("selectedbtn");
    document.getElementById("yesId").classList.add("notselectedbtn");
    genderSex="no";
    localStorage.setItem("genderSex", genderSex);
  }

  let yesNeutered=()=>{
    
    document.getElementById("yesId").classList.add("selectedbtn");
    document.getElementById("yesId").classList.remove("notselectedbtn");
    document.getElementById("noId").classList.add("notselectedbtn");
    document.getElementById("noId").classList.remove("selectedbtn");
    genderSex="yes";
    localStorage.setItem("genderSex", genderSex);
  }

  
  
  return (
    <>
      <div className="container-fluid ">
       {/* header */}
       <div className="row header py-5">
        <div className="col-md-2"></div>
        <div className="col-md-8">
        <h3 className='text-center headerHeading'>Is <span>{localStorage.getItem("dogName")}</span> a boy or girl?</h3>
        </div>
        <div className="col-md-2"></div>
       </div>
          {/* header end */}



        <h1 className="text-center mt-5">
          --------------<span>{localStorage.getItem("dogName")}</span> is a good.--------------
        </h1>
       
       <div className="row mt-5">
         <div className="col-md-12 text-center">
           <button className="btnDesign jello-horizontal" id="girlId" onClick={girlbtnHandler}> Girl</button>
           <button className="btnDesign selectedbtn mx-3 jello-horizontal" id="boyId" onClick={boybtnHandler}> Boy</button>
         </div>
        </div>


       <div className="row my-5">
        <div className="col-md-12 text-center">
           <p>and is <span id="forSex">he neutered</span>?</p>
           <button className="btnDesign jello-horizontal" id="yesId" onClick={yesNeutered}> Yes</button>
           <button className="btnDesign selectedbtn mx-3 jello-horizontal" id="noId" onClick={noNeutered}>No</button>
         </div>
       </div>

       <div className="row freshRow">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          
          <h3 className="freshFact">Fresh Fact</h3> 
          <img className="float-end" src={fish} alt="" />
          <p className="p2">Did you know 2 in 3 Brits don't know what's in their dog food? We make it very clear - only the best human-quality meat, veg, vitamins and minerals your dog needs.</p>
        </div>
        <div className="col-md-3"></div>

       </div>
      



         
           <footer className=" footer  shadow py-4">
           <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
            <NavLink  to='/' type="button" className="btn  back py-2"><i class="fa fa-angle-left"></i>BACK</NavLink>
            
             <NavLink to='/Age' type="button" className="btn  float-end continue py-2">CONTINUE <i className="fa fa-angle-right"></i></NavLink>
            </div>
            <div className="col-md-4"></div>
            </div>
           </footer>
         
       



      </div>
    </>
  );
};

export default BoyGirl;
