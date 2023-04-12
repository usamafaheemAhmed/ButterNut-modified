import React from 'react'


import dogWeight1 from"../../images/dogWeight1.svg";
import dogWeight2 from"../../images/dogWeight2.svg";
import dogWeight3 from"../../images/dogWeight3.svg";
import dogWeight4 from"../../images/dogWeight4.svg";
import dogWeight5 from"../../images/dogWeight5.svg";
import dogWeight6 from"../../images/dogWeight6.svg";
import dogWeight7 from"../../images/dogWeight7.svg";

import "./dogWeight.css";
import { NavLink } from "react-router-dom";
import carrots2 from "../../images/carrots2.svg";
import { useEffect } from 'react';

const Validation = Event => {
  if(document.getElementById("shpac").value === 0)
  {
    Event.preventDefault();
    document.getElementById("shpac").classList.add("is-invalid");
  }
  else{
    localStorage.setItem("dogWeight", document.getElementById("shpac").value)
  }
}





function changeRampUpHire(){
  document.getElementById("shpac").classList.remove("is-invalid");
  let employeeNumberRange= document.getElementById('customRange3');
  employeeNumberRange.oninput = function() {
      document.getElementById('shpac').value = this.value;
  }
  if(employeeNumberRange.value <= 7){
      document.getElementById("dogWeight1").classList.remove("dogImg");
      document.getElementById("dogWeight1").classList.remove("dogContainer");
      document.getElementById("dogWeight1").classList.add("selectedDogImg");
      document.getElementById("dogWeight1").classList.add("selecteddogContainer");

      document.getElementById("dogWeight2").classList.add("dogImg");
      document.getElementById("dogWeight2").classList.add("dogContainer");
      document.getElementById("dogWeight2").classList.remove("selectedDogImg");
      document.getElementById("dogWeight2").classList.remove("selecteddogContainer");

      document.getElementById("dogWeight3").classList.add("dogImg");
      document.getElementById("dogWeight3").classList.add("dogContainer");
      document.getElementById("dogWeight3").classList.remove("selectedDogImg");
      document.getElementById("dogWeight3").classList.remove("selecteddogContainer");

      document.getElementById("dogWeight4").classList.add("dogImg");
      document.getElementById("dogWeight4").classList.add("dogContainer");
      document.getElementById("dogWeight4").classList.remove("selectedDogImg");
      document.getElementById("dogWeight4").classList.remove("selecteddogContainer");

      document.getElementById("dogWeight5").classList.add("dogImg");
      document.getElementById("dogWeight5").classList.add("dogContainer");
      document.getElementById("dogWeight5").classList.remove("selectedDogImg");
      document.getElementById("dogWeight5").classList.remove("selecteddogContainer");

      document.getElementById("dogWeight6").classList.add("dogImg");
      document.getElementById("dogWeight6").classList.add("dogContainer");
      document.getElementById("dogWeight6").classList.remove("selectedDogImg");
      document.getElementById("dogWeight6").classList.remove("selecteddogContainer");

      document.getElementById("dogWeight7").classList.add("dogImg");
      document.getElementById("dogWeight7").classList.add("dogContainer");
      document.getElementById("dogWeight7").classList.remove("selectedDogImg");
      document.getElementById("dogWeight7").classList.remove("selecteddogContainer");

  }
    else if(employeeNumberRange.value <= 14) {
      document.getElementById("dogWeight1").classList.add("dogImg");
      document.getElementById("dogWeight1").classList.add("dogContainer");
      document.getElementById("dogWeight1").classList.remove("selectedDogImg");
      document.getElementById("dogWeight1").classList.remove("selecteddogContainer");

      document.getElementById("dogWeight3").classList.add("dogImg");
      document.getElementById("dogWeight3").classList.add("dogContainer");
      document.getElementById("dogWeight3").classList.remove("selectedDogImg");
      document.getElementById("dogWeight3").classList.remove("selecteddogContainer");

      document.getElementById("dogWeight2").classList.remove("dogImg");
      document.getElementById("dogWeight2").classList.remove("dogContainer");
      document.getElementById("dogWeight2").classList.add("selectedDogImg");
      document.getElementById("dogWeight2").classList.add("selecteddogContainer");

      document.getElementById("dogWeight4").classList.add("dogImg");
      document.getElementById("dogWeight4").classList.add("dogContainer");
      document.getElementById("dogWeight4").classList.remove("selectedDogImg");
      document.getElementById("dogWeight4").classList.remove("selecteddogContainer");

      document.getElementById("dogWeight5").classList.add("dogImg");
      document.getElementById("dogWeight5").classList.add("dogContainer");
      document.getElementById("dogWeight5").classList.remove("selectedDogImg");
      document.getElementById("dogWeight5").classList.remove("selecteddogContainer");

      document.getElementById("dogWeight6").classList.add("dogImg");
      document.getElementById("dogWeight6").classList.add("dogContainer");
      document.getElementById("dogWeight6").classList.remove("selectedDogImg");
      document.getElementById("dogWeight6").classList.remove("selecteddogContainer");

      document.getElementById("dogWeight7").classList.add("dogImg");
      document.getElementById("dogWeight7").classList.add("dogContainer");
      document.getElementById("dogWeight7").classList.remove("selectedDogImg");
      document.getElementById("dogWeight7").classList.remove("selecteddogContainer");
    }

    else if(employeeNumberRange.value <= 21   ) {
      document.getElementById("dogWeight3").classList.remove("dogImg");
      document.getElementById("dogWeight3").classList.remove("dogContainer");
      document.getElementById("dogWeight3").classList.add("selectedDogImg");
      document.getElementById("dogWeight3").classList.add("selecteddogContainer");
      
      document.getElementById("dogWeight1").classList.add("dogImg");
      document.getElementById("dogWeight1").classList.add("dogContainer");
      document.getElementById("dogWeight1").classList.remove("selectedDogImg");
      document.getElementById("dogWeight1").classList.remove("selecteddogContainer");

      document.getElementById("dogWeight2").classList.add("dogImg");
      document.getElementById("dogWeight2").classList.add("dogContainer");
      document.getElementById("dogWeight2").classList.remove("selectedDogImg");
      document.getElementById("dogWeight2").classList.remove("selecteddogContainer");

      
      document.getElementById("dogWeight4").classList.add("dogImg");
      document.getElementById("dogWeight4").classList.add("dogContainer");
      document.getElementById("dogWeight4").classList.remove("selectedDogImg");
      document.getElementById("dogWeight4").classList.remove("selecteddogContainer");

      document.getElementById("dogWeight5").classList.add("dogImg");
      document.getElementById("dogWeight5").classList.add("dogContainer");
      document.getElementById("dogWeight5").classList.remove("selectedDogImg");
      document.getElementById("dogWeight5").classList.remove("selecteddogContainer");

      document.getElementById("dogWeight6").classList.add("dogImg");
      document.getElementById("dogWeight6").classList.add("dogContainer");
      document.getElementById("dogWeight6").classList.remove("selectedDogImg");
      document.getElementById("dogWeight6").classList.remove("selecteddogContainer");

      document.getElementById("dogWeight7").classList.add("dogImg");
      document.getElementById("dogWeight7").classList.add("dogContainer");
      document.getElementById("dogWeight7").classList.remove("selectedDogImg");
      document.getElementById("dogWeight7").classList.remove("selecteddogContainer");

      
    }
    else if(employeeNumberRange.value <= 28 ) {

      document.getElementById("dogWeight4").classList.remove("dogImg");
      document.getElementById("dogWeight4").classList.remove("dogContainer");
      document.getElementById("dogWeight4").classList.add("selectedDogImg");
      document.getElementById("dogWeight4").classList.add("selecteddogContainer");
    
      document.getElementById("dogWeight1").classList.add("dogImg");
      document.getElementById("dogWeight1").classList.add("dogContainer");
      document.getElementById("dogWeight1").classList.remove("selectedDogImg");
      document.getElementById("dogWeight1").classList.remove("selecteddogContainer");

      document.getElementById("dogWeight2").classList.add("dogImg");
      document.getElementById("dogWeight2").classList.add("dogContainer");
      document.getElementById("dogWeight2").classList.remove("selectedDogImg");
      document.getElementById("dogWeight2").classList.remove("selecteddogContainer");

      document.getElementById("dogWeight3").classList.add("dogImg");
      document.getElementById("dogWeight3").classList.add("dogContainer");
      document.getElementById("dogWeight3").classList.remove("selectedDogImg");
      document.getElementById("dogWeight3").classList.remove("selecteddogContainer");
      
      document.getElementById("dogWeight5").classList.add("dogImg");
      document.getElementById("dogWeight5").classList.add("dogContainer");
      document.getElementById("dogWeight5").classList.remove("selectedDogImg");
      document.getElementById("dogWeight5").classList.remove("selecteddogContainer");

      document.getElementById("dogWeight6").classList.add("dogImg");
      document.getElementById("dogWeight6").classList.add("dogContainer");
      document.getElementById("dogWeight6").classList.remove("selectedDogImg");
      document.getElementById("dogWeight6").classList.remove("selecteddogContainer");

      document.getElementById("dogWeight7").classList.add("dogImg");
      document.getElementById("dogWeight7").classList.add("dogContainer");
      document.getElementById("dogWeight7").classList.remove("selectedDogImg");
      document.getElementById("dogWeight7").classList.remove("selecteddogContainer");

      
    }

    else if(employeeNumberRange.value <= 35 ) {

      document.getElementById("dogWeight5").classList.remove("dogImg");
      document.getElementById("dogWeight5").classList.remove("dogContainer");
      document.getElementById("dogWeight5").classList.add("selectedDogImg");
      document.getElementById("dogWeight5").classList.add("selecteddogContainer");
    
      document.getElementById("dogWeight1").classList.add("dogImg");
      document.getElementById("dogWeight1").classList.add("dogContainer");
      document.getElementById("dogWeight1").classList.remove("selectedDogImg");
      document.getElementById("dogWeight1").classList.remove("selecteddogContainer");

      document.getElementById("dogWeight2").classList.add("dogImg");
      document.getElementById("dogWeight2").classList.add("dogContainer");
      document.getElementById("dogWeight2").classList.remove("selectedDogImg");
      document.getElementById("dogWeight2").classList.remove("selecteddogContainer");

      document.getElementById("dogWeight3").classList.add("dogImg");
      document.getElementById("dogWeight3").classList.add("dogContainer");
      document.getElementById("dogWeight3").classList.remove("selectedDogImg");
      document.getElementById("dogWeight3").classList.remove("selecteddogContainer");

      
      document.getElementById("dogWeight4").classList.add("dogImg");
      document.getElementById("dogWeight4").classList.add("dogContainer");
      document.getElementById("dogWeight4").classList.remove("selectedDogImg");
      document.getElementById("dogWeight4").classList.remove("selecteddogContainer");

      document.getElementById("dogWeight6").classList.add("dogImg");
      document.getElementById("dogWeight6").classList.add("dogContainer");
      document.getElementById("dogWeight6").classList.remove("selectedDogImg");
      document.getElementById("dogWeight6").classList.remove("selecteddogContainer");

      document.getElementById("dogWeight7").classList.add("dogImg");
      document.getElementById("dogWeight7").classList.add("dogContainer");
      document.getElementById("dogWeight7").classList.remove("selectedDogImg");
      document.getElementById("dogWeight7").classList.remove("selecteddogContainer");

      
    }

    else if(employeeNumberRange.value <= 42 ) {

      document.getElementById("dogWeight6").classList.remove("dogImg");
      document.getElementById("dogWeight6").classList.remove("dogContainer");
      document.getElementById("dogWeight6").classList.add("selectedDogImg");
      document.getElementById("dogWeight6").classList.add("selecteddogContainer");
    
      document.getElementById("dogWeight1").classList.add("dogImg");
      document.getElementById("dogWeight1").classList.add("dogContainer");
      document.getElementById("dogWeight1").classList.remove("selectedDogImg");
      document.getElementById("dogWeight1").classList.remove("selecteddogContainer");

      document.getElementById("dogWeight2").classList.add("dogImg");
      document.getElementById("dogWeight2").classList.add("dogContainer");
      document.getElementById("dogWeight2").classList.remove("selectedDogImg");
      document.getElementById("dogWeight2").classList.remove("selecteddogContainer");

      document.getElementById("dogWeight3").classList.add("dogImg");
      document.getElementById("dogWeight3").classList.add("dogContainer");
      document.getElementById("dogWeight3").classList.remove("selectedDogImg");
      document.getElementById("dogWeight3").classList.remove("selecteddogContainer");

      
      document.getElementById("dogWeight4").classList.add("dogImg");
      document.getElementById("dogWeight4").classList.add("dogContainer");
      document.getElementById("dogWeight4").classList.remove("selectedDogImg");
      document.getElementById("dogWeight4").classList.remove("selecteddogContainer");

      document.getElementById("dogWeight5").classList.add("dogImg");
      document.getElementById("dogWeight5").classList.add("dogContainer");
      document.getElementById("dogWeight5").classList.remove("selectedDogImg");
      document.getElementById("dogWeight5").classList.remove("selecteddogContainer");


      document.getElementById("dogWeight7").classList.add("dogImg");
      document.getElementById("dogWeight7").classList.add("dogContainer");
      document.getElementById("dogWeight7").classList.remove("selectedDogImg");
      document.getElementById("dogWeight7").classList.remove("selecteddogContainer");

      
    }

    else if(employeeNumberRange.value <= 50 ) {

      document.getElementById("dogWeight7").classList.remove("dogImg");
      document.getElementById("dogWeight7").classList.remove("dogContainer");
      document.getElementById("dogWeight7").classList.add("selectedDogImg");
      document.getElementById("dogWeight7").classList.add("selecteddogContainer");
    
      document.getElementById("dogWeight1").classList.add("dogImg");
      document.getElementById("dogWeight1").classList.add("dogContainer");
      document.getElementById("dogWeight1").classList.remove("selectedDogImg");
      document.getElementById("dogWeight1").classList.remove("selecteddogContainer");

      document.getElementById("dogWeight2").classList.add("dogImg");
      document.getElementById("dogWeight2").classList.add("dogContainer");
      document.getElementById("dogWeight2").classList.remove("selectedDogImg");
      document.getElementById("dogWeight2").classList.remove("selecteddogContainer");

      document.getElementById("dogWeight3").classList.add("dogImg");
      document.getElementById("dogWeight3").classList.add("dogContainer");
      document.getElementById("dogWeight3").classList.remove("selectedDogImg");
      document.getElementById("dogWeight3").classList.remove("selecteddogContainer");

      
      document.getElementById("dogWeight4").classList.add("dogImg");
      document.getElementById("dogWeight4").classList.add("dogContainer");
      document.getElementById("dogWeight4").classList.remove("selectedDogImg");
      document.getElementById("dogWeight4").classList.remove("selecteddogContainer");

      document.getElementById("dogWeight5").classList.add("dogImg");
      document.getElementById("dogWeight5").classList.add("dogContainer");
      document.getElementById("dogWeight5").classList.remove("selectedDogImg");
      document.getElementById("dogWeight5").classList.remove("selecteddogContainer");


      document.getElementById("dogWeight6").classList.add("dogImg");
      document.getElementById("dogWeight6").classList.add("dogContainer");
      document.getElementById("dogWeight6").classList.remove("selectedDogImg");
      document.getElementById("dogWeight6").classList.remove("selecteddogContainer");

      
    }

    


  
}

const DogWeight = () => {
  useEffect(() => {
    changeRampUpHire()
    },[]);
  return (
    <>
    <div className="container-fluid">
       {/* header */}
       <div className="row header py-5">
        <div className="col-md-2"></div>
        <div className="col-md-8">
        <h3 className='text-center headerHeading'>How much does <span>{localStorage.getItem("dogName")}</span> weigh?</h3>
        </div>
        <div className="col-md-2"></div>
       </div>
          {/* header end */}

          <h1 className="text-center mt-5">
          ------------<span>{localStorage.getItem("dogName")}</span> weighs about.------------
          </h1>

          <div className="row mt-4">
            <div className="col-md-12">
              <div className='text-center'>
                <input type="text" id='shpac' className='form-control text-center input-box' placeholder='50'/><span className='mx-1'>Kg</span>
              </div>

            </div>

{/* images */}
            <div className="col-md-12 text-center my-3 ">
                <div className="dogContainer">
                     <img id='dogWeight1' className='dogImg mx-4' src={dogWeight1} alt="" />
                </div>
                <div className="dogContainer mx-2">
                <img id='dogWeight2' className='dogImg mx-3' src={dogWeight2} alt="" />
                    </div>

                    <div className="dogContainer mx-2">
                    <img id='dogWeight3' className='dogImg mx-3' src={dogWeight3} alt="" />

                    </div>
                    <div className="dogContainer mx-2">
                    <img id='dogWeight4' className='dogImg mx-3' src={dogWeight4} alt="" />

                    </div>
                    <div className="dogContainer mx-2">
                    <img id='dogWeight5' className='dogImg mx-3' src={dogWeight5} alt="" />

                    </div>

                    <div className="dogContainer mx-2">
                    <img id='dogWeight6' className='dogImg mx-3' src={dogWeight6} alt="" />

                    </div>

                    <div className="dogContainer mx-2 ">
                    <img id='dogWeight7' className='dogImg mx-3' src={dogWeight7} alt="" />

                    </div>
            </div>

            <div className='col-md12'>


            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-12 text-center">
             
            {/*<span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;0Kg</span>*/}
            
            <span className='startWight'>0Kg</span>
            <input onChange={changeRampUpHire} type="range" class=" mx-2 pt-3 " from='1' min="1" max="50" step="1" id="customRange3" />

            <span className='startWight2'>50Kg+</span>



            <h6 className='text-center mt-2'>Use the slider above to give us her approximate weight.</h6>
            </div>
          </div>

          

          <div className="row freshRow mt-4">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          
          <h3 className="freshFact">Fresh Fact</h3> 
          <img className="float-end" src={carrots2} alt="" />
          <p className="p2">Did you know? We taste-test every one of our fresh recipes ourselves, so we can be sure that they're good enough for our Butternutters. Pass us a spoon.</p>
        </div>
        <div className="col-md-3"></div>

            </div>
    
    
    <footer className=" footer  shadow py-4">
           <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
            <NavLink  to='/body-look' type="button" className="btn  back py-2"><i class="fa fa-angle-left"></i>BACK</NavLink>
            
             <NavLink to='/Activity' onClick={Validation} type="button" className="btn  float-end continue py-2">CONTINUE <i className="fa fa-angle-right"></i></NavLink>
            </div>
            <div className="col-md-4"></div>
            </div>
           </footer>
           </div>
    </>
  )
}

export default DogWeight