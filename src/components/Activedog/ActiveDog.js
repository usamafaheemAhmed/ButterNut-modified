import React, { useEffect } from 'react';
import carrots from "../../images/carrots.svg";

import { NavLink } from "react-router-dom";
import "./activeDog.css";


import dogActive1 from "../../images/dogActive1.svg";
import dogActive1Copy from "../../images/dogActive1Copy.svg";
import dogActive2 from "../../images/dogActive2.svg";
import dogActive2Copy from "../../images/dogActive2Copy.svg";
import dogActive3 from "../../images/dogActive3.svg";
import dogActive3Copy from "../../images/dogActive3Copy.svg";
import dogActive4 from "../../images/dogActive4.svg";
import dogActive4Copy from "../../images/dogActive4Copy.svg";
import dogActive5 from "../../images/dogActive5.svg";
import dogActive5Copy from "../../images/dogActive5Copy.svg";

const ActiveDog = () => {

  useEffect(() => {
    localStorage.setItem("activeDog", "Very Active");
  });

  let workingDog=0;

  let dog1Handler=()=>{

    
    document.getElementById("dog1WithColor").classList.remove("d-none");
    document.getElementById("dog1WithOutColor").classList.add("d-none");
    document.getElementById("dog2WithColor").classList.add("d-none");
    document.getElementById("dog2WithOutColor").classList.remove("d-none");
    document.getElementById("dog3WithColor").classList.add("d-none");
    document.getElementById("dog3WithOutColor").classList.remove("d-none");
    document.getElementById("dog4WithColor").classList.add("d-none");
    document.getElementById("dog4WithOutColor").classList.remove("d-none");
    document.getElementById("dog5WithColor").classList.add("d-none");
    document.getElementById("dog5WithOutColor").classList.remove("d-none");

    document.getElementById("mainDivDis").classList.remove("d-none");

    document.getElementById("snoozerDis").classList.remove("d-none");
    document.getElementById("somewhatActiveDis").classList.add("d-none");
    document.getElementById("activeDis").classList.add("d-none");
    document.getElementById("veryActiveDis").classList.add("d-none");
    document.getElementById("fullOfEnergyDis").classList.add("d-none");


    localStorage.setItem("activeDog", "A serial snoozer");



  }


  let dog2Handler=()=>{
    
    document.getElementById("dog2WithColor").classList.remove("d-none");
    document.getElementById("dog2WithOutColor").classList.add("d-none");

    document.getElementById("dog3WithColor").classList.add("d-none");
    document.getElementById("dog3WithOutColor").classList.remove("d-none");
    document.getElementById("dog4WithColor").classList.add("d-none");
    document.getElementById("dog4WithOutColor").classList.remove("d-none");
    document.getElementById("dog5WithColor").classList.add("d-none");
    document.getElementById("dog5WithOutColor").classList.remove("d-none");
    document.getElementById("dog1WithColor").classList.add("d-none");
    document.getElementById("dog1WithOutColor").classList.remove("d-none");

    document.getElementById("mainDivDis").classList.remove("d-none");

    document.getElementById("snoozerDis").classList.add("d-none");
    document.getElementById("somewhatActiveDis").classList.remove("d-none");
    document.getElementById("activeDis").classList.add("d-none");
    document.getElementById("veryActiveDis").classList.add("d-none");
    document.getElementById("fullOfEnergyDis").classList.add("d-none");
    localStorage.setItem("activeDog", "Somewhat active");

  }
  let dog3Handler=()=>{
    document.getElementById("dog3WithColor").classList.remove("d-none");
    document.getElementById("dog3WithOutColor").classList.add("d-none");
    document.getElementById("dog4WithColor").classList.add("d-none");
    document.getElementById("dog4WithOutColor").classList.remove("d-none");
    document.getElementById("dog5WithColor").classList.add("d-none");
    document.getElementById("dog5WithOutColor").classList.remove("d-none");
    document.getElementById("dog1WithColor").classList.add("d-none");
    document.getElementById("dog1WithOutColor").classList.remove("d-none");
    document.getElementById("dog2WithColor").classList.add("d-none");
    document.getElementById("dog2WithOutColor").classList.remove("d-none");
    
    document.getElementById("mainDivDis").classList.remove("d-none");

    document.getElementById("snoozerDis").classList.add("d-none");
    document.getElementById("somewhatActiveDis").classList.add("d-none");
    document.getElementById("activeDis").classList.remove("d-none");
    document.getElementById("veryActiveDis").classList.add("d-none");
    document.getElementById("fullOfEnergyDis").classList.add("d-none");
    localStorage.setItem("activeDog", "active");
    
  }
  let dog4Handler=()=>{

    document.getElementById("dog4WithColor").classList.remove("d-none");
    document.getElementById("dog4WithOutColor").classList.add("d-none");

    document.getElementById("dog5WithColor").classList.add("d-none");
    document.getElementById("dog5WithOutColor").classList.remove("d-none");
    document.getElementById("dog1WithColor").classList.add("d-none");
    document.getElementById("dog1WithOutColor").classList.remove("d-none");
    document.getElementById("dog2WithColor").classList.add("d-none");
    document.getElementById("dog2WithOutColor").classList.remove("d-none");
    document.getElementById("dog3WithColor").classList.add("d-none");
    document.getElementById("dog3WithOutColor").classList.remove("d-none");

    document.getElementById("mainDivDis").classList.remove("d-none");

    document.getElementById("snoozerDis").classList.add("d-none");
    document.getElementById("somewhatActiveDis").classList.add("d-none");
    document.getElementById("activeDis").classList.add("d-none");
    document.getElementById("veryActiveDis").classList.remove("d-none");
    document.getElementById("fullOfEnergyDis").classList.add("d-none");
    localStorage.setItem("activeDog", "Very active");
   
  }
  let dog5Handler=()=>{
    document.getElementById("dog5WithColor").classList.remove("d-none");
    document.getElementById("dog5WithOutColor").classList.add("d-none");
    document.getElementById("dog1WithColor").classList.add("d-none");
    document.getElementById("dog1WithOutColor").classList.remove("d-none");
    document.getElementById("dog2WithColor").classList.add("d-none");
    document.getElementById("dog2WithOutColor").classList.remove("d-none");
    document.getElementById("dog3WithColor").classList.add("d-none");
    document.getElementById("dog3WithOutColor").classList.remove("d-none");
    document.getElementById("dog4WithColor").classList.add("d-none");
    document.getElementById("dog4WithOutColor").classList.remove("d-none");

    document.getElementById("mainDivDis").classList.remove("d-none");

    document.getElementById("snoozerDis").classList.add("d-none");
    document.getElementById("somewhatActiveDis").classList.add("d-none");
    document.getElementById("activeDis").classList.add("d-none");
    document.getElementById("veryActiveDis").classList.add("d-none");
    document.getElementById("fullOfEnergyDis").classList.remove("d-none");
    localStorage.setItem("activeDog", "Full of energy");


  }

  let workingDogHandler=()=>{

    if(workingDog === 0){
      document.getElementById("imgRowId").classList.add("d-none");
      document.getElementById("mainDivDis").classList.add("d-none");
      workingDog=1;
      localStorage.setItem("activeDog", "working Dog");
    }
    else{
      document.getElementById("imgRowId").classList.remove("d-none");
      document.getElementById("mainDivDis").classList.remove("d-none");
      workingDog=0;
    }

    

  }
  return (
    <>

     <div className="container-fluid">


        {/* header */}
        <div className="row header py-5">
        <div className="col-md-2"></div>
        <div className="col-md-8">
        <h3 className='text-center headerHeading'>How active is <span>{localStorage.getItem("dogName")}</span>?</h3>
        <p className='headerPera1 text-center'>Whether they're a bundle of energy or a serial snoozer, every dog is unique and needs a different amount of food.</p>
        </div>
        <div className="col-md-2"></div>
       </div>
          {/* header end */}


          <h1 className="text-center mt-5 h1Bold">
          ------------<span>{localStorage.getItem("dogName")}</span> is.------------
          </h1>

          <div className="row">
            <div className="col-md-12 text-center">
              <div class="checkDiv">
              <input class="pt-5" type="checkbox" value="" id="workingDog" onClick={workingDogHandler} /> 
            <label className='ml-1 p-0 mx-2 GtPara' id="WorkingDogLabel" for="workingDog">A working dog</label>
              </div>
              </div>
          </div>

          {/* images */}
          <div className="row  my-4" id='imgRowId'>

            <div className='col-md-12 text-center'>
             
                <div className='dogDiv ' id="dog1" onClick={dog1Handler}>
                     <img id='dog1WithColor' className="dogSize d-none" src={dogActive1} alt="" />
                     <img id='dog1WithOutColor' className='dogSize' src={dogActive1Copy} alt="" />

                  </div>

                <div className='dogDiv ' id="dog2" onClick={dog2Handler}>
                <img id='dog2WithColor'  className="d-none dogSize" src={dogActive2} alt="" />
                     <img id='dog2WithOutColor' className='dogSize' src={dogActive2Copy} alt="" />
                  </div>
                <div className='dogDiv ' onClick={dog3Handler} id="dog3"> 
                     <img id='dog3WithColor' className="d-none dogSize" src={dogActive3} alt="" />
                     <img id='dog3WithOutColor' className='dogSize' src={dogActive3Copy} alt="" />
                </div>
                <div className='dogDiv ' onClick={dog4Handler} id="dog3"> 
                    <img id='dog4WithColor' className="dog4Size " src={dogActive4} alt="" />
                     <img id='dog4WithOutColor' className='dog4Size d-none' src={dogActive4Copy} alt="" />
                </div>
                <div className='dogDiv  ' onClick={dog5Handler} id="dog3"> 
                     <img id='dog5WithColor'  className="dog5Size d-none" src={dogActive5} alt="" />
                     <img id='dog5WithOutColor'  className="dog5Size " src={dogActive5Copy} alt="" />
                </div>

            </div>


          </div>

          {/* images */}

          <div className="row " id='mainDivDis'>
            <div className="col-md-2"></div>
            <div className="col-md-8 dogDis text-center py-3 ">
              <div id='snoozerDis' className='d-none h4aP '>
              <h4>A serial snoozer</h4>
              <p className='peraDis'>Under 30 min walks per day</p>
              </div>
              <div id='somewhatActiveDis' className='d-none h4aP '>
              <h4>Somewhat active</h4>
              <p className='peraDis'>0.5 - 1 hr walks per day</p>
              </div>

              <div id='activeDis' className='d-none h4aP '>
              <h4>Active</h4>
              <p className='peraDis'>1-2 hr walks per day</p>
              </div>

              <div id='veryActiveDis' className=' h4aP '>
              <h4>Very active</h4>
              <p className='peraDis'>2-3 hr walks per day</p>
              </div>

              <div id='fullOfEnergyDis' className='d-none h4aP '>
              <h4>Full of energy</h4>
              <p className='peraDis'>More than 3 hr walks per day</p>
              </div>
              
            </div>
            <div className="col-md-2"></div>
          </div>






            <div className="row freshRow  mt-5">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          
          <h3 className="freshFact">Fresh Fact</h3> 
          <img className="float-end" src={carrots} alt="" />
          <p className="p2">Did you know we make an advent calendar? Because dogs deserve to get in on the festive fun too. Just call us Santa Paws.</p>
        </div>
        <div className="col-md-3"></div>

            </div>


            <footer className=" footer  shadow py-4">
           <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
            <NavLink  to='/dog-Weight' type="button" className="btn  back py-2"><i className="fa fa-angle-left"></i>BACK</NavLink>
            
             <NavLink onClick={""} to='/Allergies'  type="button" className="btn  float-end continue py-2">CONTINUE <i className="fa fa-angle-right"></i></NavLink>
            </div>
            <div className="col-md-4"></div>
            </div>
           </footer>




    </div>
    
    </>
  )
}

export default ActiveDog